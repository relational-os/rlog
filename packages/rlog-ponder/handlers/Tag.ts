import { TagCreatedHandler } from "../generated/Tag";

const handleTagCreated: TagCreatedHandler = async (event, context) => {
  return;
};

export const Tag = {
  TagCreated: handleTagCreated,
};
