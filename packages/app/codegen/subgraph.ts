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

export type BlockChangedFilter = {
  readonly number_gte: Scalars['Int'];
};

export type Block_Height = {
  readonly hash?: InputMaybe<Scalars['Bytes']>;
  readonly number?: InputMaybe<Scalars['Int']>;
  readonly number_gte?: InputMaybe<Scalars['Int']>;
};

export type Comment = {
  readonly __typename?: 'Comment';
  readonly author: Wallet;
  readonly comment?: Maybe<Comment>;
  readonly comments?: Maybe<ReadonlyArray<Comment>>;
  readonly created: Scalars['BigInt'];
  readonly data: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly log?: Maybe<Log>;
  readonly modified: Scalars['BigInt'];
  readonly page?: Maybe<Page>;
};


export type CommentCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Comment_Filter>;
};

export type Comment_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly author?: InputMaybe<Scalars['String']>;
  readonly author_?: InputMaybe<Wallet_Filter>;
  readonly author_contains?: InputMaybe<Scalars['String']>;
  readonly author_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_gt?: InputMaybe<Scalars['String']>;
  readonly author_gte?: InputMaybe<Scalars['String']>;
  readonly author_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_lt?: InputMaybe<Scalars['String']>;
  readonly author_lte?: InputMaybe<Scalars['String']>;
  readonly author_not?: InputMaybe<Scalars['String']>;
  readonly author_not_contains?: InputMaybe<Scalars['String']>;
  readonly author_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comment?: InputMaybe<Scalars['String']>;
  readonly comment_?: InputMaybe<Comment_Filter>;
  readonly comment_contains?: InputMaybe<Scalars['String']>;
  readonly comment_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly comment_ends_with?: InputMaybe<Scalars['String']>;
  readonly comment_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comment_gt?: InputMaybe<Scalars['String']>;
  readonly comment_gte?: InputMaybe<Scalars['String']>;
  readonly comment_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comment_lt?: InputMaybe<Scalars['String']>;
  readonly comment_lte?: InputMaybe<Scalars['String']>;
  readonly comment_not?: InputMaybe<Scalars['String']>;
  readonly comment_not_contains?: InputMaybe<Scalars['String']>;
  readonly comment_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly comment_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly comment_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comment_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comment_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly comment_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comment_starts_with?: InputMaybe<Scalars['String']>;
  readonly comment_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comments?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_?: InputMaybe<Comment_Filter>;
  readonly comments_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly created?: InputMaybe<Scalars['BigInt']>;
  readonly created_gt?: InputMaybe<Scalars['BigInt']>;
  readonly created_gte?: InputMaybe<Scalars['BigInt']>;
  readonly created_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly created_lt?: InputMaybe<Scalars['BigInt']>;
  readonly created_lte?: InputMaybe<Scalars['BigInt']>;
  readonly created_not?: InputMaybe<Scalars['BigInt']>;
  readonly created_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly data?: InputMaybe<Scalars['String']>;
  readonly data_contains?: InputMaybe<Scalars['String']>;
  readonly data_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_gt?: InputMaybe<Scalars['String']>;
  readonly data_gte?: InputMaybe<Scalars['String']>;
  readonly data_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_lt?: InputMaybe<Scalars['String']>;
  readonly data_lte?: InputMaybe<Scalars['String']>;
  readonly data_not?: InputMaybe<Scalars['String']>;
  readonly data_not_contains?: InputMaybe<Scalars['String']>;
  readonly data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly log?: InputMaybe<Scalars['String']>;
  readonly log_?: InputMaybe<Log_Filter>;
  readonly log_contains?: InputMaybe<Scalars['String']>;
  readonly log_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_gt?: InputMaybe<Scalars['String']>;
  readonly log_gte?: InputMaybe<Scalars['String']>;
  readonly log_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_lt?: InputMaybe<Scalars['String']>;
  readonly log_lte?: InputMaybe<Scalars['String']>;
  readonly log_not?: InputMaybe<Scalars['String']>;
  readonly log_not_contains?: InputMaybe<Scalars['String']>;
  readonly log_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly log_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly log_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly log_starts_with?: InputMaybe<Scalars['String']>;
  readonly log_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly modified?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modified_lt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_lte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly page?: InputMaybe<Scalars['String']>;
  readonly page_?: InputMaybe<Page_Filter>;
  readonly page_contains?: InputMaybe<Scalars['String']>;
  readonly page_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly page_ends_with?: InputMaybe<Scalars['String']>;
  readonly page_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly page_gt?: InputMaybe<Scalars['String']>;
  readonly page_gte?: InputMaybe<Scalars['String']>;
  readonly page_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly page_lt?: InputMaybe<Scalars['String']>;
  readonly page_lte?: InputMaybe<Scalars['String']>;
  readonly page_not?: InputMaybe<Scalars['String']>;
  readonly page_not_contains?: InputMaybe<Scalars['String']>;
  readonly page_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly page_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly page_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly page_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly page_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly page_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly page_starts_with?: InputMaybe<Scalars['String']>;
  readonly page_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Comment_OrderBy {
  Author = 'author',
  Comment = 'comment',
  Comments = 'comments',
  Created = 'created',
  Data = 'data',
  Id = 'id',
  Log = 'log',
  Modified = 'modified',
  Page = 'page'
}

