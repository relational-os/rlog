import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-end p-4">
      <ConnectButton />
    </div>
  );
};

export default Header;
