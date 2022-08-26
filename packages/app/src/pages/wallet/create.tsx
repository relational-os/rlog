import React from "react";
import { CloneButton } from "../../CloneButton";

const Wallet = () => {
  const [address, setAddress] = React.useState<string | null>("0x...");

  const set = (address: string) => {
    console.log("set", address);
    setAddress(address);
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-xl font-bold pb-4">Create a Wallet</h1>
      <CloneButton callback={set} />
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm text-gray-600">Your wallet address is:</p>
          <p className="text-2xl font-bold text-gray-800">
            <a href={`https://mumbai.polygonscan.com/address/${address}`}>
              {address}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
