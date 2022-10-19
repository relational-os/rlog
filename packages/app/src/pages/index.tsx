import type { NextPage } from "next";
import { useState } from "react";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";
import LogItem from "../components/LogItem";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import contracts from "../../../../packages/contracts/deploys/polygon-mumbai/all.json";
import logABI from "../../../../packages/contracts/out/Log.sol/Log.abi.json";

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

const HomePage: NextPage = () => {
  const [query] = useLatestLogsQuery(
    typeof window === "undefined" ? { pause: true } : {}
  );

  const [logEntry, setLogEntry] = useState("");
  // const submitLog = () => {
  //   console.log("submitting log!", logEntry);
  // };

  const { config } = usePrepareContractWrite({
    address: contracts.Log,
    abi: logABI,
    functionName: "create",
    args: [logEntry, []],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [searchQueryAuthors, setSearchQueryAuthors] = useState([]);
  const [searchQueryTags, setSearchQueryTags] = useState([]);

  // const updateSearch = async () => {

  // };

  return (
    <>
      <div className="container max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="border border-1">
            <span>@🔎</span>
            <input></input>
          </div>
          <div className="border border-1">
            <span>#🔎</span>
            <input></input>
          </div>

          <span>eth.ens</span>
          <textarea
            onChange={(e) => {
              setLogEntry(e.target.value);
            }}
            value={logEntry}
            className="border border-1"
          ></textarea>
          <div className="">
            <button className="pr-2">cancel</button>
            <button
              disabled={!write}
              onClick={() => {
                write?.();
                setLogEntry("");
              }}
            >
              {isLoading ? "saving..." : "save"}
            </button>
            {isSuccess && (
              <div>
                Successfully created your log!
                <div>
                  <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>
                    Etherscan
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-xl font-bold pb-4">Log</h1>
        <div className="flex flex-col space-y-2 p-2">
          {query &&
            query.data &&
            query.data.logs.map((log, id) => <LogItem log={log} key={id} />)}
        </div>
      </div>
    </>
  );
};

export default HomePage;
