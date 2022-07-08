import { Tag, TagCreated } from "../generated/Tag/Tag";
import {
  Comment as CommentEntity,
  Page as PageEntity,
  Log as LogEntity,
  Tag as TagEntity,
  Wallet,
} from "../generated/schema";

export function handleTagCreated(event: TagCreated): void {
  const wallet = new Wallet(event.params.tag.author.toHexString());
  const tag = new TagEntity(event.params.id.toString());

  tag.author = event.params.tag.author.toHexString();
  tag.created = event.params.tag.createdTimestamp;
  tag.name = event.params.tag.name;

  wallet.save();
  tag.save();
}
