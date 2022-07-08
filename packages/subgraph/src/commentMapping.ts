import {
  Comment,
  CommentCreated,
  CommentEdited,
  CommentRemoved,
} from "../generated/Comment/Comment";
import {
  Comment as CommentEntity,
  Page as PageEntity,
  Tag as TagEntity,
  Log as LogEntity,
  Wallet,
} from "../generated/schema";
import { getType } from "./parse";

export function handleCommentCreated(event: CommentCreated): void {
  const wallet = new Wallet(event.params.data.author.toHexString());
  const comment = new CommentEntity(event.params.id.toString());

  comment.author = event.params.data.author.toHexString();
  comment.created = event.params.data.createdTimestamp;
  comment.modified = event.params.data.modifiedTimestamp;
  comment.data = event.params.data.data;

  // go through relationships and add them (there can only be one)
  for (let i = 0; i < event.params.data.relationships.length; i++) {
    const relationship = event.params.data.relationships[i];
    const type = getType(relationship.addr.toHexString());

    if (type == "page") {
      comment.page = relationship.id.toString();
    } else if (type == "log") {
      comment.log = relationship.id.toString();
    } else if (type == "comment") {
      // TODO
      // let comments = comment.comments ? comment.comments : [];
      // comments.push(relationship.id.toString());
      // comment.comments = comments;
    }
  }

  wallet.save();
  comment.save();
}

export function handleCommentEdited(event: CommentEdited): void {
  const comment = CommentEntity.load(event.params.id.toString());

  if (comment == null) {
    return;
  }

  comment.modified = event.block.timestamp;
  comment.data = event.params.data;

  comment.save();
}

// TODO: implement. handling relationships might be a big problem.
export function handleCommentRemoved(event: CommentRemoved): void {}
