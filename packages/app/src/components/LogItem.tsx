import Link from "next/link";
import React, { useState } from "react";
import TimeAgo from "timeago-react";
import { useENS } from "../useENS";
import Linkify from "react-linkify";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contracts from "../../../contracts/deploys/polygon-mumbai/all.json";
import logABI from "../../../contracts/out/Log.sol/Log.abi.json";
import { gql } from "urql";
import { useTagsQuery } from "../../codegen/subgraph";

gql`
  query Tags {
    tags(first: 100) {
      name
      id
    }
  }
`;

const LogItem = (data: any) => {
  const [tagId, setTagId] = useState(-1);

  const { config } = usePrepareContractWrite({
    address: contracts.Log,
    abi: logABI,
    functionName: "addBiDirectionalRelationship",
    args: [data.log.id, [contracts.Tag, tagId]],
  });

  // @ts-ignore
  const { write } = useContractWrite(config);

  const ens = useENS(data.log?.author?.owner || "");
  const ensName = ens?.name || data.log?.author?.owner.slice(0, 6) || "";
  const [isTagging, setIsTagging] = useState(false);

  const [query] = useTagsQuery({});

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
            setIsTagging(true);
          }}
        >
          tag
        </button>
        {isTagging && (
          <div>
            <select
              onChange={(e) => {
                console.log("event", e);
                setTagId(Number(e.target.value));
                // console.log({ tagId });
              }}
            >
              <option selected={true} key={0}></option>
              {query.data?.tags.map((tag: any) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
            {tagId != -1 && (
              <button
                onClick={() => {
                  console.log("clicked", write);
                  write?.();
                  setIsTagging(false);
                }}
              >
                apply
              </button>
            )}
          </div>
        )}

        <span className="text-gray-400">
          {data.log.tags.map((tag: any) => {
            return `#${tag.name}`;
          })}
        </span>
      </div>
      <div className="whitespace-pre-wrap">
        <Linkify>{data.log.data}</Linkify>
      </div>
    </div>
  );
};

export default LogItem;