export type Log = {
  readonly __typename?: 'Log';
  readonly author: Wallet;
  readonly comments?: Maybe<ReadonlyArray<Comment>>;
  readonly created: Scalars['BigInt'];
  readonly data: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly logs?: Maybe<ReadonlyArray<Log>>;
  readonly modified: Scalars['BigInt'];
  readonly pages?: Maybe<ReadonlyArray<Page>>;
  readonly tags?: Maybe<ReadonlyArray<Tag>>;
  readonly txHash?: Maybe<Scalars['String']>;
};


export type LogCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Comment_Filter>;
};


export type LogLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Log_Filter>;
};


export type LogPagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Page_Filter>;
};


export type LogTagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tag_Filter>;
};

export type Log_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly author?: InputMaybe<Scalars['String']>;
  readonly author_?: InputMaybe<Wallet_Filter>;
  readonly author_contains?: InputMaybe<Scalars['String']>;
  readonly author_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_gt?: InputMaybe<Scalars['String']>;
  readonly author_gte?: InputMaybe<Scalars['String']>;
  readonly author_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_lt?: InputMaybe<Scalars['String']>;
  readonly author_lte?: InputMaybe<Scalars['String']>;
  readonly author_not?: InputMaybe<Scalars['String']>;
  readonly author_not_contains?: InputMaybe<Scalars['String']>;
  readonly author_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comments?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_?: InputMaybe<Comment_Filter>;
  readonly comments_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly created?: InputMaybe<Scalars['BigInt']>;
  readonly created_gt?: InputMaybe<Scalars['BigInt']>;
  readonly created_gte?: InputMaybe<Scalars['BigInt']>;
  readonly created_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly created_lt?: InputMaybe<Scalars['BigInt']>;
  readonly created_lte?: InputMaybe<Scalars['BigInt']>;
  readonly created_not?: InputMaybe<Scalars['BigInt']>;
  readonly created_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly data?: InputMaybe<Scalars['String']>;
  readonly data_contains?: InputMaybe<Scalars['String']>;
  readonly data_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_gt?: InputMaybe<Scalars['String']>;
  readonly data_gte?: InputMaybe<Scalars['String']>;
  readonly data_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_lt?: InputMaybe<Scalars['String']>;
  readonly data_lte?: InputMaybe<Scalars['String']>;
  readonly data_not?: InputMaybe<Scalars['String']>;
  readonly data_not_contains?: InputMaybe<Scalars['String']>;
  readonly data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly logs?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_?: InputMaybe<Log_Filter>;
  readonly logs_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly modified?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modified_lt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_lte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pages?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_?: InputMaybe<Page_Filter>;
  readonly pages_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_?: InputMaybe<Tag_Filter>;
  readonly tags_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly txHash?: InputMaybe<Scalars['String']>;
  readonly txHash_contains?: InputMaybe<Scalars['String']>;
  readonly txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash_ends_with?: InputMaybe<Scalars['String']>;
  readonly txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash_gt?: InputMaybe<Scalars['String']>;
  readonly txHash_gte?: InputMaybe<Scalars['String']>;
  readonly txHash_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly txHash_lt?: InputMaybe<Scalars['String']>;
  readonly txHash_lte?: InputMaybe<Scalars['String']>;
  readonly txHash_not?: InputMaybe<Scalars['String']>;
  readonly txHash_not_contains?: InputMaybe<Scalars['String']>;
  readonly txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly txHash_starts_with?: InputMaybe<Scalars['String']>;
  readonly txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Log_OrderBy {
  Author = 'author',
  Comments = 'comments',
  Created = 'created',
  Data = 'data',
  Id = 'id',
  Logs = 'logs',
  Modified = 'modified',
  Pages = 'pages',
  Tags = 'tags',
  TxHash = 'txHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Page = {
  readonly __typename?: 'Page';
  readonly author: Wallet;
  readonly comments?: Maybe<ReadonlyArray<Comment>>;
  readonly created: Scalars['BigInt'];
  readonly data: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly logs?: Maybe<ReadonlyArray<Log>>;
  readonly modified: Scalars['BigInt'];
  readonly pages?: Maybe<ReadonlyArray<Page>>;
  readonly tags?: Maybe<ReadonlyArray<Tag>>;
};


