import {
  Page,
  PageCreated,
  PageEdited,
  RelationshipAdded,
  PageRemoved,
} from "../generated/Page/Page";
import {
  Comment as CommentEntity,
  Page as PageEntity,
  Tag as TagEntity,
  Log as LogEntity,
  Wallet,
} from "../generated/schema";
import { getType } from "./parse";

export function handlePageCreated(event: PageCreated): void {
  const wallet = new Wallet(event.params.data.author.toHexString());
  const page = new PageEntity(event.params.id.toString());

  page.author = event.params.data.author.toHexString();
  page.created = event.params.data.createdTimestamp;
  page.modified = event.params.data.modifiedTimestamp;
  page.data = event.params.data.data;
  page.tags = [];

  // go through relationships and add them (there can only be one)
  for (let i = 0; i < event.params.data.relationships.length; i++) {
    const relationship = event.params.data.relationships[i];
    const type = getType(relationship.addr.toHexString());

    // TODO: figure out how to handle arrays. (this might be a thing we can use the graphql file for)
    if (type == "page") {
      let pages = page.pages;
      pages.push(relationship.id.toString());
      page.pages = pages;

      // set up reverse relationship
      const page2 = PageEntity.load(relationship.id.toString());
      pages = page2!.pages;
      page2!.pages = pages;
      page2!.save();
    } else if (type == "tag") {
      let tags = page.tags;
      tags.push(relationship.id.toString());
      page.tags = tags;

      // set up reverse relationship
      const tag = TagEntity.load(relationship.id.toString());
      let pages = tag!.pages;
      pages.push(event.params.id.toString());
      tag!.pages = pages;
      tag!.save();
    } else if (type == "comment") {
      let comments = page.comments;
      comments.push(relationship.id.toString());
      page.comments = comments;
    } else if (type == "log") {
      let logs = page.logs;
      logs.push(relationship.id.toString());
      page.logs = logs;

      // set up reverse relationship
      const log = LogEntity.load(relationship.id.toString());
      let pages = log!.pages;
      pages.push(event.params.id.toString());
      log!.pages = pages;
      log!.save();
    }
  }

  wallet.save();
  page.save();
}

export function handlePageEdited(event: PageEdited): void {
  const page = PageEntity.load(event.params.id.toString());

  if (page == null) {
    return;
  }

  page.modified = event.block.timestamp;
  page.data = event.params.data;

  page.save();
}

// TODO implement
export function handleRelationshipAdded(event: RelationshipAdded): void {}

// TODO: implement. handling relationships might be a big problem.
export function handlePageRemoved(event: PageRemoved): void {}
