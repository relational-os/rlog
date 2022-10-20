// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "forge-std/Script.sol";

import {Log} from "../src/rlog/Log.sol";
import {Collection} from "../src/rlog/Collection.sol";
import {Tag} from "../src/rlog/Tag.sol";
import {Manager} from "../src/rlog/Manager.sol";

contract DeployRlog is Script {
    // Deployable contracts
    Log public logContract;
    Collection public collectionContract;
    Tag public tagContract;
    Manager public managerContract;

    function run() public {
        // Deployment config from .env.local file
        // Solenv.config(".env.local");
        // address deployer = vm.envAddress("DEPLOYER");
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        console.log(msg.sender);

        // Deploy log contract
        // logContract = new Log();

        // Deploy tag contract
        // tagContract = new Tag();

        managerContract = new Manager(
            address(0x306459A7599dabd032ECb31c0d6F9fE277830297),
            address(0xdaD0D757C142bE18BEc9c1f57A606AAE737d9E35)
        );

        // Deploy collection contract
        // collectionContract = new Collection();

        vm.stopBroadcast();
    }
}
