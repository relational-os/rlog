// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface Relational {

    // TODO review naming: could be "Link"
    struct Relationship {
        address addr;
        uint256 id;
        // maybe need to add author in here too
    }

    struct Post {
        uint256 id;
        address author;
        uint256 createdTimestamp;
        uint256 modifiedTimestamp;
        string data;
        Relationship[] relationships;
    }


}

