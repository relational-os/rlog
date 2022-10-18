import { CollectionCreatedHandler } from "../generated/Collection";

const handleCollectionCreated: CollectionCreatedHandler = async (
  event,
  context
) => {
  return;
};

export const Collection = {
  CollectionCreated: handleCollectionCreated,
};
