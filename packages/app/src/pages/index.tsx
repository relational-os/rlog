import type { NextPage } from "next";
import Head from "next/head";
import { useWallet } from "../useWallet";
import { gql } from "urql";
import { useMessagesQuery, useUserMessagesQuery } from "../codegen/subgraph";
import { ChangeEvent, useState } from "react";

import { RlogContract } from "../contracts";

gql`
  query Messages {
    messages(first: 500, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      from
      message
    }
  }
`;

gql`
  query UserMessages($account: Bytes!) {
    messages(
      first: 500
      where: { from: $account }
      orderBy: timestamp
      orderDirection: desc
    ) {
      id
      timestamp
      from
      message
    }
  }
`;

const HomePage: NextPage = () => {
  const { provider, connect, account } = useWallet();

  const [text, setText] = useState("");
  const [queryType, setQueryType] = useState<"user" | "all">("all");

  // const [userMessagesQuery, userMessagesRefetchQuery] = useUserMessagesQuery(
  //   typeof window === "undefined" || !account
  //     ? { pause: true }
  //     : {
  //         variables: { account },
  //       }
  // );

  const [query, allMessagesRefetchQuery] = useMessagesQuery(
    typeof window === "undefined" || !account ? { pause: true } : {}
  );

  function onValueChange(e: ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    setQueryType(e.target.value);
  }

  return (
    <div className="font-mono">
      <Head>
        <title>rlog.txt</title>
      </Head>

      {account && provider ? (
        <>
          <div style={{ marginBottom: "4rem" }}>YOU ARE: {account}</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              RlogContract.connect(provider.getSigner()).log(text);
            }}
            className="flex"
          >
            <textarea
              className="border border-gray-500 p-2 mx-4"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
            <div>
              <button className="p-4 bg-blue-500 text-white" type="submit">
                Submit
              </button>
            </div>
          </form>

          <h1 className="text-3xl m-4">log</h1>
          <form>
            <input
              id="user-input"
              type="radio"
              key={"user"}
              value="user"
              checked={queryType == "user"}
              onChange={(e) => onValueChange(e)}
            />
            <label htmlFor="user-input">User</label>
            <input
              id="all-input"
              type="radio"
              key={"all"}
              value="all"
              checked={queryType == "all"}
              onChange={onValueChange}
            />
            <label htmlFor="all-input">All</label>
          </form>
          <div className="space-y-5">
            {!query.fetching &&
              query.data?.messages.map((msg) => (
                <div className="space-y-1 px-4 " key={msg.id}>
                  <p className="text-sm text-slate-700">
                    {msg.from} -{" "}
                    {new Date(msg.timestamp * 1000).toLocaleString()}
                  </p>
                  <p className="text-lg text-slate-800">{msg.message}</p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <button
          className="p-4 bg-blue-500 text-white"
          onClick={() => connect()}
        >
          Connect
        </button>
      )}
    </div>
  );
};

export default HomePage;
