import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
  Wallet,
} from "ethers";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import {
  formatUnits,
  Interface,
  parseUnits,
  _TypedDataEncoder,
} from "ethers/lib/utils";

const dotenv = require("dotenv");
dotenv.config();

type ForwardRequestStruct = {
  from: string;
  to: string;
  value: BigNumberish;
  gas: BigNumberish;
  timestamp: BigNumberish;
  data: BytesLike;
};

const getDataToSignForEIP712 = (request: ForwardRequestStruct) => {
  const dataToSign = {
    domain: {
      name: "GAWDS",
      version: "0.0.1",
      chainId: 137,
      verifyingContract: "0x68e4B53379D3Ff76e714E4a11a5e88122CAB717e",
    },
    types: {
      ForwardRequest: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
        { name: "gas", type: "uint256" },
        { name: "timestamp", type: "uint256" },
        { name: "data", type: "bytes" },
      ],
    },
    primaryType: "ForwardRequest",
    message: request,
  };
  return dataToSign;
};

const PK = "e4ff0c790c81e7c0e910632f05590070ec4a976a51832a947104cffef5b2ae24";
const PK2 = "a50f2f378eb798475d37674675f98e9364845e6f9b3ed249681d0705d0ac723b";

const provider = new StaticJsonRpcProvider(
  "https://mainnet.infura.io/v3/9e55ae7e1685411abf37e7e1af924d22"
);
const wallet = new Wallet(PK, provider);
const wallet2 = new Wallet(PK2, provider);

const logInterf = new Interface([
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "modifiedTimestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
            ],
            internalType: "struct Relational.Relationship[]",
            name: "relationships",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct Relational.Post",
        name: "data",
        type: "tuple",
      },
    ],
    name: "LogCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "LogEdited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "LogRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "edit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "logID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "logs",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "createdTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "modifiedTimestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]);

const interf = new Interface([
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "MessageRevert",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "msg",
        type: "string",
      },
      {
        internalType: "bool",
        name: "revert",
        type: "bool",
      },
    ],
    name: "revertMsg",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
]);
const txdata = interf.encodeFunctionData("mint");

const createData = logInterf.encodeFunctionData("create", ["hello"]);
console.log("createData", createData);

const data: ForwardRequestStruct = {
  from: wallet.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: parseUnits(".1", "ether"),
  gas: 1000000,
  timestamp: 1655843923,
  data: txdata,
};

const revertdata: ForwardRequestStruct = {
  from: wallet.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: parseUnits(".01", "ether"),
  gas: 1000000,
  timestamp: 1655843923,
  data: txdata,
};

const data2: ForwardRequestStruct = {
  from: wallet2.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: parseUnits(".1", "ether"),
  gas: 1000000,
  timestamp: 1655843923,
  data: txdata,
};

const wrongdata: ForwardRequestStruct = {
  from: wallet.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: parseUnits(".1", "ether"),
  gas: 1000000,
  timestamp: 1655843922,
  data: txdata,
};

console.log("struct data", data);

const dataToSign = getDataToSignForEIP712(data);
const dataToSignNotAllowed = getDataToSignForEIP712(data2);
const wrongDataToSign = getDataToSignForEIP712(wrongdata);
const revertDataToSign = getDataToSignForEIP712(revertdata);

// console.log(data2);
// const dataEncoder = _TypedDataEncoder.from(dataToSign.types);
// console.log("domain", _TypedDataEncoder.hashDomain(dataToSign.domain));

const signature = wallet._signTypedData(
  dataToSign.domain,
  dataToSign.types,
  dataToSign.message
);

const wrongSig = wallet2._signTypedData(
  dataToSignNotAllowed.domain,
  dataToSignNotAllowed.types,
  dataToSignNotAllowed.message
);

const signature2 = wallet._signTypedData(
  wrongDataToSign.domain,
  wrongDataToSign.types,
  wrongDataToSign.message
);

const revertSig = wallet._signTypedData(
  revertDataToSign.domain,
  revertDataToSign.types,
  revertDataToSign.message
);

signature.then((sig) => console.log(sig));
wrongSig.then((sig) => console.log("wrong person signing", sig));
signature2.then((sig) => console.log("wrong data sig", sig));
revertSig.then((sig) => console.log("revert", sig));

// sig for 2 param thing
const twoParmExecData = interf.encodeFunctionData("revertMsg", [
  "hello",
  false,
]);
const twoParam: ForwardRequestStruct = {
  from: wallet.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: 0,
  gas: 1000000,
  timestamp: 1655843923,
  data: twoParmExecData,
};
const twoParamDataToSign = getDataToSignForEIP712(twoParam);
const twoParamSig = wallet._signTypedData(
  twoParamDataToSign.domain,
  twoParamDataToSign.types,
  twoParamDataToSign.message
);
twoParamSig.then((sig) => console.log("two param", twoParam, sig));

// sig for 2 param thing where we revert
const twoParmExecDataRevert = interf.encodeFunctionData("revertMsg", [
  "hello",
  true,
]);
const twoParamRevert: ForwardRequestStruct = {
  from: wallet.address,
  to: "0xCe71065D4017F316EC606Fe4422e11eB2c47c246",
  value: 0,
  gas: 1000000,
  timestamp: 1655843923,
  data: twoParmExecDataRevert,
};
const twoParamDataRevertToSign = getDataToSignForEIP712(twoParamRevert);
const twoParamRevertSig = wallet._signTypedData(
  twoParamDataRevertToSign.domain,
  twoParamDataRevertToSign.types,
  twoParamDataRevertToSign.message
);
twoParamRevertSig.then((sig) =>
  console.log("two param revert", twoParamRevert, sig)
);

// use create data tx and sign it with the signer, should get the same thing as swift

const createDataMessagePayload = {
  from: wallet.address,
  to: "0x7c376918cacf56576db22921b780f2c220b28c52",
  value: 0,
  gas: 1000000,
  timestamp: 1655930777,
  data: createData,
};

const createDataMessagePayloadToSign = getDataToSignForEIP712(
  createDataMessagePayload
);
const createDataMessagePayloadSig = wallet._signTypedData(
  createDataMessagePayloadToSign.domain,
  createDataMessagePayloadToSign.types,
  createDataMessagePayloadToSign.message
);
createDataMessagePayloadSig.then((sig) => console.log("create data", sig));
