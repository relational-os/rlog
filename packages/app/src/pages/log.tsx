import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import TimeAgo from "timeago-react";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";

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
          query.data.logs.map((log, id) => (
            <div className="flex flex-col space-x-4 pb-4" key={id}>
              <div className="flex">
                <TimeAgo
                  datetime={log.created * 1000}
                  style={{ minWidth: "150px" }}
                ></TimeAgo>
                <Link
                  href={`https://mumbai.polygonscan.com/address/${log.author.id}`}
                >{`by ${log.author.id.slice(0, 6)}...`}</Link>
              </div>
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
