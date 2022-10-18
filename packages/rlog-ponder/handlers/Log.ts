import {
  LogCreatedHandler,
  LogEditedHandler,
  LogRemovedHandler,
} from "../generated/Log";

const handleLogCreated: LogCreatedHandler = async (event, context) => {
  const { Wallet, Log } = context.entities;

  const wallet = Wallet.get(event.params.data.author);
  if (!wallet) {
  }

  // Log.insert({
  //   id: event.params.id.toString(),
  //   author: event.params.data.author,
  //   created: event.params.data.createdTimestamp.toString(),
  //   modified: event.params.data.modifiedTimestamp.toString(),
  //   data: event.params.data.data,
  //   // logs: [],
  //   // tags: [],
  //   logs: ""
  // });

  return;
};

const handleLogEdited: LogEditedHandler = async (event, context) => {
  return;
};

const handleLogRemoved: LogRemovedHandler = async (event, context) => {
  return;
};

export const Log = {
  LogCreated: handleLogCreated,
  LogEdited: handleLogEdited,
  LogRemoved: handleLogRemoved,
};
