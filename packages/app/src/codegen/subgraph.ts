import { gql } from 'urql';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_Height = {
  readonly hash?: InputMaybe<Scalars['Bytes']>;
  readonly number?: InputMaybe<Scalars['Int']>;
  readonly number_gte?: InputMaybe<Scalars['Int']>;
};

export type Message = {
  readonly __typename?: 'Message';
  readonly from: Scalars['Bytes'];
  readonly id: Scalars['ID'];
  readonly message: Scalars['String'];
  readonly timestamp: Scalars['Int'];
};

export type Message_Filter = {
  readonly from?: InputMaybe<Scalars['Bytes']>;
  readonly from_contains?: InputMaybe<Scalars['Bytes']>;
  readonly from_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_not?: InputMaybe<Scalars['Bytes']>;
  readonly from_not_contains?: InputMaybe<Scalars['Bytes']>;
  readonly from_not_in?: InputMaybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly message?: InputMaybe<Scalars['String']>;
  readonly message_contains?: InputMaybe<Scalars['String']>;
  readonly message_ends_with?: InputMaybe<Scalars['String']>;
  readonly message_gt?: InputMaybe<Scalars['String']>;
  readonly message_gte?: InputMaybe<Scalars['String']>;
  readonly message_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly message_lt?: InputMaybe<Scalars['String']>;
  readonly message_lte?: InputMaybe<Scalars['String']>;
  readonly message_not?: InputMaybe<Scalars['String']>;
  readonly message_not_contains?: InputMaybe<Scalars['String']>;
  readonly message_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly message_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly message_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly message_starts_with?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_gte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
  readonly timestamp_lt?: InputMaybe<Scalars['Int']>;
  readonly timestamp_lte?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not?: InputMaybe<Scalars['Int']>;
  readonly timestamp_not_in?: InputMaybe<ReadonlyArray<Scalars['Int']>>;
};

export enum Message_OrderBy {
  From = 'from',
  Id = 'id',
  Message = 'message',
  Timestamp = 'timestamp'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  readonly __typename?: 'Query';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly message?: Maybe<Message>;
  readonly messages: ReadonlyArray<Message>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Message_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Message_Filter>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly message?: Maybe<Message>;
  readonly messages: ReadonlyArray<Message>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Message_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Message_Filter>;
};

export type _Block_ = {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type MessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MessagesQuery = { readonly __typename?: 'Query', readonly messages: ReadonlyArray<{ readonly __typename?: 'Message', readonly id: string, readonly timestamp: number, readonly from: any, readonly message: string }> };

export type UserMessagesQueryVariables = Exact<{
  account: Scalars['Bytes'];
}>;


export type UserMessagesQuery = { readonly __typename?: 'Query', readonly messages: ReadonlyArray<{ readonly __typename?: 'Message', readonly id: string, readonly timestamp: number, readonly from: any, readonly message: string }> };


export const MessagesDocument = gql`
    query Messages {
  messages(first: 500) {
    id
    timestamp
    from
    message
  }
}
    `;

export function useMessagesQuery(options: Omit<Urql.UseQueryArgs<MessagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MessagesQuery>({ query: MessagesDocument, ...options });
};
export const UserMessagesDocument = gql`
    query UserMessages($account: Bytes!) {
  messages(where: {from: $account}) {
    id
    timestamp
    from
    message
  }
}
    `;

export function useUserMessagesQuery(options: Omit<Urql.UseQueryArgs<UserMessagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserMessagesQuery>({ query: UserMessagesDocument, ...options });
};