// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Relational.sol";

contract Collection is Relational {
    struct CollectionContents {
        uint256 id;
        address author;
        uint256 createdTimestamp;
        string name;
        Relationship[] relationships;
    }

    mapping(uint256 => CollectionContents) public collections;
    uint256 public collectionCount;

    event CollectionCreated(uint256 id, CollectionContents collection);

    function create(string memory name, Relationship[] memory relationships)
        public
    {
        CollectionContents storage collection = collections[collectionCount];

        collection.id = collectionCount;
        collection.author = msg.sender;
        collection.createdTimestamp = block.timestamp;
        collection.name = name;

        for (uint256 i = 0; i < relationships.length; i++) {
            addBiDirectionalRelationship(collectionCount, relationships[i]);
        }

        emit CollectionCreated(collectionCount, collection);
        collectionCount++;
    }

    function addBiDirectionalRelationship(
        uint256 collectionID,
        Relationship memory relationship
    ) public {
        Relationship memory thisCollection = Relationship({
            addr: address(this),
            id: collectionID
        });

        Relational(relationship.addr).addUniDirectionalRelationship(
            relationship.id,
            thisCollection
        );
        addUniDirectionalRelationship(collectionID, relationship);
    }

    function addUniDirectionalRelationship(
        uint256 collectionID,
        Relationship memory relationship
    ) public {
        CollectionContents storage collection = collections[collectionID];
        collection.relationships.push(relationship);
        emit RelationshipAdded(collectionID, relationship);
    }
}
