import { Bytes, dataSource } from "@graphprotocol/graph-ts";

import { PublicMessage } from "../generated/Rlog/Rlog";
import { Message } from "../generated/schema";

const network = dataSource.network();
const chainId =
  network === "matic" ? "137" : network === "mumbai" ? "80001" : "137";

export function handlePublicMessage(event: PublicMessage): void {
  const id = `rlog:${chainId}:${event.block.number}:${event.logIndex}`;

  // Messages are currently immutable so we shouldn't need to load an
  // existing message by the same ID before setting/saving.
  const message = new Message(id);

  message.timestamp = event.block.timestamp.toU32();
  message.from = event.params.from;
  message.message = event.params.message;

  message.save();
}
