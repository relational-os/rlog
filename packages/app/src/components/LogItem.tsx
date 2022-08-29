import Link from "next/link";
import React from "react";
import TimeAgo from "timeago-react";
import { useENS } from "../useENS";
import Linkify from "react-linkify";

const LogItem = (data: any) => {
  const ens = useENS(data.log?.author?.owner || "");

  const ensName = ens?.name || data.log?.author?.owner || "";

  return (
    <div className="flex flex-col space-x-4 pb-4">
      <div className="flex">
        <TimeAgo
          datetime={data.log.created * 1000}
          style={{ minWidth: "150px" }}
        ></TimeAgo>
        <Link
          href={`https://mumbai.polygonscan.com/address/${data.log?.author?.owner}`}
        >{`by ${ensName}`}</Link>
      </div>
      <div>
        <Linkify>{data.log.data}</Linkify>
      </div>
    </div>
  );
};

export default LogItem;
