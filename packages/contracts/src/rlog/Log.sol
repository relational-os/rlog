// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Relational.sol";

contract Log is Relational {

    event LogCreated(uint256 id, Post data);
    event LogEdited(uint256 id, string data);
    event LogRemoved(uint256 id);

    mapping(uint256 => Post) public logs;
    uint256 public logID;

    function create(string memory data) public {
        Post storage log = logs[logID];

        log.id = logID;
        log.author = msg.sender;
        log.createdTimestamp = block.timestamp;
        log.modifiedTimestamp = block.timestamp;
        log.data = data;
        emit LogCreated(log.id, log);

        logID++;
    }

    // TODO need to add errors, and probably add relationships too.

    function edit(uint256 id, string memory data) public {
        Post storage log = logs[id];

        log.modifiedTimestamp = block.timestamp;
        log.data = data;

        emit LogEdited(id, data);
    }

    function remove(uint256 id) public {
        delete logs[id];
        emit LogRemoved(id);
    }


}

