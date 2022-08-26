// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Wallet} from "./Wallet.sol";

contract WalletFactory {
    event WalletCreated(address creator, address wallet);

    mapping(address => address[]) wallets;

    function getWallets(address creator)
        public
        view
        returns (address[] memory)
    {
        return wallets[creator];
    }

    /**
     * @dev Deploys and returns the address of a clone that mimics the behaviour of `implementation`.
     *
     * This function uses the create opcode, which should never revert.
     */
    function clone(address implementation) public returns (address instance) {
        /// @solidity memory-safe-assembly
        assembly {
            // Cleans the upper 96 bits of the `implementation` word, then packs the first 3 bytes
            // of the `implementation` address with the bytecode before the address.
            mstore(
                0x00,
                or(
                    shr(0xe8, shl(0x60, implementation)),
                    0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000
                )
            )
            // Packs the remaining 17 bytes of `implementation` with the bytecode after the address.
            mstore(
                0x20,
                or(shl(0x78, implementation), 0x5af43d82803e903d91602b57fd5bf3)
            )
            instance := create(0, 0x09, 0x37)
        }
        require(instance != address(0), "ERC1167: create failed");

        // set the owner of the wallet to msg.sender
        Wallet wallet = Wallet(payable(instance));
        wallet.initialize(msg.sender);

        // keep track of who is creating wallets (for webui)
        emit WalletCreated(msg.sender, instance);
        address[] storage w = wallets[msg.sender];
        w.push(instance);
    }
}
