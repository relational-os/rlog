import React from "react";
import { gql } from "urql";
import { useLatestLogsByAuthorQuery } from "../../codegen/subgraph";
import LogItem from "./LogItem";

gql`
  query LatestLogsByAuthor($authors: [String!]) {
    logs(
      first: 100
      orderBy: created
      orderDirection: desc
      where: { author_in: $authors }
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

const FeedAuthors = ({
  searchQueryAuthors,
}: {
  searchQueryAuthors: string[];
}) => {
  const [query] = useLatestLogsByAuthorQuery({
    variables: { authors: searchQueryAuthors },
  });

  return (
    <div className="flex flex-col space-y-2 p-2">
      {query &&
        query.data &&
        query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
    </div>
  );
};

export default FeedAuthors;
