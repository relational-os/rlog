import type { NextPage } from "next";
import Head from "next/head";
import { useWallet } from "../useWallet";
import Select from "react-select";
import { useEffect, useState } from "react";
import tagABI from "../../../contracts/out/Tag.sol/Tag.abi.json";
import contracts from "../../../contracts/deploys/polygon-mumbai/all.json";
import { useContractWrite, useWaitForTransaction } from "wagmi";

const options = [
  { value: "0x9afd94b0d13b3f360eacd44ea856b1da669cd15e", label: "Page" },
  {
    value: "0x52318aea70b497c8d3cc83f985991370cc9e297b",
    label: "Comment",
  },
  {
    value: "0x2ac2436b1fa3f9ff3d058fa66bbe695d371617f7",
    label: "Tag",
  },
  {
    value: "0x7c376918cacf56576db22921b780f2c220b28c52",
    label: "Log",
  },
];

const Tag: NextPage = () => {
  return (
    <>
      <Head>
        <title>Example NFT</title>
      </Head>

      <div className="container mx-auto">
        <h1 className="text-xl font-bold pb-4">Contract Input</h1>

        <div className="flex flex-col space-y-2 p-2">
          <NewTag />
          <NewLog />
        </div>
      </div>
    </>
  );
};

const NewLog = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [logRelationshipId, setLogRelationshipId] = useState<number | null>(
    null
  );

  return (
    <>
      <h2 className="text-lg font-bold">Log</h2>
      <div className="px-4">
        <h3 className="text-md font-semibold">Log</h3>
        <input className="w-full p-3 border-2 border-gray-200 rounded-lg placeholder:text-gray-400 mb-2" />
        <h3 className="text-md font-semibold">Relationship</h3>
        <div className="flex">
          <Select
            className="p-1"
            options={options}
            onChange={(e) =>
              setSelectedOption({ value: e!.value, label: e!.label })
            }
            defaultValue={selectedOption}
          />
          <input
            className="border border-gray-300 p-2 mx-2 w-16 rounded-lg"
            type="number"
            onChange={(e) => setLogRelationshipId(parseInt(e.target.value))}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Write
        </button>
      </div>
    </>
  );
};

// const [selectedOption, setSelectedOption] = useState(options[0]);
// const [content, setContent] = useState("");
// const [pageRelationshipId, setPageRelationshipId] = useState<number | null>(
//   null
// );

// const { data, write } = useContractWrite({
//   addressOrName: contracts.Page,
//   contractInterface: pageABI,
//   functionName: "create",
//   args: [
//     content,
//     pageRelationshipId
//       ? // TODO fix this being hardcoded
//         [[selectedOption.value, pageRelationshipId]]
//       : [],
//   ],
// });
// const txWait = useWaitForTransaction({ hash: data?.hash });

// useEffect(() => {
//   if (txWait && txWait.status) {
//     console.log("tx wait status", txWait.status);
//   }
// }, [txWait]);

// console.log(pageRelationshipId, content, contracts.Page);

const NewTag = () => {
  const { connector } = useWallet();
  const [name, setName] = useState("");
  const { data, write } = useContractWrite({
    addressOrName: contracts.Tag,
    contractInterface: tagABI,
    functionName: "create",
    args: [name, []],
  });
  const txWait = useWaitForTransaction({ hash: data?.hash });

  useEffect(() => {
    if (txWait && txWait.status) {
      console.log(data?.hash);
      console.log("tx wait status", txWait.status);
    }
  }, [txWait]);

  return (
    <>
      <h2 className="text-lg font-bold">Tag</h2>
      <div className="px-4">
        <h3 className="text-md font-semibold">Tag Name</h3>
        <input
          className="w-full p-3 border-2 border-gray-200 rounded-lg mb-2 placeholder:text-gray-400"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          disabled={!connector || name === ""}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          // onClick={async () => {
          //   if (!connector) throw new Error("Wallet Not Connected");
          //   if (name == "") throw new Error("Tag Name is Empty");

          //   const signer = await connector.getSigner();

          //   const tx = await tagContract.connect(signer).create(name);
          //   console.log(tx);
          // }}
          onClick={() => {
            if (!connector) throw new Error("Wallet Not Connected");
            if (name == "") throw new Error("Tag Name is Empty");
            write();
          }}
        >
          Write
        </button>
      </div>
    </>
  );
};

export default Tag;
