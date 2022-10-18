"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployRlog__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "IS_SCRIPT",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "collectionContract",
        outputs: [
            {
                internalType: "contract Collection",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "logContract",
        outputs: [
            {
                internalType: "contract Log",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "run",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "tagContract",
        outputs: [
            {
                internalType: "contract Tag",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "vm",
        outputs: [
            {
                internalType: "contract Vm",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506121a68061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806303a5c5d2146100675780633a76846314610097578063709263c1146100b2578063c0406226146100c5578063cfe279b2146100cf578063f8ccbf47146100e7575b600080fd5b60025461007a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61007a737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60015461007a906001600160a01b031681565b6100cd610104565b005b60005461007a9061010090046001600160a01b031681565b6000546100f49060ff1681565b604051901515815260200161008e565b60405163c1978d1f60e01b815260206004820152600b60248201526a505249564154455f4b455960a81b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790829063c1978d1f906064016020604051808303816000875af1158015610179573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019d91906103d0565b6040518263ffffffff1660e01b81526004016101bb91815260200190565b600060405180830381600087803b1580156101d557600080fd5b505af11580156101e9573d6000803e3d6000fd5b505050506101f63361033d565b604051610202906103a9565b604051809103906000f08015801561021e573d6000803e3d6000fd5b50600060016101000a8154816001600160a01b0302191690836001600160a01b03160217905550604051610251906103b6565b604051809103906000f08015801561026d573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b039290921691909117905560405161029a906103c3565b604051809103906000f0801580156102b6573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b039290921691909117905560408051633b756e9b60e11b81529051737109709ecfa91a80626ff3989d68f67f5b1dd12d916376eadd3691600480830192600092919082900301818387803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b50505050565b6040516001600160a01b03821660248201526103859060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b179052610388565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b610b7c806103ea83390190565b61091c80610f6683390190565b6109188061188283390190565b6000602082840312156103e257600080fd5b505191905056fe608060405234801561001057600080fd5b50610b5c806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639bb96fb61161005b5780639bb96fb6146100bd5780639e4605d4146100d0578063a503898f146100e3578063e79899bd146100ff57600080fd5b806336423f541461008257806347bde2db146100975780634cc82215146100aa575b600080fd5b610095610090366004610623565b610123565b005b6100956100a53660046106cf565b610184565b6100956100b83660046107a5565b610260565b6100956100cb3660046107be565b6102e5565b6100956100de3660046107be565b61037b565b6100ec60015481565b6040519081526020015b60405180910390f35b61011261010d3660046107a5565b61040c565b6040516100f6959493929190610831565b60008281526020819052604090204260038201556004810161014583826108f7565b507f45171689d6828acd082ae729fcc0526eaadbf9efdb85bc3c401787b741b0158683836040516101779291906109b7565b60405180910390a1505050565b60018054600081815260208190526040902090815590810180546001600160a01b0319163317905542600282018190556003820155600481016101c784826108f7565b5060005b825181101561020b576101f96001548483815181106101ec576101ec6109d8565b60200260200101516102e5565b80610203816109ee565b9150506101cb565b5080546040517fd52a3ae8776152e112dab9cf8d1b0caeff95c8e58f7a712b4e7604ad739db9819161023e918490610a6a565b60405180910390a160018054906000610256836109ee565b9190505550505050565b60008181526020819052604081208181556001810180546001600160a01b031916905560028101829055600381018290559061029f60048301826104cf565b6102ad60058301600061050c565b50506040518181527f25462627c9fafd28b391931aba322a8a25cf69c777e246b13ee864f8361a56789060200160405180910390a150565b60408051808201825230815260208082018581528451918501519351632791817560e21b8152600481019490945282516001600160a01b039081166024860152905160448501529192911690639e4605d490606401600060405180830381600087803b15801561035457600080fd5b505af1158015610368573d6000803e3d6000fd5b50505050610376838361037b565b505050565b6000828152602081815260408083206005810180546001808201835591865294849020865160029096020180546001600160a01b0319166001600160a01b03968716178155868501805191909201558251878152865190951693850193909352915190830152907f2c9c21b47ecc3b161a8321182d9393b143a87f0317ffc09626e3ed2f1b8c420390606001610177565b6000602081905290815260409020805460018201546002830154600384015460048501805494956001600160a01b03909416949293919261044c9061086f565b80601f01602080910402602001604051908101604052809291908181526020018280546104789061086f565b80156104c55780601f1061049a576101008083540402835291602001916104c5565b820191906000526020600020905b8154815290600101906020018083116104a857829003601f168201915b5050505050905085565b5080546104db9061086f565b6000825580601f106104eb575050565b601f016020900490600052602060002090810190610509919061052d565b50565b50805460008255600202906000526020600020908101906105099190610546565b5b80821115610542576000815560010161052e565b5090565b5b808211156105425780546001600160a01b031916815560006001820155600201610547565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156105ab576105ab61056c565b604052919050565b600082601f8301126105c457600080fd5b813567ffffffffffffffff8111156105de576105de61056c565b6105f1601f8201601f1916602001610582565b81815284602083860101111561060657600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561063657600080fd5b82359150602083013567ffffffffffffffff81111561065457600080fd5b610660858286016105b3565b9150509250929050565b60006040828403121561067c57600080fd5b6040516040810181811067ffffffffffffffff8211171561069f5761069f61056c565b60405290508082356001600160a01b03811681146106bc57600080fd5b8152602092830135920191909152919050565b60008060408084860312156106e357600080fd5b833567ffffffffffffffff808211156106fb57600080fd5b610707878388016105b3565b945060209150818601358181111561071e57600080fd5b8601601f8101881361072f57600080fd5b8035828111156107415761074161056c565b61074f848260051b01610582565b818152848101935060069190911b82018401908982111561076f57600080fd5b918401915b81831015610795576107868a8461066a565b84529284019291850191610774565b8096505050505050509250929050565b6000602082840312156107b757600080fd5b5035919050565b600080606083850312156107d157600080fd5b823591506107e2846020850161066a565b90509250929050565b6000815180845260005b81811015610811576020818501810151868301820152016107f5565b506000602082860101526020601f19601f83011685010191505092915050565b85815260018060a01b038516602082015283604082015282606082015260a06080820152600061086460a08301846107eb565b979650505050505050565b600181811c9082168061088357607f821691505b6020821081036108a357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561037657600081815260208120601f850160051c810160208610156108d05750805b601f850160051c820191505b818110156108ef578281556001016108dc565b505050505050565b815167ffffffffffffffff8111156109115761091161056c565b6109258161091f845461086f565b846108a9565b602080601f83116001811461095a57600084156109425750858301515b600019600386901b1c1916600185901b1785556108ef565b600085815260208120601f198616915b828110156109895788860151825594840194600190910190840161096a565b50858210156109a75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8281526040602082015260006109d060408301846107eb565b949350505050565b634e487b7160e01b600052603260045260246000fd5b600060018201610a0e57634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815480845260208085019450836000528060002060005b83811015610a5f5781546001600160a01b031687526001828101548489015260409097019660029092019101610a2e565b509495945050505050565b8281526000602060408184015283546040840152600180600160a01b038186015416606085015260028501546080850152600385015460a08501526004850160c08086015260008154610abc8161086f565b8061010089015261012085831660008114610ade5760018114610af857610b26565b60ff1984168a83015282151560051b8a0182019450610b26565b856000528760002060005b84811015610b1e5781548c8201850152908801908901610b03565b8b0183019550505b50505050858103603f190160e0870152610b438160058901610a15565b9897505050505050505056fea164736f6c6343000811000a608060405234801561001057600080fd5b506108fc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806320822abc1461005c57806347bde2db146100885780636f810cbc1461009d5780639bb96fb6146100b45780639e4605d4146100c7575b600080fd5b61006f61006a36600461039c565b6100da565b60405161007f94939291906103b5565b60405180910390f35b61009b610096366004610556565b610197565b005b6100a660015481565b60405190815260200161007f565b61009b6100c236600461060e565b61026d565b61009b6100d536600461060e565b610303565b600060208190529081526040902080546001820154600283015460038401805493946001600160a01b03909316939192916101149061063b565b80601f01602080910402602001604051908101604052809291908181526020018280546101409061063b565b801561018d5780601f106101625761010080835404028352916020019161018d565b820191906000526020600020905b81548152906001019060200180831161017057829003601f168201915b5050505050905084565b60018054600081815260208190526040902090815590810180546001600160a01b03191633179055426002820155600381016101d384826106c3565b5060005b8251811015610217576102056001548483815181106101f8576101f8610783565b602002602001015161026d565b8061020f81610799565b9150506101d7565b507fff68782013636b22263c699f9f501086d2580d1e2fab8ea1d867efccd6397efe6001548260405161024b929190610815565b60405180910390a16001805490600061026383610799565b9190505550505050565b60408051808201825230815260208082018581528451918501519351632791817560e21b8152600481019490945282516001600160a01b039081166024860152905160448501529192911690639e4605d490606401600060405180830381600087803b1580156102dc57600080fd5b505af11580156102f0573d6000803e3d6000fd5b505050506102fe8383610303565b505050565b6000828152602081815260408083206004810180546001808201835591865294849020865160029096020180546001600160a01b0319166001600160a01b03968716178155868501805191909201558251878152865190951693850193909352915190830152907f2c9c21b47ecc3b161a8321182d9393b143a87f0317ffc09626e3ed2f1b8c42039060600160405180910390a1505050565b6000602082840312156103ae57600080fd5b5035919050565b8481526000602060018060a01b0386168184015284604084015260806060840152835180608085015260005b818110156103fd5785810183015185820160a0015282016103e1565b50600060a0828601015260a0601f19601f8301168501019250505095945050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561046057610460610421565b604052919050565b60006040828403121561047a57600080fd5b6040516040810181811067ffffffffffffffff8211171561049d5761049d610421565b60405290508082356001600160a01b03811681146104ba57600080fd5b8152602092830135920191909152919050565b600082601f8301126104de57600080fd5b8135602067ffffffffffffffff8211156104fa576104fa610421565b610508818360051b01610437565b82815260069290921b8401810191818101908684111561052757600080fd5b8286015b8481101561054b5761053d8882610468565b83529183019160400161052b565b509695505050505050565b6000806040838503121561056957600080fd5b823567ffffffffffffffff8082111561058157600080fd5b818501915085601f83011261059557600080fd5b81356020828211156105a9576105a9610421565b6105bb601f8301601f19168201610437565b82815288828487010111156105cf57600080fd5b828286018383013760009281018201929092529094508501359150808211156105f757600080fd5b50610604858286016104cd565b9150509250929050565b6000806060838503121561062157600080fd5b823591506106328460208501610468565b90509250929050565b600181811c9082168061064f57607f821691505b60208210810361066f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102fe57600081815260208120601f850160051c8101602086101561069c5750805b601f850160051c820191505b818110156106bb578281556001016106a8565b505050505050565b815167ffffffffffffffff8111156106dd576106dd610421565b6106f1816106eb845461063b565b84610675565b602080601f831160018114610726576000841561070e5750858301515b600019600386901b1c1916600185901b1785556106bb565b600085815260208120601f198616915b8281101561075557888601518255948401946001909101908401610736565b50858210156107735787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6000600182016107b957634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815480845260208085019450836000528060002060005b8381101561080a5781546001600160a01b0316875260018281015484890152604090970196600290920191016107d9565b509495945050505050565b8281526000602060408184015283546040840152600180600160a01b0381860154166060850152600285015460808501526003850160a0808601526000815461085d8161063b565b8060e08901526101008583166000811461087e5760018114610898576108c6565b60ff1984168a83015282151560051b8a01820194506108c6565b856000528760002060005b848110156108be5781548c82018501529088019089016108a3565b8b0183019550505b50505050858103603f190160c08701526108e381600489016107c0565b9897505050505050505056fea164736f6c6343000811000a608060405234801561001057600080fd5b506108f8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806347bde2db1461005c5780639bb96fb6146100715780639e4605d414610084578063d57f966b14610097578063fdbda0ec146100b3575b600080fd5b61006f61006a3660046104cd565b6100d6565b005b61006f61007f366004610585565b6101ac565b61006f610092366004610585565b610242565b6100a060015481565b6040519081526020015b60405180910390f35b6100c66100c13660046105b2565b6102db565b6040516100aa94939291906105cb565b60018054600081815260208190526040902090815590810180546001600160a01b031916331790554260028201556003810161011284826106bf565b5060005b8251811015610156576101446001548483815181106101375761013761077f565b60200260200101516101ac565b8061014e81610795565b915050610116565b507fb541b4f9951b0a0fa1a43e00b5c02139d6191c3854645d368d0c5466422e62876001548260405161018a929190610811565b60405180910390a1600180549060006101a283610795565b9190505550505050565b60408051808201825230815260208082018581528451918501519351632791817560e21b8152600481019490945282516001600160a01b039081166024860152905160448501529192911690639e4605d490606401600060405180830381600087803b15801561021b57600080fd5b505af115801561022f573d6000803e3d6000fd5b5050505061023d8383610242565b505050565b6000828152602081815260408083206004810180546001808201835591865294849020865160029096020180546001600160a01b0319166001600160a01b03968716178155868501805191909201558251878152865190951693850193909352915190830152907f2c9c21b47ecc3b161a8321182d9393b143a87f0317ffc09626e3ed2f1b8c42039060600160405180910390a1505050565b600060208190529081526040902080546001820154600283015460038401805493946001600160a01b039093169391929161031590610637565b80601f016020809104026020016040519081016040528092919081815260200182805461034190610637565b801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b5050505050905084565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103d7576103d7610398565b604052919050565b6000604082840312156103f157600080fd5b6040516040810181811067ffffffffffffffff8211171561041457610414610398565b60405290508082356001600160a01b038116811461043157600080fd5b8152602092830135920191909152919050565b600082601f83011261045557600080fd5b8135602067ffffffffffffffff82111561047157610471610398565b61047f818360051b016103ae565b82815260069290921b8401810191818101908684111561049e57600080fd5b8286015b848110156104c2576104b488826103df565b8352918301916040016104a2565b509695505050505050565b600080604083850312156104e057600080fd5b823567ffffffffffffffff808211156104f857600080fd5b818501915085601f83011261050c57600080fd5b813560208282111561052057610520610398565b610532601f8301601f191682016103ae565b828152888284870101111561054657600080fd5b8282860183830137600092810182019290925290945085013591508082111561056e57600080fd5b5061057b85828601610444565b9150509250929050565b6000806060838503121561059857600080fd5b823591506105a984602085016103df565b90509250929050565b6000602082840312156105c457600080fd5b5035919050565b8481526000602060018060a01b0386168184015284604084015260806060840152835180608085015260005b818110156106135785810183015185820160a0015282016105f7565b50600060a0828601015260a0601f19601f8301168501019250505095945050505050565b600181811c9082168061064b57607f821691505b60208210810361066b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561023d57600081815260208120601f850160051c810160208610156106985750805b601f850160051c820191505b818110156106b7578281556001016106a4565b505050505050565b815167ffffffffffffffff8111156106d9576106d9610398565b6106ed816106e78454610637565b84610671565b602080601f831160018114610722576000841561070a5750858301515b600019600386901b1c1916600185901b1785556106b7565b600085815260208120601f198616915b8281101561075157888601518255948401946001909101908401610732565b508582101561076f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b6000600182016107b557634e487b7160e01b600052601160045260246000fd5b5060010190565b6000815480845260208085019450836000528060002060005b838110156108065781546001600160a01b0316875260018281015484890152604090970196600290920191016107d5565b509495945050505050565b8281526000602060408184015283546040840152600180600160a01b0381860154166060850152600285015460808501526003850160a0808601526000815461085981610637565b8060e08901526101008583166000811461087a5760018114610894576108c2565b60ff1984168a83015282151560051b8a01820194506108c2565b856000528760002060005b848110156108ba5781548c820185015290880190890161089f565b8b0183019550505b50505050858103603f190160c08701526108df81600489016107bc565b9897505050505050505056fea164736f6c6343000811000aa164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class DeployRlog__factory extends ethers_1.ContractFactory {
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
exports.DeployRlog__factory = DeployRlog__factory;
DeployRlog__factory.bytecode = _bytecode;
DeployRlog__factory.abi = _abi;
