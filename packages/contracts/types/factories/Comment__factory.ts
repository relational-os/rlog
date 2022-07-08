/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Comment, CommentInterface } from "../Comment";

const _abi = [
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
        indexed: false,
        internalType: "struct Relational.Relationship",
        name: "parent",
        type: "tuple",
      },
    ],
    name: "CommentCreated",
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
    name: "CommentEdited",
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
    name: "CommentRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "commentID",
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
    name: "comments",
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
        internalType: "struct Relational.Relationship",
        name: "parent",
        type: "tuple",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506108ba806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806336423f541461005c578063423f65a9146100715780634cc822151461008d5780638ebb4c15146100a0578063ffd6c253146100c4575b600080fd5b61006f61006a36600461052e565b6100d7565b005b61007a60015481565b6040519081526020015b60405180910390f35b61006f61009b366004610575565b610140565b6100b36100ae366004610575565b6101c5565b6040516100849594939291906105db565b61006f6100d2366004610619565b610288565b6000828152602081815260409091204260038201558251909161010191600484019185019061036e565b507f20891f412e322257797f451a5578c72303d9a6eea41cfaea67b2236fa497527183836040516101339291906106b7565b60405180910390a1505050565b60008181526020819052604081208181556001810180546001600160a01b031916905560028101829055600381018290559061017f60048301826103f2565b61018d60058301600061042f565b50506040518181527f17e1c376f6670b7b9100e076cf20060d9b4f2fe900ff7d4ab2eadf1e806cbe9e9060200160405180910390a150565b6000602081905290815260409020805460018201546002830154600384015460048501805494956001600160a01b039094169492939192610205906106d8565b80601f0160208091040260200160405190810160405280929190818152602001828054610231906106d8565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b5050505050905085565b6001805460008181526020818152604090912091825591810180546001600160a01b0319163317905542600282018190556003820155835190916102d391600484019186019061036e565b50600581018054600180820183556000928352602092839020855160029093020180546001600160a01b0319166001600160a01b039093169290921782559184015191015580546040517fd7ed368ab25d0692181726b27ff252cd7aef7af9d974982e7aa40b6c557d35e19161034c9184908690610767565b60405180910390a16001805490600061036483610886565b9190505550505050565b82805461037a906106d8565b90600052602060002090601f01602090048101928261039c57600085556103e2565b82601f106103b557805160ff19168380011785556103e2565b828001600101855582156103e2579182015b828111156103e25782518255916020019190600101906103c7565b506103ee929150610450565b5090565b5080546103fe906106d8565b6000825580601f1061040e575050565b601f01602090049060005260206000209081019061042c9190610450565b50565b508054600082556002029060005260206000209081019061042c9190610465565b5b808211156103ee5760008155600101610451565b5b808211156103ee5780546001600160a01b031916815560006001820155600201610466565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126104b257600080fd5b813567ffffffffffffffff808211156104cd576104cd61048b565b604051601f8301601f19908116603f011681019082821181831017156104f5576104f561048b565b8160405283815286602085880101111561050e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561054157600080fd5b82359150602083013567ffffffffffffffff81111561055f57600080fd5b61056b858286016104a1565b9150509250929050565b60006020828403121561058757600080fd5b5035919050565b6000815180845260005b818110156105b457602081850181015186830182015201610598565b818111156105c6576000602083870101525b50601f01601f19169290920160200192915050565b85815260018060a01b038516602082015283604082015282606082015260a06080820152600061060e60a083018461058e565b979650505050505050565b600080828403606081121561062d57600080fd5b833567ffffffffffffffff8082111561064557600080fd5b610651878388016104a1565b94506040601f198401121561066557600080fd5b604051925060408301915082821081831117156106845761068461048b565b5060405260208401356001600160a01b03811681146106a257600080fd5b81526040939093013560208401525092909150565b8281526040602082015260006106d0604083018461058e565b949350505050565b600181811c908216806106ec57607f821691505b60208210810361070c57634e487b7160e01b600052602260045260246000fd5b50919050565b6000815480845260208085019450836000528060002060005b8381101561075c5781546001600160a01b03168752600182810154848901526040909701966002909201910161072b565b509495945050505050565b8381526000602060808184015284546080840152600180600160a01b03818701541660a0850152600286015460c0850152600386015460e08501526004860160c0610100860152600081548181851c9050848216806107c757607f821691505b86821081036107e457634e487b7160e01b84526022600452602484fd5b61014089018290526101608901818015610805576001811461081657610841565b60ff19851682528882019550610841565b60008781526020902060005b8581101561083b57815484820152908901908a01610822565b83019650505b5050505050858103607f19016101208701526108608160058a01610712565b87516001600160a01b031660408801526020880151606088015294506106d09350505050565b6000600182016108a657634e487b7160e01b600052601160045260246000fd5b506001019056fea164736f6c634300080d000a";

type CommentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Comment__factory extends ContractFactory {
  constructor(...args: CommentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Comment> {
    return super.deploy(overrides || {}) as Promise<Comment>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Comment {
    return super.attach(address) as Comment;
  }
  override connect(signer: Signer): Comment__factory {
    return super.connect(signer) as Comment__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommentInterface {
    return new utils.Interface(_abi) as CommentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Comment {
    return new Contract(address, _abi, signerOrProvider) as Comment;
  }
}
