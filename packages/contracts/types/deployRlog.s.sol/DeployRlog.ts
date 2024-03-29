/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface DeployRlogInterface extends utils.Interface {
  functions: {
    "IS_SCRIPT()": FunctionFragment;
    "collectionContract()": FunctionFragment;
    "logContract()": FunctionFragment;
    "managerContract()": FunctionFragment;
    "run()": FunctionFragment;
    "tagContract()": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_SCRIPT"
      | "collectionContract"
      | "logContract"
      | "managerContract"
      | "run"
      | "tagContract"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collectionContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "logContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "managerContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "run", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tagContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collectionContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "logContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "managerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tagContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {};
}

export interface DeployRlog extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeployRlogInterface;

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
    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    collectionContract(overrides?: CallOverrides): Promise<[string]>;

    logContract(overrides?: CallOverrides): Promise<[string]>;

    managerContract(overrides?: CallOverrides): Promise<[string]>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tagContract(overrides?: CallOverrides): Promise<[string]>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  collectionContract(overrides?: CallOverrides): Promise<string>;

  logContract(overrides?: CallOverrides): Promise<string>;

  managerContract(overrides?: CallOverrides): Promise<string>;

  run(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tagContract(overrides?: CallOverrides): Promise<string>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    collectionContract(overrides?: CallOverrides): Promise<string>;

    logContract(overrides?: CallOverrides): Promise<string>;

    managerContract(overrides?: CallOverrides): Promise<string>;

    run(overrides?: CallOverrides): Promise<void>;

    tagContract(overrides?: CallOverrides): Promise<string>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    collectionContract(overrides?: CallOverrides): Promise<BigNumber>;

    logContract(overrides?: CallOverrides): Promise<BigNumber>;

    managerContract(overrides?: CallOverrides): Promise<BigNumber>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tagContract(overrides?: CallOverrides): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectionContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    logContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    managerContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    run(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tagContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
