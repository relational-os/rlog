// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/rlog/Tag.sol";
import "../src/rlog/Log.sol";
import "../src/rlog/Manager.sol";
import "../src/rlog/Relational.sol";

contract WalletTest is Test {
    Tag tagContract;
    Log logContract;
    Manager managerContract;

    address constant CJ = 0xD286064cc27514B914BAB0F2FaD2E1a89A91F314;

    function setUp() public {
        vm.deal(CJ, 100 ether);

        tagContract = new Tag();
        logContract = new Log();
        managerContract = new Manager(
            address(tagContract),
            address(logContract)
        );
    }

    function testCreateLogWithTags() public {
        string[] memory tags5 = new string[](5);
        string[] memory tags3 = new string[](3);
        uint256[] memory existingTags0 = new uint256[](0);
        uint256[] memory existingTags2 = new uint256[](2);

        existingTags2[0] = 4;
        existingTags2[1] = 3;

        tags5[0] = "tag1";
        tags5[1] = "tag2";
        tags5[2] = "tag3";
        tags5[3] = "tag4";
        tags5[4] = "tag5";

        tags3[0] = "tag13";
        tags3[1] = "tag23";
        tags3[2] = "tag23";

        managerContract.createLogWithTags("test", tags5, existingTags0);

        managerContract.createLogWithTags("test2", tags3, existingTags2);
    }

    function testAddTagsToLog() public {
        testCreateLogWithTags();

        string[] memory tags = new string[](1);
        uint256[] memory existingTags0 = new uint256[](2);

        tags[0] = "over 9000";
        existingTags0[0] = 1;
        existingTags0[1] = 2;

        managerContract.addTagsToLog(1, tags, existingTags0);
    }
}
