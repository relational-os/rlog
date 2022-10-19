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

export interface RelationalInterface extends utils.Interface {
  functions: {
    "addBiDirectionalRelationship(uint256,(address,uint256))": FunctionFragment;
    "addUniDirectionalRelationship(uint256,(address,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBiDirectionalRelationship"
      | "addUniDirectionalRelationship"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBiDirectionalRelationship",
    values: [PromiseOrValue<BigNumberish>, Relational.RelationshipStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addUniDirectionalRelationship",
    values: [PromiseOrValue<BigNumberish>, Relational.RelationshipStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBiDirectionalRelationship",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUniDirectionalRelationship",
    data: BytesLike
  ): Result;

  events: {
    "RelationshipAdded(uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RelationshipAdded"): EventFragment;
}

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

export interface Relational extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RelationalInterface;

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
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUniDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBiDirectionalRelationship(
    targetId: PromiseOrValue<BigNumberish>,
    arg1: Relational.RelationshipStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUniDirectionalRelationship(
    targetId: PromiseOrValue<BigNumberish>,
    arg1: Relational.RelationshipStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBiDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    addUniDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUniDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBiDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUniDirectionalRelationship(
      targetId: PromiseOrValue<BigNumberish>,
      arg1: Relational.RelationshipStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}