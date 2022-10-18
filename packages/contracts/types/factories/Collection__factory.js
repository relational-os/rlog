"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
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
                        internalType: "string",
                        name: "name",
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
                internalType: "struct Collection.CollectionContents",
                name: "collection",
                type: "tuple",
            },
        ],
        name: "CollectionCreated",
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
                name: "relationship",
                type: "tuple",
            },
        ],
        name: "RelationshipAdded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "collectionID",
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
        name: "addBiDirectionalRelationship",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "collectionID",
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
        name: "addUniDirectionalRelationship",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "collectionCount",
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
        name: "collections",
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
                internalType: "string",
                name: "name",
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
                name: "name",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b506108f8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806347bde2db1461005c5780639bb96fb6146100715780639e4605d414610084578063d57f966b14610097578063fdbda0ec146100b3575b600080fd5b61006f61006a3660046104cd565b6100d6565b005b61006f61007f366004610585565b6101ac565b61006f610092366004610585565b610242565b6100a060015481565b6040519081526020015b60405180910390f35b6100c66100c13660046105b2565b6102db565b6040516100aa94939291906105cb565b60018054600081815260208190526040902090815590810180546001600160a01b031916331790554260028201556003810161011284826106bf565b5060005b8251811015610156576101446001548483815181106101375761013761077f565b60200260200101516101ac565b8061014e81610795565b915050610116565b507fb541b4f9951b0a0fa1a43e00b5c02139d6191c3854645d368d0c5466422e62876001548260405161018a929190610811565b60405180910390a1600180549060006101a283610795565b9190505550505050565b60408051808201825230815260208082018581528451918501519351632791817560e21b8152600481019490945282516001600160a01b039081166024860152905160448501529192911690639e4605d490606401600060405180830381600087803b15801561021b57600080fd5b505af115801561022f573d6000803e3d6000fd5b5050505061023d8383610242565b505050565b6000828152602081815260408083206004810180546001808201835591865294849020865160029096020180546001600160a01b0319166001600160a01b03968716178155868501805191909201558251878152865190951693850193909352915190830152907f2c9c21b47ecc3b161a8321182d9393b143a87f0317ffc09626e3ed2f1b8c42039060600160405180910390a1505050565b600060208190529081526040902080546001820154600283015460038401805493946001600160a01b039093169391929161031590610637565b80601f016020809104026020016040519081016040528092919081815260200182805461034190610637565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b5050505050905084565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103d7576103d7610398565b604052919050565b6000604082840312156103f157600080fd5b6040516040810181811067ffffffffffffffff8211171561041457610414610398565b60405290508082356001600160a01b038116811461043157600080fd5b8152602092830135920191909152919050565b600082601f83011261045557600080fd5b8135602067ffffffffffffffff82111561047157610471610398565b61047f818360051b016103ae565b82815260069290921b8401810191818101908684111561049e57600080fd5b8286015b848110156104c2576104b488826103df565b8352918301916040016104a2565b509695505050505050565b600080604083850312156104e057600080fd5b823567ffffffffffffffff808211156104f857600080fd5b818501915085601f83011261050c57600080fd5b813560208282111561052057610520610398565b610532601f8301601f191682016103ae565b828152888284870101111561054657600080fd5b8282860183830137600092810182019290925290945085013591508082111561056e57600080fd5b5061057b85828601610444565b9150509250929050565b6000806060838503121561059857600080fd5b823591506105a984602085016103df565b90509250929050565b6000602082840312156105c457600080fd5b5035919050565b8481526000602060018060a01b0386168184015284604084015260806060840152835180608085015260005b818110156106135785810183015185820160a0015282016105f7565b50600060a0828601015260a0601f19601f8301168501019250505095945050505050565b600181811c9082168061064b57607f821691505b60208210810361066b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561023d57600081815260208120601f850160051c810160208610156106985750805b601f850160051c820191505b818110156106b7578281556001016106a4565b505050505050565b815167ffffffffffffffff8111156106d9576106d9610398565b6106ed816106e78454610637565b84610671565b602080601f831160018114610722576000841561070a5750858301515b600019600386901b1c1916600185901b1785556106b7565b600085815260208120601f198616915b8281101561075157888601518255948401946001909101908401610732565b508582101561076f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6000600182016107b557634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815480845260208085019450836000528060002060005b838110156108065781546001600160a01b0316875260018281015484890152604090970196600290920191016107d5565b509495945050505050565b8281526000602060408184015283546040840152600180600160a01b0381860154166060850152600285015460808501526003850160a0808601526000815461085981610637565b8060e08901526101008583166000811461087a5760018114610894576108c2565b60ff1984168a83015282151560051b8a01820194506108c2565b856000528760002060005b848110156108ba5781548c820185015290880190890161089f565b8b0183019550505b50505050858103603f190160c08701526108df81600489016107bc565b9897505050505050505056fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class Collection__factory extends ethers_1.ContractFactory {
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
exports.Collection__factory = Collection__factory;
Collection__factory.bytecode = _bytecode;
Collection__factory.abi = _abi;
