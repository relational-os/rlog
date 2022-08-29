import Link from "next/link";
import React from "react";
import TimeAgo from "timeago-react";
import { useENS } from "../useENS";
import Linkify from "react-linkify";

const LogItem = (data: any) => {
  const ens = useENS(data.log?.author?.owner || "");

  const ensName = ens?.name || data.log?.author?.owner.slice(0, 6) || "";

  return (
    <div
      className="flex flex-col space-x-4 rounded-2xl py-1 px-3"
      style={{ backgroundColor: `#${data.log.author.owner.slice(2, 8)}22` }}
    >
      <div className="flex gap-2">
        <Link
          href={`https://mumbai.polygonscan.com/address/${data.log?.author?.owner}`}
        >{`${ensName}`}</Link>
        {"-"}
        <TimeAgo datetime={data.log.created * 1000}></TimeAgo>
      </div>
      <div>
        <Linkify>{data.log.data}</Linkify>
      </div>
    </div>
  );
};

export default LogItem;