export type PageCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Comment_Filter>;
};


export type PageLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Log_Filter>;
};


export type PagePagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Page_Filter>;
};


export type PageTagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tag_Filter>;
};

export type Page_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly author?: InputMaybe<Scalars['String']>;
  readonly author_?: InputMaybe<Wallet_Filter>;
  readonly author_contains?: InputMaybe<Scalars['String']>;
  readonly author_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_gt?: InputMaybe<Scalars['String']>;
  readonly author_gte?: InputMaybe<Scalars['String']>;
  readonly author_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_lt?: InputMaybe<Scalars['String']>;
  readonly author_lte?: InputMaybe<Scalars['String']>;
  readonly author_not?: InputMaybe<Scalars['String']>;
  readonly author_not_contains?: InputMaybe<Scalars['String']>;
  readonly author_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comments?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_?: InputMaybe<Comment_Filter>;
  readonly comments_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly created?: InputMaybe<Scalars['BigInt']>;
  readonly created_gt?: InputMaybe<Scalars['BigInt']>;
  readonly created_gte?: InputMaybe<Scalars['BigInt']>;
  readonly created_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly created_lt?: InputMaybe<Scalars['BigInt']>;
  readonly created_lte?: InputMaybe<Scalars['BigInt']>;
  readonly created_not?: InputMaybe<Scalars['BigInt']>;
  readonly created_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly data?: InputMaybe<Scalars['String']>;
  readonly data_contains?: InputMaybe<Scalars['String']>;
  readonly data_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_gt?: InputMaybe<Scalars['String']>;
  readonly data_gte?: InputMaybe<Scalars['String']>;
  readonly data_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_lt?: InputMaybe<Scalars['String']>;
  readonly data_lte?: InputMaybe<Scalars['String']>;
  readonly data_not?: InputMaybe<Scalars['String']>;
  readonly data_not_contains?: InputMaybe<Scalars['String']>;
  readonly data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly data_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly data_starts_with?: InputMaybe<Scalars['String']>;
  readonly data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly logs?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_?: InputMaybe<Log_Filter>;
  readonly logs_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly modified?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_gte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly modified_lt?: InputMaybe<Scalars['BigInt']>;
  readonly modified_lte?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not?: InputMaybe<Scalars['BigInt']>;
  readonly modified_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pages?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_?: InputMaybe<Page_Filter>;
  readonly pages_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_?: InputMaybe<Tag_Filter>;
  readonly tags_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export enum Page_OrderBy {
  Author = 'author',
  Comments = 'comments',
  Created = 'created',
  Data = 'data',
  Id = 'id',
  Logs = 'logs',
  Modified = 'modified',
  Pages = 'pages',
  Tags = 'tags'
}

