/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['Int'];
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: MediaType;
  vote_average: Scalars['Float'];
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['Int'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies?: Maybe<Array<Maybe<ProductionCompanies>>>;
  release_date?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: MediaType;
  vote_average: Scalars['Float'];
};

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv'
}

export type ProductionCompanies = {
  __typename?: 'ProductionCompanies';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  media: Array<Media>;
  mediaDetails: MediaDetails;
  mediasDetails: Array<MediaDetails>;
};


export type QueryMediaArgs = {
  page: Scalars['Int'];
};


export type QueryMediaDetailsArgs = {
  id: Scalars['Int'];
  type: Scalars['String'];
};


export type QueryMediasDetailsArgs = {
  items: Array<VariousMediaDetails>;
};

export type VariousMediaDetails = {
  id: Scalars['Int'];
  type: MediaType;
};
