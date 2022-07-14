// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

import {Solenv} from "solenv/Solenv.sol";

import {Comment} from "../Comment.sol";
import {Log} from "../Log.sol";
import {Page} from "../Page.sol";
import {Tag} from "../Tag.sol";

contract DeployRlog is Script {
    // Deployable contracts
    Comment public commentContract;
    Log public logContract;
    Page public pageContract;
    Tag public tagContract;

    function run() public {
        // Deployment config from .env.local file
        Solenv.config(".env.local");
        // address deployer = vm.envAddress("DEPLOYER");

        vm.startBroadcast();
        console.log(msg.sender);

        // Deploy comment contract
        commentContract = new Comment();

        // Deploy log contract
        logContract = new Log();

        // Deploy page contract
        pageContract = new Page();

        // Deploy tag contract
        tagContract = new Tag();

        vm.stopBroadcast();
    }
}
