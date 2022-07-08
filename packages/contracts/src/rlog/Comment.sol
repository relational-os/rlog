// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Relational.sol";

contract Comment is Relational {

    mapping(uint256 => Post) public comments;
    uint256 public commentID;

    event CommentCreated(uint256 id, Post data, Relationship parent);
    event CommentEdited(uint256 id, string data);
    event CommentRemoved(uint256 id);

    function create(string memory data, Relationship memory parent)  public {
        Post storage comment = comments[commentID];

        comment.id = commentID;
        comment.author = msg.sender;
        comment.createdTimestamp = block.timestamp;
        comment.modifiedTimestamp = block.timestamp;
        comment.data = data;
        comment.relationships.push(parent);
        emit CommentCreated(comment.id, comment, parent);

        commentID++;
    }

    function edit(uint256 id, string memory data) public {
        Post storage comment = comments[id];

        comment.modifiedTimestamp = block.timestamp;
        comment.data = data;

        emit CommentEdited(id, data);
    }

    function remove(uint256 id) public {
        delete comments[id];
        emit CommentRemoved(id);
    }

}

