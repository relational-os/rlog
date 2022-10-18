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

export declare namespace Relational {
  export type RelationshipStruct = {
    addr: PromiseOrValue<string>;
    id: PromiseOrValue<BigNumberish>;
  };

  export type RelationshipStructOutput = [string, BigNumber] & {
    addr: string;
    id: BigNumber;
  };
}

export declare namespace Log {
  export type LogContentsStruct = {
    id: PromiseOrValue<BigNumberish>;
    author: PromiseOrValue<string>;
    createdTimestamp: PromiseOrValue<BigNumberish>;
    modifiedTimestamp: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<string>;
    relationships: Relational.RelationshipStruct[];
  };

  export type LogContentsStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    Relational.RelationshipStructOutput[]
  ] & {
    id: BigNumber;
    author: string;
    createdTimestamp: BigNumber;
    modifiedTimestamp: BigNumber;
    data: string;
    relationships: Relational.RelationshipStructOutput[];
  };
}

export interface LogInterface extends utils.Interface {
  functions: {
    "addBiDirectionalRelationship(uint256,(address,uint256))": FunctionFragment;
    "addUniDirectionalRelationship(uint256,(address,uint256))": FunctionFragment;
    "create(string,(address,uint256)[])": FunctionFragment;
    "edit(uint256,string)": FunctionFragment;
    "logCount()": FunctionFragment;
    "logs(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBiDirectionalRelationship"
      | "addUniDirectionalRelationship"
      | "create"
      | "edit"
      | "logCount"
      | "logs"
      | "remove"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBiDirectionalRelationship",
    values: [PromiseOrValue<BigNumberish>, Relational.RelationshipStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addUniDirectionalRelationship",
    values: [PromiseOrValue<BigNumberish>, Relational.RelationshipStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<string>, Relational.RelationshipStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "edit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "logCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "logs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBiDirectionalRelationship",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUniDirectionalRelationship",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "edit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "logCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "logs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;

  events: {
    "LogCreated(uint256,tuple)": EventFragment;
    "LogEdited(uint256,string)": EventFragment;
    "LogRemoved(uint256)": EventFragment;
    "RelationshipAdded(uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogEdited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelationshipAdded"): EventFragment;
}

export interface LogCreatedEventObject {
  id: BigNumber;
  data: Log.LogContentsStructOutput;
}
export type LogCreatedEvent = TypedEvent<
  [BigNumber, Log.LogContentsStructOutput],
  LogCreatedEventObject
>;

export type LogCreatedEventFilter = TypedEventFilter<LogCreatedEvent>;

export interface LogEditedEventObject {
  id: BigNumber;
  data: string;
}
export type LogEditedEvent = TypedEvent<
  [BigNumber, string],
  LogEditedEventObject
>;

export type LogEditedEventFilter = TypedEventFilter<LogEditedEvent>;

export interface LogRemovedEventObject {
  id: BigNumber;
}
export type LogRemovedEvent = TypedEvent<[BigNumber], LogRemovedEventObject>;

export type LogRemovedEventFilter = TypedEventFilter<LogRemovedEvent>;

export interface RelationshipAddedEventObject {
  id: BigNumber;
  relationship: Relational.RelationshipStructOutput;
}
export type RelationshipAddedEvent = TypedEvent<
  [BigNumber, Relational.RelationshipStructOutput],
  RelationshipAddedEventObject
>;

export type RelationshipAddedEventFilter =
  TypedEventFilter<RelationshipAddedEvent>;

export interface Log extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LogInterface;

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
    addBiDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUniDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    create(
      data: PromiseOrValue<string>,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    edit(
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    logCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    logs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        author: string;
        createdTimestamp: BigNumber;
        modifiedTimestamp: BigNumber;
        data: string;
      }
    >;

    remove(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBiDirectionalRelationship(
    id: PromiseOrValue<BigNumberish>,
    relationship: Relational.RelationshipStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUniDirectionalRelationship(
    id: PromiseOrValue<BigNumberish>,
    relationship: Relational.RelationshipStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  create(
    data: PromiseOrValue<string>,
    relationships: Relational.RelationshipStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  edit(
    id: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  logCount(overrides?: CallOverrides): Promise<BigNumber>;

  logs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber, string] & {
      id: BigNumber;
      author: string;
      createdTimestamp: BigNumber;
      modifiedTimestamp: BigNumber;
      data: string;
    }
  >;

  remove(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBiDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    addUniDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      data: PromiseOrValue<string>,
      relationships: Relational.RelationshipStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    edit(
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    logCount(overrides?: CallOverrides): Promise<BigNumber>;

    logs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber, string] & {
        id: BigNumber;
        author: string;
        createdTimestamp: BigNumber;
        modifiedTimestamp: BigNumber;
        data: string;
      }
    >;

    remove(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogCreated(uint256,tuple)"(id?: null, data?: null): LogCreatedEventFilter;
    LogCreated(id?: null, data?: null): LogCreatedEventFilter;

    "LogEdited(uint256,string)"(id?: null, data?: null): LogEditedEventFilter;
    LogEdited(id?: null, data?: null): LogEditedEventFilter;

    "LogRemoved(uint256)"(id?: null): LogRemovedEventFilter;
    LogRemoved(id?: null): LogRemovedEventFilter;

    "RelationshipAdded(uint256,tuple)"(
      id?: null,
      relationship?: null
    ): RelationshipAddedEventFilter;
    RelationshipAdded(
      id?: null,
      relationship?: null
    ): RelationshipAddedEventFilter;
  };

  estimateGas: {
    addBiDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUniDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    create(
      data: PromiseOrValue<string>,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    edit(
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    logCount(overrides?: CallOverrides): Promise<BigNumber>;

    logs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remove(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBiDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUniDirectionalRelationship(
      id: PromiseOrValue<BigNumberish>,
      relationship: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    create(
      data: PromiseOrValue<string>,
      relationships: Relational.RelationshipStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    edit(
      id: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    logCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    logs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
