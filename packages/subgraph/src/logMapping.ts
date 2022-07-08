import { Log, LogCreated, LogEdited, LogRemoved } from "../generated/Log/Log";
import {
  Comment as CommentEntity,
  Page as PageEntity,
  Tag as TagEntity,
  Log as LogEntity,
  Wallet,
} from "../generated/schema";
import { getType } from "./parse";

export function handleLogCreated(event: LogCreated): void {
  const wallet = new Wallet(event.params.data.author.toHexString());
  const log = new LogEntity(event.params.id.toString());

  log.author = event.params.data.author.toHexString();
  log.created = event.params.data.createdTimestamp;
  log.modified = event.params.data.modifiedTimestamp;
  log.data = event.params.data.data;

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
