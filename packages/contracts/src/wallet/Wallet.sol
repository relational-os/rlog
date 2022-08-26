// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "forge-std/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

// TODO might be worth moving to: https://github.com/divergencetech/ethier/blob/main/contracts/crypto/SignatureChecker.sol
// or at least looking through it more deeply and perhaps conform to EIP 712

// TODO note to self, this is probably good enough to deploy for now
// can probably start to work on the other side of things.
// will need to integrate working with contracts into swift. this could be challenging
// but will demo something simple with the stream and the contract at: 0x7c376918cacf56576db22921b780f2c220b28c52

// TODO need to make sure no duplicate messages can go through
// TODO need to add events for adding a signer

// TODO need to go through and clean up the code

contract Wallet is EIP712, Ownable, Initializable {
    using ECDSA for bytes32;

    error SignerNotAllowed();
    error DuplicateRequest();
    error InvalidSignature();

    event SignerAdded(address signer);

    struct ForwardRequest {
        address from;
        address to;
        uint256 value;
        uint256 gas;
        uint256 timestamp;
        bytes data;
    }

    bytes32 private constant _TYPEHASH =
        keccak256(
            "ForwardRequest(address from,address to,uint256 value,uint256 gas,uint256 timestamp,bytes data)"
        );

    mapping(address => bool) public allowedSigners;
    mapping(bytes32 => bool) private _usedRequests;

    constructor() EIP712("PASSPORT", "0.0.1") {}

    function initialize(address owner) public initializer {
        Ownable._transferOwnership(owner);
    }

    function addSigner(address signer) public onlyOwner {
        allowedSigners[signer] = true;
        emit SignerAdded(signer);
    }

    function verify(ForwardRequest calldata req, bytes calldata signature)
        public
        view
        returns (bool, address)
    {
        address signer = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    _TYPEHASH,
                    req.from,
                    req.to,
                    req.value,
                    req.gas,
                    req.timestamp,
                    keccak256(req.data)
                )
            )
        ).recover(signature);
        return (signer == req.from, signer);
    }

    // function execute(ForwardRequest[] calldata reqs, bytes calldata signature)
    //     public
    //     payable
    //     returns (bool, bytes memory)
    // {
    // TODO should go through and execute multiple requests.
    // }

    function execute(ForwardRequest calldata req, bytes calldata signature)
        public
        payable
        returns (bool, bytes memory)
    {
        bytes32 requestHash = keccak256(abi.encode(req));
        // TODO try to break this according to:
        // https://github.com/OpenZeppelin/openzeppelin-contracts/security/advisories/GHSA-4h98-2769-gh6h
        // attempt resolution: https://discord.com/channels/890053994926460939/894657101899645059/1007379014131908730
        (bool valid, address signer) = verify(req, signature);

        if (!valid) revert InvalidSignature();
        if (!allowedSigners[signer]) revert SignerNotAllowed();
        if (_usedRequests[requestHash]) revert DuplicateRequest();

        _usedRequests[requestHash] = true;

        (bool success, bytes memory returndata) = req.to.call{
            gas: req.gas,
            value: req.value
        }(abi.encodePacked(req.data, req.from));

        // forward the revert upwards if possible
        // this was taken from SO: https://ethereum.stackexchange.com/questions/69133/forward-revert-message-from-low-level-solidity-call
        // possible that this is a better solution: https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/base/Multicall.sol
        if (!success) {
            assembly {
                let ptr := mload(0x40)
                let size := returndatasize()
                returndatacopy(ptr, 0, size)
                revert(ptr, size)
                // revert(add(returndata, 32), mload(returndata))
            }
        }
        // require(success, returndata);

        // Validate that the relayer has sent enough gas for the call.
        // See https://ronan.eth.link/blog/ethereum-gas-dangers/
        if (gasleft() <= req.gas / 63) {
            // We explicitly trigger invalid opcode to consume all gas and bubble-up the effects, since
            // neither revert or assert consume all gas since Solidity 0.8.0
            // https://docs.soliditylang.org/en/v0.8.0/control-structures.html#panic-via-assert-and-error-via-require
            /// @solidity memory-safe-assembly
            assembly {
                invalid()
            }
        }

        return (success, returndata);
    }

    receive() external payable {}
}
