import deploys from "@web3-dapp-scaffold/contracts/deploys.json";
import { Rlog__factory } from "@web3-dapp-scaffold/contracts/typechain-types";

import { polygonProvider } from "./providers";

export const RlogContract = Rlog__factory.connect(
  deploys["mumbai"].Rlog.address,
  polygonProvider
);
