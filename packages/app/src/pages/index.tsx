import type { NextPage } from "next";
import { gql } from "urql";
import { useLatestLogsQuery } from "../../codegen/subgraph";
import LogItem from "../components/LogItem";

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

  return (
    <>
      <div className="container max-w-2xl mx-auto">
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
