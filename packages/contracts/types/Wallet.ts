/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Wallet {
  export type ForwardRequestStruct = {
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    gas: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type ForwardRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    from: string;
    to: string;
    value: BigNumber;
    gas: BigNumber;
    timestamp: BigNumber;
    data: string;
  };
}

export interface WalletInterface extends utils.Interface {
  functions: {
    "addSigner(address)": FunctionFragment;
    "allowedSigners(address)": FunctionFragment;
    "execute((address,address,uint256,uint256,uint256,bytes),bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verify((address,address,uint256,uint256,uint256,bytes),bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addSigner"
      | "allowedSigners"
      | "execute"
      | "initialize"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "verify"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedSigners",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [Wallet.ForwardRequestStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [Wallet.ForwardRequestStruct, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SignerAdded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SignerAddedEventObject {
  signer: string;
}
export type SignerAddedEvent = TypedEvent<[string], SignerAddedEventObject>;

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;

export interface Wallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowedSigners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    execute(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verify(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  addSigner(
    signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowedSigners(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  execute(
    req: Wallet.ForwardRequestStruct,
    signature: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verify(
    req: Wallet.ForwardRequestStruct,
    signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  callStatic: {
    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedSigners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execute(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    initialize(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SignerAdded(address)"(signer?: null): SignerAddedEventFilter;
    SignerAdded(signer?: null): SignerAddedEventFilter;
  };

  estimateGas: {
    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowedSigners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verify(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSigner(
      signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowedSigners(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    execute(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      req: Wallet.ForwardRequestStruct,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
