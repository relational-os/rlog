import {
  Log,
  LogCreated,
  LogEdited,
  LogRemoved,
  RelationshipAdded,
} from "../generated/Log/Log";
import { Log as LogEntity, Wallet } from "../generated/schema";
import { Wallet as WalletContract } from "../generated/Tag/Wallet";
import { getType } from "./parse";

// function relationshipAdded(event: RelationshipAdded)

export function handleLogCreated(event: LogCreated): void {
  const wallet = new Wallet(event.params.data.author.toHexString());
  const log = new LogEntity(event.params.id.toString());

  // do a smart contract lookup
  const owner = WalletContract.bind(event.params.data.author).try_owner();
  if (owner.reverted) {
    wallet.owner = event.params.data.author.toHexString();
  } else {
    wallet.owner = owner.value.toHexString();
  }

  log.author = event.params.data.author.toHexString();
  log.created = event.params.data.createdTimestamp;
  log.modified = event.params.data.modifiedTimestamp;
  log.data = event.params.data.data;
  log.tags = [];
  log.logs = [];

  log.txHash = event.block.hash.toHexString();

  // go through relationships and add them (there can only be one)
  for (let i = 0; i < event.params.data.relationships.length; i++) {
    const relationship = event.params.data.relationships[i];
    const type = getType(relationship.addr.toHexString());

    // TODO: figure out how to handle arrays. (this might be a thing we can use the graphql file for)
    // if (type == "page") {
    //   log.page = relationship.id.toString();
    // } else if (type == "log") {
    //   log.log = relationship.id.toString();
    // } else if (type == "log") {
    // let logs = log.logs ? log.logs : [];
    // logs.push(relationship.id.toString());
    // log.logs = logs;
    // }
  }

  wallet.save();
  log.save();
}

export function handleRelationshipAdded(event: RelationshipAdded): void {
  const log = LogEntity.load(event.params.id.toString());
  if (log == null) {
    // todo create one?
    return;
  }

  const relationship = event.params.relationship;
  const type = getType(relationship.addr.toHexString());

  if (type == "tag") {
    let tags = log.tags!.concat([relationship.id.toString()]);
    log.tags = tags;
  }
  log.save();
}

export function handleLogEdited(event: LogEdited): void {
  const log = LogEntity.load(event.params.id.toString());

  if (log == null) {
    return;
  }

  log.modified = event.block.timestamp;
  log.data = event.params.data;

  log.save();
}

// TODO: implement. handling relationships might be a big problem.
export function handleLogRemoved(event: LogRemoved): void {}
