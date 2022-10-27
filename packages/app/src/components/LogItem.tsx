import Link from "next/link";
import React, { useState, useContext } from "react";
import { OurLogContext } from "../pages/_app";
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
  const context = useContext(OurLogContext);

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
      className="flex flex-col rounded-2xl py-2 px-5"
      style={{ backgroundColor: `#${data.log.author.owner.slice(9, 15)}22` }}
    >
      <div className="flex gap-2 text-sm">
        <button
          className="font-semibold"
          onClick={() => {
            context.setState({
              queryAuthors: [
                ...context.state.queryAuthors,
                data.log.author.owner,
              ],
              queryTags: context.state.queryTags,
            });
          }}
        >
          {ensName}
        </button>

        <span>
          {data.log.tags.map((tag: any) => {
            return (
              <button
                key={data.log.id}
                className="ml-1.5 u-color-2"
                style={{ color: `#${data.log.author.owner.slice(9, 15)}` }}
                onClick={() => {
                  context.setState({
                    queryAuthors: context.state.queryAuthors,
                    queryTags: [...context.state.queryTags, tag.name],
                  });
                }}
              >
              <span className="opacity-70 mr-0.5">#</span>
              {tag.name}
              </button>
            );
          })}
        </span>

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
                className="ml-2 px-2.5 py-0.5 rounded-md font-medium text-sm text-white/90 u-color-2"
                style={{background: `#${data.log.author.owner.slice(9, 15)}`}}
                onClick={() => {
                  console.log("clicked", write);
                  console.log("test",data.log.author.owner.slice(9, 15));
                  write?.();
                  setIsTagging(false);
                }}
              >
                Apply
              </button>
            )}
          </div>
        )}

        <button
          className="mr-auto u-color-2"
          style={{ color: `#${data.log.author.owner.slice(9, 15)}` }}
          onClick={() => {
            setIsTagging(true);
          }}
        >
          ⊕
        </button>

        <TimeAgo
          className="text-gray-500 text-xs opacity-80"
          datetime={data.log.created * 1000}
        ></TimeAgo>
      </div>

      <div className="whitespace-pre-wrap text-base my-2">
        <Linkify>{data.log.data}</Linkify>
      </div>

      <style>{`
          .u-color-2 {
            filter: opacity(0.85);            
          }
          .u-color-2:hover {
            filter: opacity(1);
            cursor: pointer;
          }
      `}</style>
    </div>
  );
};

export default LogItem;
