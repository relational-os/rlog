import type { NextPage } from "next";
import { useEffect, useState, useContext } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useTagsQuery } from "../../codegen/subgraph";

import contracts from "../../../../packages/contracts/deploys/polygon-mumbai/all.json";
import managerAbi from "../../../../packages/contracts/out/Manager.sol/Manager.abi.json";
import FeedAuthors from "../components/FeedAuthors";
import FeedTags from "../components/FeedTags";
import FeedAuthorsAndTags from "../components/FeedAuthorsAndTags";
import FeedAll from "../components/FeedAll";

import { MentionsInput, Mention } from "react-mentions";

import { gql } from "urql";
import { OurLogContext } from "../pages/_app";

gql`
  query Tags {
    tags(first: 100) {
      name
      id
    }
  }
`;

const HomePage: NextPage = () => {
  const context = useContext(OurLogContext);
  const [logEntry, setLogEntry] = useState("");
  const [plaintextLogEntry, setPlaintextLogEntry] = useState("");
  const [newTags, setNewTags] = useState<string[] | undefined>([]);
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

  const [searchQueryAuthor, setSearchQueryAuthor] = useState("");
  const [searchQueryTag, setSearchQueryTag] = useState("");
  const [tagsResponse] = useTagsQuery({});
  type FormattedTagType = { id: string; display: string };
  const [formattedTags, setFormattedTags] = useState<
    FormattedTagType[] | undefined
  >([]);
  // const MATCH_RE = /((@)\[([#|@]\w+)\]\((\d+)\))/gim;
  const MATCH_RE = /(@)\[([#|@]\w+)\]\((\d+)\)|(#\w+)/gim;

  const [pageState, setPageState] = useState<
    "queryAuthors" | "queryTags" | "queryAuthorsAndTags" | "queryAll"
  >("queryAll");

  useEffect(() => {
    setLogEntry("");
  }, [isSuccess]);

  useEffect(() => {
    if (
      context.state.queryAuthors.length > 0 &&
      context.state.queryTags.length > 0
    ) {
      setPageState("queryAuthorsAndTags");
    } else if (
      context.state.queryAuthors.length > 0 &&
      context.state.queryTags.length == 0
    ) {
      setPageState("queryAuthors");
    } else if (
      context.state.queryAuthors.length == 0 &&
      context.state.queryTags.length > 0
    ) {
      setPageState("queryTags");
    } else {
      setPageState("queryAll");
    }
  }, [context.state.queryAuthors, context.state.queryTags]);

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
          <div className="flex flex-row my-3">
            <input
              className="flex flex-grow border-solid border-2 border-gray-100 rounded-xl bg-white p-1"
              onChange={(e) => setSearchQueryAuthor(e.target.value)}
              value={searchQueryAuthor}
              placeholder="@"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  context.setState({
                    queryAuthors: [
                      ...context.state.queryAuthors,
                      searchQueryAuthor.toLowerCase(),
                    ],
                    queryTags: context.state.queryTags,
                  });

                  setSearchQueryAuthor("");
                }
              }}
            ></input>
            <input
              className="flex flex-grow border-solid border-2 border-gray-100 rounded-xl bg-white p-1"
              onChange={(e) => setSearchQueryTag(e.target.value)}
              value={searchQueryTag}
              placeholder="#"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  context.setState({
                    queryAuthors: context.state.queryAuthors,
                    queryTags: [...context.state.queryTags, searchQueryTag],
                  });
                  setSearchQueryTag("");
                }
              }}
            ></input>
          </div>

          <div className="border-solid border-2 border-gray-100 p-4 my-4 rounded-xl bg-white">
            <span>eth.ens</span>

            <MentionsInput
              className="border-b-2 border-gray-200 my-2 h-24"
              value={logEntry}
              singleLine={false}
              onChange={(event, newValue, newPlainTextValue) => {
                setLogEntry(event.target.value);
                setPlaintextLogEntry(newPlainTextValue);
              }}
              onBlur={parseMentions}
            >
              <Mention trigger="@" data={[{ id: 1, display: "@bob" }]} />
              <Mention trigger="#" data={formattedTags || []} />
            </MentionsInput>

            <div className="">
              <button
                className="mt-2 px-3 py-1 bg-gray-700 rounded-md text-gray-100 font-medium hover:bg-gray-600 hover:text-white"
                // disabled={!write}
                onClick={() => {
                  parseMentions();
                  write?.();
                  // todo: change to disabled state, clear after tx confirm or something
                  // todo: update query after tx confirm
                }}
              >
                {isLoading ? "Posting..." : "Post"}
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
        </div>

        <h1 className="text-xl font-bold pb-4 ml-5">Log</h1>

        <span className="my-2">
          {context.state.queryTags.map((tag) => {
            return (
              <span key={tag} className="mx-1 px-2 py-2 bg-gray-100 rounded-md text-gray-700 font-medium">
                {tag}
              </span>
            );
          })}
          {context.state.queryAuthors.map((author) => {
            return (
              <span key={author} className="px-2">
                {author}
              </span>
            );
          })}
        </span>

        {(context.state.queryTags.length > 0 ||
          context.state.queryAuthors.length > 0) && (
          <button
            className="mt-2 mx-1 px-3 py-1 bg-gray-700 rounded-md text-gray-100 font-medium hover:bg-gray-600 hover:text-white"
            onClick={() => {
              context.setState({ queryAuthors: [], queryTags: [] });
            }}
          >
            clear
          </button>
        )}

        {pageState == "queryAuthors" && (
          <FeedAuthors
            searchQueryAuthors={context.state.queryAuthors}
          ></FeedAuthors>
        )}
        {pageState == "queryTags" && (
          <FeedTags searchQueryTags={context.state.queryTags}></FeedTags>
        )}
        {pageState == "queryAuthorsAndTags" && (
          <FeedAuthorsAndTags
            searchQueryAuthors={context.state.queryAuthors}
            searchQueryTags={context.state.queryTags}
          ></FeedAuthorsAndTags>
        )}
        {pageState == "queryAll" && <FeedAll></FeedAll>}
      </div>
    </>
  );
};

export default HomePage;
