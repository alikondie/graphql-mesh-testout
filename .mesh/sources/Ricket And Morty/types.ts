// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace RicketAndMortyTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Query = {
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
};


export type QuerycharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QuerycharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<FilterCharacter>;
};


export type QuerycharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QuerylocationArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylocationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<FilterLocation>;
};


export type QuerylocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryepisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryepisodesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<FilterEpisode>;
};


export type QueryepisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type Character = {
  /** The id of the character. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']['output']>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']['output']>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  /** The id of the location. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
};

export type Episode = {
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']['output']>;
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']['output']>;
};

export type FilterCharacter = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
};

export type Characters = {
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Info = {
  /** The length of the response. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']['output']>;
};

export type FilterLocation = {
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  dimension?: InputMaybe<Scalars['String']['input']>;
};

export type Locations = {
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type FilterEpisode = {
  name?: InputMaybe<Scalars['String']['input']>;
  episode?: InputMaybe<Scalars['String']['input']>;
};

export type Episodes = {
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

  export type QuerySdk = {
      /** Get a specific character by ID **/
  character: InContextSdkMethod<Query['character'], QuerycharacterArgs, MeshContext>,
  /** Get the list of all characters **/
  characters: InContextSdkMethod<Query['characters'], QuerycharactersArgs, MeshContext>,
  /** Get a list of characters selected by ids **/
  charactersByIds: InContextSdkMethod<Query['charactersByIds'], QuerycharactersByIdsArgs, MeshContext>,
  /** Get a specific locations by ID **/
  location: InContextSdkMethod<Query['location'], QuerylocationArgs, MeshContext>,
  /** Get the list of all locations **/
  locations: InContextSdkMethod<Query['locations'], QuerylocationsArgs, MeshContext>,
  /** Get a list of locations selected by ids **/
  locationsByIds: InContextSdkMethod<Query['locationsByIds'], QuerylocationsByIdsArgs, MeshContext>,
  /** Get a specific episode by ID **/
  episode: InContextSdkMethod<Query['episode'], QueryepisodeArgs, MeshContext>,
  /** Get the list of all episodes **/
  episodes: InContextSdkMethod<Query['episodes'], QueryepisodesArgs, MeshContext>,
  /** Get a list of episodes selected by ids **/
  episodesByIds: InContextSdkMethod<Query['episodesByIds'], QueryepisodesByIdsArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Ricket And Morty"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
