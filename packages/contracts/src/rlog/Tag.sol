// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Relational.sol";

contract Tag is Relational {
    struct TagContents {
        uint256 id;
        address author;
        uint256 createdTimestamp;
        string name;
        Relationship[] relationships;
    }

    mapping(uint256 => TagContents) public tags;
    uint256 public tagCount;

    event TagCreated(uint256 id, TagContents tag);

    function create(string memory name, Relationship[] memory relationships)
        public
        returns (uint256 id)
    {
        // fetch id
        id = tagCount;

        // get storage slot for new tag
        TagContents storage tag = tags[id];

        // set the new data for the tag
        tag.id = id;
        tag.author = msg.sender;
        tag.createdTimestamp = block.timestamp;
        tag.name = name;

        // add relationships to the tag
        for (uint256 i = 0; i < relationships.length; i++) {
            addBiDirectionalRelationship(tagCount, relationships[i]);
        }

        emit TagCreated(tagCount, tag);
        tagCount++;

        return id;
    }

    function addBiDirectionalRelationship(
        uint256 tagID,
        Relationship memory relationship
    ) public {
        Relationship memory thisTag = Relationship({
            addr: address(this),
            id: tagID
        });

        Relational(relationship.addr).addUniDirectionalRelationship(
            relationship.id,
            thisTag
        );
        addUniDirectionalRelationship(tagID, relationship);
    }

    function addUniDirectionalRelationship(
        uint256 tagID,
        Relationship memory relationship
    ) public {
        TagContents storage tag = tags[tagID];
        tag.relationships.push(relationship);
        emit RelationshipAdded(tagID, relationship);
    }
}
