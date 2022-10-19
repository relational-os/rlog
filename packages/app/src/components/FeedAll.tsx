import React from "react";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";
import LogItem from "./LogItem";

gql`
  query LatestLogs {
    logs(first: 100, orderBy: created, orderDirection: desc) {
      id
      author {
        id
        owner
      }
      created
      data
      modified
      tags {
        name
        id
      }
    }
  }
`;

const FeedAll = () => {
  const [query] = useLatestLogsQuery({});

  return (
    <div className="flex flex-col space-y-2 p-2">
      {query &&
        query.data &&
        query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
    </div>
  );
};

export default FeedAll;
