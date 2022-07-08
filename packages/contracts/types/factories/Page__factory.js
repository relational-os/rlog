"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "NotAuthorized",
        type: "error",
    },
    {
        inputs: [],
        name: "NotFound",
        type: "error",
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
        name: "PageCreated",
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
        name: "PageEdited",
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
        name: "PageRemoved",
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
                internalType: "uint256",
                name: "relationshipId",
                type: "uint256",
            },
        ],
        name: "RelationshipAdded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
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
                name: "relationship",
                type: "tuple",
            },
        ],
        name: "addRelationship",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "struct Relational.Relationship[]",
                name: "relationships",
                type: "tuple[]",
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
        name: "pageID",
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
        name: "pages",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610bbc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806336423f541461006757806347bde2db1461007c5780634cc822151461008f5780635c3e9cc2146100a25780638490bc97146100cf5780638ea42c00146100e6575b600080fd5b61007a61007536600461074e565b6100f9565b005b61007a61008a3660046107fa565b6101be565b61007a61009d3660046108d0565b6102dc565b6100b56100b03660046108d0565b6103bd565b6040516100c6959493929190610936565b60405180910390f35b6100d860015481565b6040519081526020016100c6565b61007a6100f4366004610974565b610480565b600154821061011b5760405163c5723b5160e01b815260040160405180910390fd5b6000828152602081905260409020600101546001600160a01b031633146101555760405163ea8e4eb560e01b815260040160405180910390fd5b6000828152602081815260409091204260038201558251909161017f91600484019185019061057a565b507f8b7693bea5eee8bef1ecd89c4de3e4cb7cc43fa24160c65c2b2172bc91895f5983836040516101b19291906109a1565b60405180910390a1505050565b6001805460008181526020818152604090912091825591810180546001600160a01b03191633179055426002820181905560038201558351909161020991600484019186019061057a565b5060005b8251811015610287578160050183828151811061022c5761022c6109c2565b602090810291909101810151825460018082018555600094855293839020825160029092020180546001600160a01b0319166001600160a01b039092169190911781559101519101558061027f816109ee565b91505061020d565b5080546040517f0932b011f623f4abf92a5e64d6e919037ba4f7bce33cf005c7db311e5ff52d31916102ba918490610a96565b60405180910390a1600180549060006102d2836109ee565b9190505550505050565b60015481106102fe5760405163c5723b5160e01b815260040160405180910390fd5b6000818152602081905260409020600101546001600160a01b031633146103385760405163ea8e4eb560e01b815260040160405180910390fd5b60008181526020819052604081208181556001810180546001600160a01b031916905560028101829055600381018290559061037760048301826105fe565b61038560058301600061063b565b50506040518181527fd64d6488b6c8a0591ebcb29291d719e6c38ee19d099198cd381d51e4f6d222b69060200160405180910390a150565b6000602081905290815260409020805460018201546002830154600384015460048501805494956001600160a01b0390941694929391926103fd90610a07565b80601f016020809104026020016040519081016040528092919081815260200182805461042990610a07565b80156104765780601f1061044b57610100808354040283529160200191610476565b820191906000526020600020905b81548152906001019060200180831161045957829003601f168201915b5050505050905085565b60015482106104a25760405163c5723b5160e01b815260040160405180910390fd5b6000828152602081905260409020600101546001600160a01b031633146104dc5760405163ea8e4eb560e01b815260040160405180910390fd5b60008281526020818152604082204260038201556005810180546001808201835582865294849020865160029092020180546001600160a01b0319166001600160a01b039092169190911781559285015192840192909255905490917fd5733a9b00306544f7999fc0c4e2648f05bcf1e226f07dce62b32e0621d6660391859161056591610b98565b604080519283526020830191909152016101b1565b82805461058690610a07565b90600052602060002090601f0160209004810192826105a857600085556105ee565b82601f106105c157805160ff19168380011785556105ee565b828001600101855582156105ee579182015b828111156105ee5782518255916020019190600101906105d3565b506105fa92915061065c565b5090565b50805461060a90610a07565b6000825580601f1061061a575050565b601f016020900490600052602060002090810190610638919061065c565b50565b50805460008255600202906000526020600020908101906106389190610671565b5b808211156105fa576000815560010161065d565b5b808211156105fa5780546001600160a01b031916815560006001820155600201610672565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156106d6576106d6610697565b604052919050565b600082601f8301126106ef57600080fd5b813567ffffffffffffffff81111561070957610709610697565b61071c601f8201601f19166020016106ad565b81815284602083860101111561073157600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561076157600080fd5b82359150602083013567ffffffffffffffff81111561077f57600080fd5b61078b858286016106de565b9150509250929050565b6000604082840312156107a757600080fd5b6040516040810181811067ffffffffffffffff821117156107ca576107ca610697565b60405290508082356001600160a01b03811681146107e757600080fd5b8152602092830135920191909152919050565b600080604080848603121561080e57600080fd5b833567ffffffffffffffff8082111561082657600080fd5b610832878388016106de565b945060209150818601358181111561084957600080fd5b8601601f8101881361085a57600080fd5b80358281111561086c5761086c610697565b61087a848260051b016106ad565b818152848101935060069190911b82018401908982111561089a57600080fd5b918401915b818310156108c0576108b18a84610795565b8452928401929185019161089f565b8096505050505050509250929050565b6000602082840312156108e257600080fd5b5035919050565b6000815180845260005b8181101561090f576020818501810151868301820152016108f3565b81811115610921576000602083870101525b50601f01601f19169290920160200192915050565b85815260018060a01b038516602082015283604082015282606082015260a06080820152600061096960a08301846108e9565b979650505050505050565b6000806060838503121561098757600080fd5b823591506109988460208501610795565b90509250929050565b8281526040602082015260006109ba60408301846108e9565b949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610a0057610a006109d8565b5060010190565b600181811c90821680610a1b57607f821691505b602082108103610a3b57634e487b7160e01b600052602260045260246000fd5b50919050565b6000815480845260208085019450836000528060002060005b83811015610a8b5781546001600160a01b031687526001828101548489015260409097019660029092019101610a5a565b509495945050505050565b8281526000602060408184015283546040840152600180600160a01b038186015416606085015260028501546080850152600385015460a08501526004850160c080860152600081548181851c905084821680610af457607f821691505b8682108103610b1157634e487b7160e01b84526022600452602484fd5b61010089018290526101208901818015610b325760018114610b4357610b6e565b60ff19851682528882019550610b6e565b60008781526020902060005b85811015610b6857815484820152908901908a01610b4f565b83019650505b5050505050858103603f190160e0870152610b8c8160058901610a41565b98975050505050505050565b600082821015610baa57610baa6109d8565b50039056fea164736f6c634300080d000a";
const isSuperArgs = (xs) => xs.length > 1;
class Page__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Page__factory = Page__factory;
Page__factory.bytecode = _bytecode;
Page__factory.abi = _abi;
