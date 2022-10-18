// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import "forge-std/Script.sol";

import {Log} from "../src/rlog/Log.sol";
import {Collection} from "../src/rlog/Collection.sol";
import {Tag} from "../src/rlog/Tag.sol";

contract DeployRlog is Script {
    // Deployable contracts
    Log public logContract;
    Collection public collectionContract;
    Tag public tagContract;

    function run() public {
        // Deployment config from .env.local file
        // Solenv.config(".env.local");
        // address deployer = vm.envAddress("DEPLOYER");
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        console.log(msg.sender);

        // Deploy log contract
        logContract = new Log();

        // Deploy tag contract
        tagContract = new Tag();

        // Deploy collection contract
        collectionContract = new Collection();

        vm.stopBroadcast();
    }
}
