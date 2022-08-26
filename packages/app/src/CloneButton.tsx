import { toast } from "react-toastify";
import { useAccount } from "wagmi";

import { Button } from "./Button";
import { walletAddress, walletFactoryContract } from "./contracts";
// import { exampleNFTContract } from "./contracts";
// import { extractContractError } from "./extractContractError";
import { promiseNotify } from "./promiseNotify";
import { switchChain } from "./switchChain";
import { usePromiseFn } from "./usePromiseFn";

export const CloneButton = ({
  callback,
}: {
  callback: (address: string) => void;
}) => {
  const { connector } = useAccount();

  const [cloneResult, clone] = usePromiseFn(
    async (onProgress: (message: string) => void) => {
      if (!connector) {
        throw new Error("Wallet not connected");
      }
      onProgress("Preparing wallet…");
      await switchChain(connector);
      const signer = await connector.getSigner();
      const contract = walletFactoryContract.connect(signer);
      try {
        onProgress(`Cloning…`);
        const tx = await promiseNotify(contract.clone(walletAddress)).after(
          1000 * 5,
          () => onProgress("Please confirm transaction in your wallet…")
        );
        console.log("mint tx", tx);
        onProgress("Finalizing transaction…");
        const receipt = await promiseNotify(tx.wait())
          .after(1000 * 15, () =>
            onProgress(
              "It can sometimes take a while to finalize a transaction…"
            )
          )
          .after(1000 * 30, () => onProgress("Still working on it…"));
        console.log("mint receipt", receipt);
        return { receipt };
      } catch (error) {
        console.error("Transaction error:", error);
        // const contractError = extractContractError(error);
        throw new Error(`Transaction error: ${error}`);
      }
    },
    [connector]
  );

  return (
    <Button
      pending={cloneResult.type === "pending"}
      onClick={(event) => {
        event.preventDefault();
        const toastId = toast.loading("Starting…");
        clone((message) => {
          toast.update(toastId, { render: message });
        }).then(
          (r) => {
            // @ts-ignore
            const contractAddr = r?.receipt?.events[2].args[1];
            // TODO: show etherscan link?
            toast.update(toastId, {
              isLoading: false,
              type: "success",
              render: `Created new Wallet at ${contractAddr}`,
              autoClose: 5000,
              closeButton: true,
            });

            callback(contractAddr);
          },
          (error) => {
            toast.update(toastId, {
              isLoading: false,
              type: "error",
              render: String(error.message),
              autoClose: 5000,
              closeButton: true,
            });
          }
        );
      }}
    >
      Create Wallet!
    </Button>
  );
};
