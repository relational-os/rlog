import React from "react";
import { gql } from "urql";
import { useLatestLogsByAuthorAndTagsQuery } from "../../codegen/subgraph";
import LogItem from "./LogItem";

gql`
  query LatestLogsByAuthorAndTags($authors: [String!], $tags: [String!]) {
    logs(
      first: 100
      orderBy: created
      orderDirection: desc
      where: { author_in: $authors, tags_: { name_in: $tags } }
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

const FeedAuthorsAndTags = ({
  searchQueryTags,
  searchQueryAuthors,
}: {
  searchQueryTags: string[];
  searchQueryAuthors: string[];
}) => {
  const [query] = useLatestLogsByAuthorAndTagsQuery({
    variables: { tags: searchQueryTags, authors: searchQueryAuthors },
  });

  return (
    <div className="flex flex-col space-y-2 p-2">
      {query &&
        query.data &&
        query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
    </div>
  );
};

export default FeedAuthorsAndTags;
