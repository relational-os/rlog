import { NextApiHandler } from "next";
import { BigNumberish, BytesLike, utils, Wallet } from "ethers";
import {
  JsonRpcProvider,
  StaticJsonRpcProvider,
} from "@ethersproject/providers";
import { Wallet__factory } from "@site-demo/contracts/types";
import deploys from "@site-demo/contracts/deploys/polygon-mumbai/all.json";
import { staticLogContract } from "../../contracts";
import { polygonProvider } from "../../providers";
import { parseUnits } from "ethers/lib/utils";

const PRIVATE_KEYS = [
  process.env.FORWARDER_PRIVATE_KEY_1 as string,
  process.env.FORWARDER_PRIVATE_KEY_2 as string,
  process.env.FORWARDER_PRIVATE_KEY_3 as string,
  process.env.FORWARDER_PRIVATE_KEY_4 as string,
  process.env.FORWARDER_PRIVATE_KEY_5 as string,
];

const provider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_POLYGON_RPC_ENDPOINT
);

const api: NextApiHandler = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type");
  if (req.method == "POST") {
    const {
      data,
      signature,
    }: {
      data: any;
      signature: string;
    } = req.body;

    if (data && signature) {
      console.log("hash char", parseInt(signature.slice(2, 34), 16));
      const privateKey =
        PRIVATE_KEYS[
          parseInt(signature.slice(2, 34), 16) % PRIVATE_KEYS.length
        ];

      const wallet = new Wallet(privateKey, provider);

      console.log(`using wallet ${wallet.address}`);

      const forwarder = Wallet__factory.connect(deploys.Wallet, wallet);
      const nonce = await wallet.getTransactionCount();
      const feeData = await provider.getFeeData();
      console.log("feeData", feeData);
      const tx = await forwarder.execute(data.message, signature, {
        nonce,
        gasPrice: feeData.gasPrice ?? parseUnits("50", "gwei"),
        maxFeePerGas: feeData.maxFeePerGas ?? parseUnits("50", "gwei"),
        maxPriorityFeePerGas:
          feeData.maxPriorityFeePerGas ?? parseUnits("60", "gwei"),
      });
      return res.json(tx);
    } else {
      res.send("");
    }
  } else {
    res.send("");
  }

  // const { data, signature } = await generateSignature();

  console.log("ran");
  //   console.log("data", data, "sig", signature);
};

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
      chainId: 80001,
      verifyingContract: deploys.Wallet,
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

const generateSignature = async () => {
  const PK = "e4ff0c790c81e7c0e910632f05590070ec4a976a51832a947104cffef5b2ae24";
  const wallet = new Wallet(PK, polygonProvider);
  const { data } = await staticLogContract.populateTransaction["create"](
    "hello world"
  );

  if (data) {
    const gasLimit = await staticLogContract.estimateGas["create"](
      "hello world"
    );

    console.log("log addr", deploys.Log);

    const request = {
      from: wallet.address,
      to: deploys.Log,
      value: 0,
      gas: gasLimit, // TODO the conversion?
      timestamp: 1655930777,
      data: data,
    };

    console.log("request", request);

    const dataToSign = getDataToSignForEIP712(request);
    const signature = await wallet._signTypedData(
      dataToSign.domain,
      dataToSign.types,
      dataToSign.message
    );
    return { data: dataToSign, signature: signature };
  }

  return { data: undefined, signature: undefined };
};

export default api;
