import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useState, createContext } from "react";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

import { EthereumProviders } from "../EthereumProviders";
import Header from "../components/header";

export const graphClient = createGraphClient({
  url: "https://api.thegraph.com/subgraphs/name/relational-os/rlog",
});

type OurLogContextState = { queryAuthors: string[]; queryTags: string[] };
const ourLogContextDefault = {
  state: { queryAuthors: Array<string>(), queryTags: Array<string>() },
  setState: (state: OurLogContextState) => {
    return;
  },
};

export const OurLogContext = createContext(ourLogContextDefault);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [state, setState] = useState(ourLogContextDefault.state);
  return (
    <OurLogContext.Provider value={{ state, setState }}>
      <Head>
        <title>Ourlog</title>
      </Head>
      <GraphProvider value={graphClient}>
        <EthereumProviders>
          <Header />
          <Component {...pageProps} />
        </EthereumProviders>
      </GraphProvider>
      <ToastContainer position="bottom-right" draggable={false} />
      <style jsx global>{`
        body {
          background-color: #fafafa;
        }
      `}</style>
    </OurLogContext.Provider>
  );
};

export default MyApp;
