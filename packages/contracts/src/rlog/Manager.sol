// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Relational} from "./Relational.sol";
import {Log} from "./Log.sol";
import {Tag} from "./Tag.sol";
import "forge-std/console.sol";

contract Manager is Ownable {
    Log log;
    Tag tag;

    constructor(address logAddr, address tagAddr) {
        log = Log(logAddr);
        tag = Tag(tagAddr);
    }

    // create log with tags (new and existing)
    function createLogWithTags(
        string memory _logData,
        string[] memory _newTags,
        uint256[] memory _existingTags
    ) public {
        Relational.Relationship[]
            memory relationships = _createTagsGetRelationships(
                _newTags,
                _existingTags
            );

        // create log
        log.create(_logData, relationships); // TODO: shouldnt duplicate tags
    }

    function addTagsToLog(
        uint256 logID,
        string[] memory _newTags,
        uint256[] memory _existingTags
    ) public {
        Relational.Relationship[]
            memory relationships = _createTagsGetRelationships(
                _newTags,
                _existingTags
            );

        for (uint256 i = 0; i < relationships.length; i++) {
            Relational(relationships[i].addr).addBiDirectionalRelationship(
                logID,
                relationships[i]
            );
        }

        // update log with tags (new and existing)
        // tag.addTagsToLog(_existingTags, logId);
    }

    function _createTagsGetRelationships(
        string[] memory _newTags,
        uint256[] memory _existingTags
    ) internal returns (Relational.Relationship[] memory relationships) {
        // create the new tags
        uint256[] memory newTagIds = createTags(_newTags);

        // create relationships for the new tags
        relationships = new Relational.Relationship[](
            _newTags.length + _existingTags.length
        );

        for (uint256 i = 0; i < _newTags.length; i++) {
            console.log("on tag", i);
            relationships[i] = Relational.Relationship({
                addr: address(tag),
                id: newTagIds[i]
            });
        }

        for (uint256 i = 0; i < _existingTags.length; i++) {
            console.log("on tag2", i);
            relationships[i + _newTags.length] = Relational.Relationship({
                addr: address(tag),
                id: _existingTags[i]
            });
        }

        return relationships;
    }

    function createTags(string[] memory _newTags)
        public
        returns (uint256[] memory ids)
    {
        ids = new uint256[](_newTags.length);
        Relational.Relationship[]
            memory relationships = new Relational.Relationship[](0);
        for (uint256 i = 0; i < _newTags.length; i++) {
            ids[i] = tag.create(_newTags[i], relationships);
        }

        return ids;
    }

    function multiCall(address[] calldata targets, bytes[] calldata data)
        public
        view
        returns (bytes[] memory)
    {
        require(targets.length == data.length, "target length != data length");

        bytes[] memory results = new bytes[](data.length);

        for (uint256 i; i < targets.length; i++) {
            (bool success, bytes memory result) = targets[i].staticcall(
                data[i]
            );
            require(success, "call failed");
            results[i] = result;
        }

        return results;
    }
}
