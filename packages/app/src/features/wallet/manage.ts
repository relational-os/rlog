import { walletFactoryContract } from "../../contracts";

export const getWallets = async (address: string) => {
  return await walletFactoryContract.getWallets(address);
};
