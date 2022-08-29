import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import TimeAgo from "timeago-react";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";
import LogItem from "../components/LogItem";

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
    }
  }
`;

const Log: NextPage = () => {
  const [query] = useLatestLogsQuery(
    typeof window === "undefined" ? { pause: true } : {}
  );

  return (
    <>
      <Head>
        <title>OURLOG</title>
      </Head>

      <div className="container mx-auto">
        <h1 className="text-xl font-bold pb-4">Log</h1>
        {query &&
          query.data &&
          query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
        <div className="flex flex-col space-y-2 p-2"></div>
      </div>
    </>
  );
};

// react functional component

export default Log;
