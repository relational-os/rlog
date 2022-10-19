import {
  Log as LogEntity,
  Tag as TagEntity,
  Wallet,
} from "../generated/schema";
import { RelationshipAdded, Tag, TagCreated } from "../generated/Tag/Tag";
import { Wallet as WalletContract } from "../generated/Tag/Wallet";
import { getType } from "./parse";

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

  tag.logs = [];

  wallet.save();
  tag.save();
}

export function handleRelationshipAdded(event: RelationshipAdded): void {
  const tag = TagEntity.load(event.params.id.toString());
  if (tag == null) {
    // todo create one?
    return;
  }

  const relationship = event.params.relationship;
  const type = getType(relationship.addr.toHexString());

  if (type == "log") {
    let logs = tag.logs!.concat([relationship.id.toString()]);
    tag.logs = logs;
  }
  tag.save();
}
