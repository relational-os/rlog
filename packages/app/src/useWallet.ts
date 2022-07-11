import { useAccount } from "wagmi";

export const useWallet = () => {
  const { address, connector: activeConnector } = useAccount();

  return { connector: activeConnector, account: address };
};
