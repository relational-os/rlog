import React from "react";
import { gql } from "urql";
import { useLatestLogsByTagsQuery } from "../../codegen/subgraph";
import LogItem from "./LogItem";

gql`
  query LatestLogsByTags($tags: [String!]) {
    logs(
      first: 100
      orderBy: created
      orderDirection: desc
      where: { tags_: { name_in: $tags } }
    ) {
      id
      author {
        id
        owner
      }
      tags {
        name
        id
      }
      created
      data
      modified
    }
  }
`;

const FeedTags = ({ searchQueryTags }: { searchQueryTags: string[] }) => {
  const [query] = useLatestLogsByTagsQuery({
    variables: { tags: searchQueryTags },
  });

  return (
    <div className="flex flex-col space-y-2 p-2">
      {query &&
        query.data &&
        query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
    </div>
  );
};

export default FeedTags;
