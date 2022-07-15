import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import TimeAgo from "timeago-react";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";
import { useWallet } from "../useWallet";

gql`
  query LatestLogs {
    logs(first: 100, orderBy: created, orderDirection: desc) {
      id
      author {
        id
      }
      created
      data
      modified
    }
  }
`;

const Log: NextPage = () => {
  const { connector, account } = useWallet();

  const [query] = useLatestLogsQuery(
    typeof window === "undefined" ? { pause: true } : {}
  );

  return (
    <>
      <Head>
        <title>CJ's Log</title>
      </Head>

      <div className="flex justify-end p-4">
        <ConnectButton />
      </div>
      <div className="container mx-auto">
        <h1 className="text-xl font-bold pb-4">Log</h1>
        {query &&
          query.data &&
          query.data.logs.map((log) => (
            <div className="flex space-x-4">
              <TimeAgo
                datetime={log.created * 1000}
                style={{ minWidth: "100px" }}
              ></TimeAgo>
              <div>{log.data}</div>
            </div>
          ))}
        <div className="flex flex-col space-y-2 p-2"></div>
      </div>
    </>
  );
};

// react functional component

export default Log;