export type Query = {
  readonly __typename?: 'Query';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly comment?: Maybe<Comment>;
  readonly comments: ReadonlyArray<Comment>;
  readonly log?: Maybe<Log>;
  readonly logs: ReadonlyArray<Log>;
  readonly page?: Maybe<Page>;
  readonly pages: ReadonlyArray<Page>;
  readonly tag?: Maybe<Tag>;
  readonly tags: ReadonlyArray<Tag>;
  readonly wallet?: Maybe<Wallet>;
  readonly wallets: ReadonlyArray<Wallet>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryCommentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCommentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Comment_Filter>;
};


export type QueryLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Log_Filter>;
};


export type QueryPageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Page_Filter>;
};


export type QueryTagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tag_Filter>;
};


export type QueryWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
  readonly comment?: Maybe<Comment>;
  readonly comments: ReadonlyArray<Comment>;
  readonly log?: Maybe<Log>;
  readonly logs: ReadonlyArray<Log>;
  readonly page?: Maybe<Page>;
  readonly pages: ReadonlyArray<Page>;
  readonly tag?: Maybe<Tag>;
  readonly tags: ReadonlyArray<Tag>;
  readonly wallet?: Maybe<Wallet>;
  readonly wallets: ReadonlyArray<Wallet>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionCommentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCommentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Comment_Filter>;
};


export type SubscriptionLogArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLogsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Log_Filter>;
};


export type SubscriptionPageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Page_Filter>;
};


export type SubscriptionTagArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTagsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tag_Filter>;
};


export type SubscriptionWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type Tag = {
  readonly __typename?: 'Tag';
  readonly author: Wallet;
  readonly comments?: Maybe<ReadonlyArray<Comment>>;
  readonly created: Scalars['BigInt'];
  readonly id: Scalars['ID'];
  readonly logs?: Maybe<ReadonlyArray<Log>>;
  readonly name: Scalars['String'];
  readonly pages?: Maybe<ReadonlyArray<Page>>;
};


export type TagCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Comment_Filter>;
};


export type TagLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Log_Filter>;
};


export type TagPagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Page_Filter>;
};

export type Tag_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly author?: InputMaybe<Scalars['String']>;
  readonly author_?: InputMaybe<Wallet_Filter>;
  readonly author_contains?: InputMaybe<Scalars['String']>;
  readonly author_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_gt?: InputMaybe<Scalars['String']>;
  readonly author_gte?: InputMaybe<Scalars['String']>;
  readonly author_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_lt?: InputMaybe<Scalars['String']>;
  readonly author_lte?: InputMaybe<Scalars['String']>;
  readonly author_not?: InputMaybe<Scalars['String']>;
  readonly author_not_contains?: InputMaybe<Scalars['String']>;
  readonly author_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly author_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly author_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly author_starts_with?: InputMaybe<Scalars['String']>;
  readonly author_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly comments?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_?: InputMaybe<Comment_Filter>;
  readonly comments_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly comments_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly created?: InputMaybe<Scalars['BigInt']>;
  readonly created_gt?: InputMaybe<Scalars['BigInt']>;
  readonly created_gte?: InputMaybe<Scalars['BigInt']>;
  readonly created_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly created_lt?: InputMaybe<Scalars['BigInt']>;
  readonly created_lte?: InputMaybe<Scalars['BigInt']>;
  readonly created_not?: InputMaybe<Scalars['BigInt']>;
  readonly created_not_in?: InputMaybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly logs?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_?: InputMaybe<Log_Filter>;
  readonly logs_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly logs_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly name_contains?: InputMaybe<Scalars['String']>;
  readonly name_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_gt?: InputMaybe<Scalars['String']>;
  readonly name_gte?: InputMaybe<Scalars['String']>;
  readonly name_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: InputMaybe<Scalars['String']>;
  readonly name_lte?: InputMaybe<Scalars['String']>;
  readonly name_not?: InputMaybe<Scalars['String']>;
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  readonly name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pages?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_?: InputMaybe<Page_Filter>;
  readonly pages_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly pages_not_contains_nocase?: InputMaybe<ReadonlyArray<Scalars['String']>>;
};

