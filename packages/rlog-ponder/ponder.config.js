module.exports = {
  database: { kind: "sqlite" },
  graphql: { port: 42069 },
  sources: [
    {
      kind: "evm",
      name: "Log",
      network: "polygon-mumbai",
      chainId: 80001,
      rpcUrl: process.env.PONDER_RPC_URL_80001,
      address: "0xb8A4C0Fb6Fb8028720c4272e70bFF3dDa94A5aA8",
      abi: "./abis/Log.abi.json",
      startBlock: 28689566,
    },
    {
      kind: "evm",
      name: "Tag",
      network: "polygon-mumbai",
      chainId: 80001,
      rpcUrl: process.env.PONDER_RPC_URL_80001,
      address: "0x901A7da3240B2b60181EC6a0Dc58cB05f0F20DcE",
      abi: "./abis/Tag.abi.json",
      startBlock: 28689566,
    },
    {
      kind: "evm",
      name: "Collection",
      network: "polygon-mumbai",
      chainId: 80001,
      rpcUrl: process.env.PONDER_RPC_URL_80001,
      address: "0xEc1F9236E395A9C0B22eE79aEFB570c999864c6A",
      abi: "./abis/Collection.abi.json",
      startBlock: 28689566,
    },
  ],
  networks: [
    {
      name: "polygon-mumbai",
      chainId: 80001,
      rpcUrl: process.env.PONDER_RPC_URL_80001,
    },
  ],
};
