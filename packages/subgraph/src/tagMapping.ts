import {
  Comment as CommentEntity,
  Log as LogEntity,
  Page as PageEntity,
  Tag as TagEntity,
  Wallet,
} from "../generated/schema";
import { Tag, TagCreated } from "../generated/Tag/Tag";
import { Wallet as WalletContract } from "../generated/Tag/Wallet";

export function handleTagCreated(event: TagCreated): void {
  const wallet = new Wallet(event.params.tag.author.toHexString());
  const tag = new TagEntity(event.params.id.toString());

  // do a smart contract lookup
  const owner = WalletContract.bind(event.params.tag.author).try_owner();
  if (owner.reverted) {
    wallet.owner = event.params.tag.author.toHexString();
  } else {
    wallet.owner = owner.value.toHexString();
  }

  tag.author = event.params.tag.author.toHexString();
  tag.created = event.params.tag.createdTimestamp;
  tag.name = event.params.tag.name;

  tag.pages = [];
  tag.logs = [];
  tag.comments = [];

  wallet.save();
  tag.save();
}
