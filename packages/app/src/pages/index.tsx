import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useTagsQuery } from "../../codegen/subgraph";

import contracts from "../../../../packages/contracts/deploys/polygon-mumbai/all.json";
import logABI from "../../../../packages/contracts/out/Log.sol/Log.abi.json";
import managerAbi from "../../../../packages/contracts/out/Manager.sol/Manager.abi.json";
import FeedAuthors from "../components/FeedAuthors";
import FeedTags from "../components/FeedTags";
import FeedAuthorsAndTags from "../components/FeedAuthorsAndTags";
import FeedAll from "../components/FeedAll";

import { MentionsInput, Mention } from "react-mentions";

import { gql } from "urql";

gql`
  query Tags {
    tags(first: 100) {
      name
      id
    }
  }
`;

const HomePage: NextPage = () => {
  const [logEntry, setLogEntry] = useState("");
  const [plaintextLogEntry, setPlaintextLogEntry] = useState("");
  const [newTags, setNewTags] = useState<any>([]);
  const [existingTagReferences, setExistingTagReferences] = useState<number[]>(
    []
  );

  const { config } = usePrepareContractWrite({
    address: contracts.Manager,
    abi: managerAbi,
    functionName: "createLogWithTags",
    args: [plaintextLogEntry, newTags, existingTagReferences],
  });

  console.log("toContract", [
    plaintextLogEntry,
    newTags,
    existingTagReferences,
  ]);

  // @ts-ignore
  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [searchQueryAuthors, setSearchQueryAuthors] = useState<string[]>([]);
  const [searchQueryAuthor, setSearchQueryAuthor] = useState("");
  const [searchQueryTags, setSearchQueryTags] = useState<string[]>([]);
  const [searchQueryTag, setSearchQueryTag] = useState("");
  const [tagsResponse] = useTagsQuery({});
  const [formattedTags, setFormattedTags] = useState<any>();
  // const MATCH_RE = /((@)\[([#|@]\w+)\]\((\d+)\))/gim;
  const MATCH_RE = /(@)\[([#|@]\w+)\]\((\d+)\)|(#\w+)/gim;

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
    setLogEntry("");
  }, [isSuccess]);

  useEffect(() => {
    calculatePageState();
  }, [searchQueryAuthors, searchQueryTags]);

  useEffect(() => {
    setFormattedTags(
      tagsResponse.data?.tags.map((t) => {
        return { id: t.id, display: `#${t.name}` };
      })
    );
  }, [tagsResponse]);

  // todo: add debounce
  const parseMentions = () => {
    setNewTags([]);
    setExistingTagReferences([]);
    const newTagsTemp = [];
    const existingTagsTemp = [];

    let match = MATCH_RE.exec(logEntry);
    while (match != null) {
      if (match[1] == undefined) {
        newTagsTemp.push(match[0].trim().substring(1, match[0].length));
      } else {
        // console.log(match);
        const mention = match[2];
        const id = match[3];
        const type = mention.substring(0, 1) == "#" ? "tag" : "author";

        console.log({ mention, id, type });

        existingTagsTemp.push(Number(id));
      }
      match = MATCH_RE.exec(logEntry);
    }

    setExistingTagReferences(existingTagsTemp);
    setNewTags(newTagsTemp);
  };

  console.log({ newTags });
  console.log({ existingTagReferences });

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
          <MentionsInput
            value={logEntry}
            // @ts-ignore
            onChange={(event, newValue, newPlainTextValue, mentions) => {
              // console.log({ event });
              // console.log({ newValue });
              // console.log({ newPlainTextValue });
              // console.log({ mentions });
              setLogEntry(event.target.value);
              setPlaintextLogEntry(newPlainTextValue);
            }}
            onBlur={parseMentions}
          >
            <Mention trigger="@" data={[{ id: 1, display: "@bob" }]} />
            <Mention trigger="#" data={formattedTags} />
          </MentionsInput>

          <div className="">
            <button className="pr-2">cancel</button>
            <button
              // disabled={!write}
              onClick={() => {
                parseMentions();
                write?.();
                // todo: change to disabled state, clear after tx confirm or something
                // todo: update query after tx confirm
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
