import deploys from "@rlog/contracts/deploys.json";
import { Rlog__factory } from "@rlog/contracts/typechain-types";

import { polygonProvider } from "./providers";

export const RlogContract = Rlog__factory.connect(
  deploys["mumbai"].Rlog.address,
  polygonProvider
);
