// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/wallet/Wallet.sol";
import "../src/wallet/WalletFactory.sol";

contract WalletTest is Test {
    Wallet wallet;
    Wallet wallet2;
    Wallet wallet3;
    WalletFactory factory;

    address constant CJ = 0xD286064cc27514B914BAB0F2FaD2E1a89A91F314;
    address constant signer = 0xc64F41883320c63A6C12c91517dFd2bcB58175ff;
    address constant forwarder = 0x104dBDF6a0259256e6fF70a996Ec465f5a161a21;

    function setUp() public {
        vm.deal(CJ, 100 ether);
        vm.deal(forwarder, 1 ether);
        console.log("creating wallet");
        vm.prank(CJ);
        wallet = new Wallet();

        vm.prank(CJ);
        factory = new WalletFactory();

        vm.deal(address(wallet), 10 ether);
        assert(address(wallet).balance == 10 ether);

        vm.prank(CJ);
        wallet.addSigner(signer);

        console.log("keccak256(abi.encodePacked(address))");
        console.logBytes32(keccak256(abi.encodePacked(CJ)));

        // console.log(address(wallet));
        // console.log(address(factory));
    }

    function testClone() public {
        vm.prank(signer);
        wallet2 = Wallet(payable(factory.clone(address(wallet))));
        assert(wallet2.owner() == signer);
        address[] memory wallets = factory.getWallets(signer);
        assert(wallets.length == 1);
        assert(wallets[0] == address(wallet2));

        vm.prank(signer);
        wallet3 = Wallet(payable(factory.clone(address(wallet))));
        assert(wallet3.owner() == signer);
        wallets = factory.getWallets(signer);
        assert(wallets.length == 2);
        assert(wallets[0] == address(wallet2));
        assert(wallets[1] == address(wallet3));
    }
}
