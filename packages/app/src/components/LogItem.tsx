import Link from "next/link";
import React from "react";
import TimeAgo from "timeago-react";
import { useENS } from "../useENS";
import Linkify from "react-linkify";
import { useWallet } from "../useWallet";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contracts from "../../../contracts/deploys/polygon-mumbai/all.json";
import logABI from "../../../contracts/out/Log.sol/Log.abi.json";
import { BigNumber } from "ethers";
import { getAddress } from "@ethersproject/address";

const LogItem = (data: any) => {
  const { config } = usePrepareContractWrite({
    address: contracts.Log,
    abi: logABI,
    functionName: "addBiDirectionalRelationship",
    args: [data.log.id, [contracts.Tag, 0]],
  });

  // @ts-ignore
  const { write } = useContractWrite(config);

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
        <button
          onClick={() => {
            console.log("clicked", write);
            write?.();
          }}
        >
          tag
        </button>
      </div>
      <div className="whitespace-pre-wrap">
        <Linkify>{data.log.data}</Linkify>
      </div>
    </div>
  );
};

export default LogItem;
