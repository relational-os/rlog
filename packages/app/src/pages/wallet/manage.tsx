import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { getWallets } from "../../features/wallet/manage";
import { useWallet } from "../../useWallet";

const Manage = () => {
  const { account } = useWallet();

  const [wallets, setWallets] = useState<string[]>([]);

  useEffect(() => {
    if (account) {
      getWallets(account).then((w) => setWallets(w));
    }
  }, [account]);

  return (
    <div>
      <h1>Manage Wallets</h1>
      <p>
        For now, this is a link to polygonscan where you can add a signer
        manually via the function `addSigner`.
      </p>
      <div>
        {wallets.map((w) => (
          <div key={w}>
            <a
              href={`https://mumbai.polygonscan.com/address/${w}#writeContract`}
            >
              {w}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