export enum Tag_OrderBy {
  Author = 'author',
  Comments = 'comments',
  Created = 'created',
  Id = 'id',
  Logs = 'logs',
  Name = 'name',
  Pages = 'pages'
}

export type Wallet = {
  readonly __typename?: 'Wallet';
  readonly comments: ReadonlyArray<Comment>;
  readonly id: Scalars['ID'];
  readonly logs: ReadonlyArray<Log>;
  readonly owner: Scalars['String'];
  readonly pages: ReadonlyArray<Page>;
  readonly tags: ReadonlyArray<Tag>;
};


export type WalletCommentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Comment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Comment_Filter>;
};


export type WalletLogsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Log_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Log_Filter>;
};


export type WalletPagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Page_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Page_Filter>;
};


export type WalletTagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tag_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Tag_Filter>;
};

export type Wallet_Filter = {
  /** Filter for the block changed event. */
  readonly _change_block?: InputMaybe<BlockChangedFilter>;
  readonly comments_?: InputMaybe<Comment_Filter>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly id_gt?: InputMaybe<Scalars['ID']>;
  readonly id_gte?: InputMaybe<Scalars['ID']>;
  readonly id_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: InputMaybe<Scalars['ID']>;
  readonly id_lte?: InputMaybe<Scalars['ID']>;
  readonly id_not?: InputMaybe<Scalars['ID']>;
  readonly id_not_in?: InputMaybe<ReadonlyArray<Scalars['ID']>>;
  readonly logs_?: InputMaybe<Log_Filter>;
  readonly owner?: InputMaybe<Scalars['String']>;
  readonly owner_contains?: InputMaybe<Scalars['String']>;
  readonly owner_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_gt?: InputMaybe<Scalars['String']>;
  readonly owner_gte?: InputMaybe<Scalars['String']>;
  readonly owner_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_lt?: InputMaybe<Scalars['String']>;
  readonly owner_lte?: InputMaybe<Scalars['String']>;
  readonly owner_not?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains?: InputMaybe<Scalars['String']>;
  readonly owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_not_in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly owner_not_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with?: InputMaybe<Scalars['String']>;
  readonly owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  readonly pages_?: InputMaybe<Page_Filter>;
  readonly tags_?: InputMaybe<Tag_Filter>;
};

export enum Wallet_OrderBy {
  Comments = 'comments',
  Id = 'id',
  Logs = 'logs',
  Owner = 'owner',
  Pages = 'pages',
  Tags = 'tags'
}

export type _Block_ = {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  readonly timestamp?: Maybe<Scalars['String']>;
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

export type LatestLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestLogsQuery = { readonly __typename?: 'Query', readonly logs: ReadonlyArray<{ readonly __typename?: 'Log', readonly id: string, readonly created: any, readonly data: string, readonly modified: any, readonly author: { readonly __typename?: 'Wallet', readonly id: string, readonly owner: string } }> };


export const LatestLogsDocument = gql`
    query LatestLogs {
  logs(first: 100, orderBy: created, orderDirection: desc) {
    id
    author {
      id
      owner
    }
    created
    data
    modified
  }
}
    `;

export function useLatestLogsQuery(options: Omit<Urql.UseQueryArgs<LatestLogsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LatestLogsQuery>({ query: LatestLogsDocument, ...options });
};