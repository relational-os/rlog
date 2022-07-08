// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/wallet/Wallet.sol";

// should be testing this with erc20, erc721, etc. for now doesnt matter
contract BasicNFT {
    error WrongAmount();
    error MessageRevert(string);

    function mint() public payable {
        if (msg.value != .1 ether) revert WrongAmount();
    }

    function revertMsg(string memory message, bool shouldRevert)
        public
        pure
        returns (bool, string memory)
    {
        if (shouldRevert) revert MessageRevert(message);
        return (true, string.concat(message, " cj"));
    }
}

contract WalletTest is Test {
    BasicNFT nftContract;
    Wallet wallet;
    Wallet wallet2;

    address constant CJ = 0xD286064cc27514B914BAB0F2FaD2E1a89A91F314;
    address constant signer = 0xc64F41883320c63A6C12c91517dFd2bcB58175ff;
    address constant forwarder = 0x104dBDF6a0259256e6fF70a996Ec465f5a161a21;

    // TODO REGENERATE SIG's
    // THERE IS PROBABLY A DIFFERENT CONTRACT DEPLOY ADDRESS WHICH IS THROWING IT OFF
    // TODO should add this to ENV or something generated from JS directly

    bytes constant VALID_SIGNATURE =
        hex"ca5070e347810b00758e731b9f583444f2fecd9df0b0f0dc006fae99ea46d80c6ac810934dc9256b0e30360b5cf1b33fa342ec5c974943b65fa45a358eed527d1b";
    bytes constant INVALID_SIGNATURE =
        hex"9a43544d70165601b822f9e70297706cf4d3a672ace8187201617c158bf7f3325697393f29fb0c3ead0bd17da5ed9d045ba0dd551ad14198e7d676741ece17111b";
    bytes constant NOT_ALLOWED_SIGNATURE =
        hex"22eff80d9ff006667619941fd4fb74b08165b79bf6a69b70f46b55188c9749d547d7e0e5b4b2cfb54e20be4ad5839e21cb03ccc81730766d2e669533d03a2f8b1c";
    bytes constant REVERT_SIGNATURE =
        hex"d7433e54333dd86c29c45be883c736add0dca0de0224b07a862f0443243f15f46cdfeec5ffcb05634704c9d63a0f0ce7748b8c9a9e85ebe3475ba7623ddc8a8d1b";

    bytes constant TWO_PARAM_SIGNATURE =
        hex"d0cdea68b75ed8e32ef448bb5376e20cd3418424913fbcbf350582476ab304bb4f0b3751803425b8113634f30b33ab682eb5fcfe57f8586df52ea834f3086a991c";
    bytes constant TWO_PARAM_REVERT_SIGNATURE =
        hex"ea40fe3b29e62b0b3c5d5553332c4b59c7aad2326bb762bc60c58d6f70b42937704e15a4ba9a04dacb8de079f6138228a7ae0d2259d891a6d64bf5e4d2911b8f1c";

    function setUp() public {
        nftContract = new BasicNFT();

        vm.deal(CJ, 100 ether);
        vm.deal(forwarder, 1 ether);
        vm.prank(CJ);
        wallet = new Wallet();

        vm.deal(address(wallet), 10 ether);
        assert(address(wallet).balance == 10 ether);

        vm.prank(CJ);
        wallet.addSigner(signer);

        // console.log(address(wallet));
        // console.log(address(nftContract));
    }

    function testAddSigner() public {
        vm.prank(CJ);
        wallet.addSigner(CJ);
        assert(wallet.allowedSigners(CJ));
    }

    function testVerify() public {
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: .1 ether,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"1249c58b"
        });

        // uint256 forwarderBalance = forwarder.balance;
        // console.log("f balance", forwarderBalance);

        vm.prank(forwarder);
        (bool verified, address signedBy) = wallet.verify(req, VALID_SIGNATURE);
        assert(verified);
        assert(signedBy == signer);
    }

    function testExecute() public {
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: .1 ether,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"1249c58b"
        });
        vm.prank(forwarder);
        (bool success, ) = wallet.execute(req, VALID_SIGNATURE);
        assert(success);
        assert(address(wallet).balance == 10 ether - .1 ether);
    }

    function testExecuteInvalidSigner() public {
        // signer signed some valid data, but they are not part of allowed signers
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: address(0xEDFE9f487E873cdCDa34e42F36A71D318DE0FF87),
            to: address(nftContract),
            value: .1 ether,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"1249c58b"
        });
        vm.prank(forwarder);
        vm.expectRevert(Wallet.SignerNotAllowed.selector);
        (bool success, ) = wallet.execute(req, NOT_ALLOWED_SIGNATURE);
        assert(!success);
    }

    function testInvalidSignature() public {
        // signer signed different data than the contract received
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: .1 ether,
            gas: 1000000,
            timestamp: 1655843923, // signer signed this as 1655843922
            data: hex"1249c58b"
        });
        vm.prank(forwarder);
        vm.expectRevert(Wallet.InvalidSignature.selector);
        (bool success, ) = wallet.execute(req, INVALID_SIGNATURE);
        assert(!success);
    }

    function testExecuteRevert() public {
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: .01 ether,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"1249c58b"
        });
        vm.prank(forwarder);
        vm.expectRevert(BasicNFT.WrongAmount.selector);
        (bool success, ) = wallet.execute(req, REVERT_SIGNATURE);
        assert(!success);
    }

    function testExecuteParams() public {
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: 0,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"cacb1d6600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000568656c6c6f000000000000000000000000000000000000000000000000000000"
        });

        vm.prank(forwarder);
        (bool success, bytes memory returnData) = wallet.execute(
            req,
            TWO_PARAM_SIGNATURE
        );

        assert(success);
        (bool functionSuccess, string memory outputString) = abi.decode(
            returnData,
            (bool, string)
        );
        assert(functionSuccess);
        assert(keccak256(bytes(outputString)) == keccak256("hello cj"));
    }

    function testExecuteParamsRevertMessage() public {
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: 0,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"cacb1d6600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000568656c6c6f000000000000000000000000000000000000000000000000000000"
        });

        vm.prank(forwarder);
        vm.expectRevert(
            abi.encodeWithSelector(BasicNFT.MessageRevert.selector, "hello")
        );
        wallet.execute(req, TWO_PARAM_REVERT_SIGNATURE);
    }

    function testDuplicateMessage() public {
        // 1. execute once correctly
        Wallet.ForwardRequest memory req = Wallet.ForwardRequest({
            from: signer,
            to: address(nftContract),
            value: .1 ether,
            gas: 1000000,
            timestamp: 1655843923,
            data: hex"1249c58b"
        });
        vm.prank(forwarder);
        (bool success, ) = wallet.execute(req, VALID_SIGNATURE);
        assert(success);
        assert(address(wallet).balance == 10 ether - .1 ether);

        // 2. cant execute same request again
        vm.prank(forwarder);
        vm.expectRevert(Wallet.DuplicateRequest.selector);
        (success, ) = wallet.execute(req, VALID_SIGNATURE);
    }
}
