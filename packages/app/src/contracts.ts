// import { useContractRead } from "wagmi";

// import { provider, targetChainId } from "./EthereumProviders";

// I would have used `ExampleNFT__factory.connect` to create this, but we may
// not have a provider ready to go. Any interactions with this contract should
// use `exampleNFTContract.connect(providerOrSigner)` first.

// export const exampleNFTContract = new Contract(
//   ExampleNFTGoerli.deployedTo,
//   ExampleNFT__factory.abi
// ) as ExampleNFT;

// export const exampleNFTContract = ExampleNFT__factory.connect(
//   ExampleNFTGoerli.deployedTo,
//   provider({ chainId: targetChainId })
// );

// export const useExampleNFTContractRead = (
//   readConfig: Omit<
//     Parameters<typeof useContractRead>[0],
//     "addressOrName" | "contractInterface"
//   >
// ) =>
//   useContractRead({
//     ...readConfig,
//     addressOrName: ExampleNFTGoerli.deployedTo,
//     contractInterface: ExampleNFT__factory.abi,
//   });
import {
  Log__factory,
  Tag__factory,
  WalletFactory__factory,
} from "@site-demo/contracts/types";
import deploys from "@site-demo/contracts/deploys/polygon-mumbai/all.json";

import { Provider } from "@ethersproject/providers";
import { polygonProvider } from "./providers";
import { provider, targetChainId } from "./EthereumProviders";

const network = process.env.NODE_ENV === "production" ? "matic" : "mumbai";

export const tagContract = Tag__factory.connect(deploys.Tag, polygonProvider);

export const logContract = (provider: Provider) => {
  return Log__factory.connect(deploys.Log, provider);
};

export const walletFactoryContract = WalletFactory__factory.connect(
  deploys.WalletFactory,
  provider({ chainId: targetChainId })
);

export const walletAddress = deploys.Wallet;

export const staticLogContract = Log__factory.connect(
  deploys.Log,
  polygonProvider
);
