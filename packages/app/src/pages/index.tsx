import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import contracts from "../../../../packages/contracts/deploys/polygon-mumbai/all.json";
import logABI from "../../../../packages/contracts/out/Log.sol/Log.abi.json";
import FeedAuthors from "../components/FeedAuthors";
import FeedTags from "../components/FeedTags";
import FeedAuthorsAndTags from "../components/FeedAuthorsAndTags";
import FeedAll from "../components/FeedAll";

const HomePage: NextPage = () => {
  const [logEntry, setLogEntry] = useState("");

  const { config } = usePrepareContractWrite({
    address: contracts.Log,
    abi: logABI,
    functionName: "create",
    args: [logEntry, []],
  });

  // @ts-ignore
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [searchQueryAuthors, setSearchQueryAuthors] = useState<string[]>([]);
  const [searchQueryAuthor, setSearchQueryAuthor] = useState("");
  const [searchQueryTags, setSearchQueryTags] = useState<string[]>([]);
  const [searchQueryTag, setSearchQueryTag] = useState("");

  const [pageState, setPageState] = useState<
    "queryAuthors" | "queryTags" | "queryAuthorsAndTags" | "queryAll"
  >("queryAll");

  const calculatePageState = () => {
    if (searchQueryAuthors.length > 0 && searchQueryTags.length > 0) {
      setPageState("queryAuthorsAndTags");
    } else if (searchQueryAuthors.length > 0 && searchQueryTags.length == 0) {
      setPageState("queryAuthors");
    } else if (searchQueryAuthors.length == 0 && searchQueryTags.length > 0) {
      setPageState("queryTags");
    } else {
      setPageState("queryAll");
    }
  };

  useEffect(() => {
    calculatePageState();
  }, [searchQueryAuthors, searchQueryTags]);

  return (
    <>
      <div className="container max-w-2xl mx-auto">
        <div className="flex flex-col">
          <span className="bg-green-400">
            searching authors:
            <pre>{JSON.stringify(searchQueryAuthors, null, 2)}</pre>
            tags: <pre>{JSON.stringify(searchQueryTags, null, 2)}</pre>
          </span>
          <button
            onClick={() => {
              setSearchQueryAuthors([]);
              setSearchQueryTags([]);
            }}
          >
            clear filters
          </button>
          <div className="border border-1">
            <span>@🔎</span>
            <input
              onChange={(e) => setSearchQueryAuthor(e.target.value)}
              value={searchQueryAuthor}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchQueryAuthors([
                    ...searchQueryAuthors,
                    searchQueryAuthor.toLowerCase(),
                  ]);
                  setSearchQueryAuthor("");
                  calculatePageState();
                }
              }}
            ></input>
          </div>

          <div className="border border-1">
            <span>#🔎</span>
            <input
              onChange={(e) => setSearchQueryTag(e.target.value)}
              value={searchQueryTag}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchQueryTags([...searchQueryTags, searchQueryTag]);
                  setSearchQueryTag("");
                  calculatePageState();
                }
              }}
            ></input>
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
                // todo: change to disabled state, clear after tx confirm or something
                // todo: update query after tx confirm
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
                    View on Polygonscan
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-xl font-bold pb-4">Log</h1>
        {pageState == "queryAuthors" && (
          <FeedAuthors searchQueryAuthors={searchQueryAuthors}></FeedAuthors>
        )}
        {pageState == "queryTags" && (
          <FeedTags searchQueryTags={searchQueryTags}></FeedTags>
        )}
        {pageState == "queryAuthorsAndTags" && (
          <FeedAuthorsAndTags
            searchQueryAuthors={searchQueryAuthors}
            searchQueryTags={searchQueryTags}
          ></FeedAuthorsAndTags>
        )}
        {pageState == "queryAll" && <FeedAll></FeedAll>}
      </div>
    </>
  );
};

export default HomePage;
