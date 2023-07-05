// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ChuckNorrisTypes } from './sources/Chuck Norris/types';
import type { PetStoreTypes } from './sources/Pet Store/types';
import type { RickAndMortyTypes } from './sources/Rick And Morty/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  ObjMap: { input: any; output: any; }
  Upload: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Query = {
  random?: Maybe<query_random>;
  search?: Maybe<query_search>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus?: Maybe<Array<Maybe<Pet>>>;
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
  findPetsByTags?: Maybe<Array<Maybe<Pet>>>;
  /** Returns a single pet */
  getPetById: Pet;
  /** For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions */
  getOrderById: Order;
  /** Returns a map of status codes to quantities */
  getInventory?: Maybe<Scalars['JSON']['output']>;
  /** Get user by user name */
  getUserByName: User;
  /** Logs user into the system */
  loginUser?: Maybe<Scalars['String']['output']>;
  /** Logs out current logged in user session */
  logoutUser?: Maybe<Scalars['JSON']['output']>;
};


export type QuerysearchArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
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


export type QueryfindPetsByStatusArgs = {
  status: Array<InputMaybe<queryInput_findPetsByStatus_status_items>>;
};


export type QueryfindPetsByTagsArgs = {
  tags: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QuerygetPetByIdArgs = {
  petId: Scalars['BigInt']['input'];
};


export type QuerygetOrderByIdArgs = {
  orderId: Scalars['BigInt']['input'];
};


export type QuerygetUserByNameArgs = {
  username: Scalars['String']['input'];
};


export type QueryloginUserArgs = {
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type query_random = {
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  icon_url?: Maybe<Scalars['URL']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type query_search = {
  total?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<query_search_result_items>>>;
};

export type query_search_result_items = {
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  created_at?: Maybe<Scalars['String']['output']>;
  icon_url?: Maybe<Scalars['URL']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['URL']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

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
  blague?: Maybe<query_random>;
  pet?: Maybe<Pet>;
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

export type Mutation = {
  /** uploads an image */
  uploadFile?: Maybe<ApiResponse>;
  /** Add a new pet to the store */
  addPet?: Maybe<Scalars['JSON']['output']>;
  /** Update an existing pet */
  updatePet?: Maybe<Scalars['JSON']['output']>;
  /** Updates a pet in the store with form data */
  updatePetWithForm?: Maybe<Scalars['JSON']['output']>;
  /** Deletes a pet */
  deletePet?: Maybe<Scalars['JSON']['output']>;
  /** Place an order for a pet */
  placeOrder: Order;
  /** For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors */
  deleteOrder?: Maybe<Scalars['JSON']['output']>;
  /** Creates list of users with given input array */
  createUsersWithArrayInput?: Maybe<Scalars['JSON']['output']>;
  /** Creates list of users with given input array */
  createUsersWithListInput?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  updateUser?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  deleteUser?: Maybe<Scalars['JSON']['output']>;
  /** This can only be done by the logged in user. */
  createUser?: Maybe<Scalars['JSON']['output']>;
};


export type MutationuploadFileArgs = {
  petId: Scalars['BigInt']['input'];
};


export type MutationaddPetArgs = {
  input: Pet_Input;
};


export type MutationupdatePetArgs = {
  input: Pet_Input;
};


export type MutationupdatePetWithFormArgs = {
  petId: Scalars['BigInt']['input'];
};


export type MutationdeletePetArgs = {
  api_key?: InputMaybe<Scalars['String']['input']>;
  petId: Scalars['BigInt']['input'];
};


export type MutationplaceOrderArgs = {
  input: Order_Input;
};


export type MutationdeleteOrderArgs = {
  orderId: Scalars['BigInt']['input'];
};


export type MutationcreateUsersWithArrayInputArgs = {
  input: Array<InputMaybe<User_Input>>;
};


export type MutationcreateUsersWithListInputArgs = {
  input: Array<InputMaybe<User_Input>>;
};


export type MutationupdateUserArgs = {
  username: Scalars['String']['input'];
  input: User_Input;
};


export type MutationdeleteUserArgs = {
  username: Scalars['String']['input'];
};


export type MutationcreateUserArgs = {
  input: User_Input;
};

/** Pet object that needs to be added to the store */
export type Pet = {
  id?: Maybe<Scalars['BigInt']['output']>;
  category?: Maybe<Category>;
  name: Scalars['String']['output'];
  photoUrls: Array<Maybe<Scalars['String']['output']>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  status?: Maybe<mutationInput_addPet_input_status>;
};

export type Category = {
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  id?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** pet status in the store */
export type mutationInput_addPet_input_status =
  | 'available'
  | 'pending'
  | 'sold';

export type queryInput_findPetsByStatus_status_items =
  | 'available'
  | 'pending'
  | 'sold';

/** order placed for purchasing the pet */
export type Order = {
  id?: Maybe<Scalars['BigInt']['output']>;
  petId?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  shipDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<mutation_placeOrder_status>;
  complete?: Maybe<Scalars['Boolean']['output']>;
};

/** Order Status */
export type mutation_placeOrder_status =
  | 'placed'
  | 'approved'
  | 'delivered';

/** Updated user object */
export type User = {
  id?: Maybe<Scalars['BigInt']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** User Status */
  userStatus?: Maybe<Scalars['Int']['output']>;
};

export type ApiResponse = {
  code?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** Pet object that needs to be added to the store */
export type Pet_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  category?: InputMaybe<Category_Input>;
  name: Scalars['String']['input'];
  photoUrls: Array<InputMaybe<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<InputMaybe<Tag_Input>>>;
  status?: InputMaybe<mutationInput_addPet_input_status>;
};

export type Category_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Tag_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** order placed for purchasing the pet */
export type Order_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  petId?: InputMaybe<Scalars['BigInt']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shipDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<mutation_placeOrder_status>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Updated user object */
export type User_Input = {
  id?: InputMaybe<Scalars['BigInt']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** User Status */
  userStatus?: InputMaybe<Scalars['Int']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  query_random: ResolverTypeWrapper<query_random>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  query_search: ResolverTypeWrapper<query_search>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  query_search_result_items: ResolverTypeWrapper<query_search_result_items>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HTTPMethod: HTTPMethod;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Character: ResolverTypeWrapper<Character>;
  Location: ResolverTypeWrapper<Location>;
  Episode: ResolverTypeWrapper<Episode>;
  FilterCharacter: FilterCharacter;
  Characters: ResolverTypeWrapper<Characters>;
  Info: ResolverTypeWrapper<Info>;
  FilterLocation: FilterLocation;
  Locations: ResolverTypeWrapper<Locations>;
  FilterEpisode: FilterEpisode;
  Episodes: ResolverTypeWrapper<Episodes>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Pet: ResolverTypeWrapper<Pet>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Tag: ResolverTypeWrapper<Tag>;
  mutationInput_addPet_input_status: mutationInput_addPet_input_status;
  queryInput_findPetsByStatus_status_items: queryInput_findPetsByStatus_status_items;
  Order: ResolverTypeWrapper<Order>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  mutation_placeOrder_status: mutation_placeOrder_status;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  User: ResolverTypeWrapper<User>;
  ApiResponse: ResolverTypeWrapper<ApiResponse>;
  Pet_Input: Pet_Input;
  Category_Input: Category_Input;
  Tag_Input: Tag_Input;
  Order_Input: Order_Input;
  User_Input: User_Input;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  query_random: query_random;
  String: Scalars['String']['output'];
  URL: Scalars['URL']['output'];
  query_search: query_search;
  Int: Scalars['Int']['output'];
  query_search_result_items: query_search_result_items;
  Boolean: Scalars['Boolean']['output'];
  ObjMap: Scalars['ObjMap']['output'];
  ID: Scalars['ID']['output'];
  Character: Character;
  Location: Location;
  Episode: Episode;
  FilterCharacter: FilterCharacter;
  Characters: Characters;
  Info: Info;
  FilterLocation: FilterLocation;
  Locations: Locations;
  FilterEpisode: FilterEpisode;
  Episodes: Episodes;
  Upload: Scalars['Upload']['output'];
  Mutation: {};
  Pet: Pet;
  BigInt: Scalars['BigInt']['output'];
  Category: Category;
  Tag: Tag;
  Order: Order;
  DateTime: Scalars['DateTime']['output'];
  JSON: Scalars['JSON']['output'];
  User: User;
  ApiResponse: ApiResponse;
  Pet_Input: Pet_Input;
  Category_Input: Category_Input;
  Tag_Input: Tag_Input;
  Order_Input: Order_Input;
  User_Input: User_Input;
}>;

export type exampleDirectiveArgs = {
  value?: Maybe<Scalars['ObjMap']['input']>;
};

export type exampleDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = exampleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']['input']>;
  endpoint?: Maybe<Scalars['String']['input']>;
  operationHeaders?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Scalars['ObjMap']['input']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type cacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']['input']>;
  scope?: Maybe<CacheControlScope>;
};

export type cacheControlDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = cacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  random?: Resolver<Maybe<ResolversTypes['query_random']>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['query_search']>, ParentType, ContextType, Partial<QuerysearchArgs>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QuerycharacterArgs, 'id'>>;
  characters?: Resolver<Maybe<ResolversTypes['Characters']>, ParentType, ContextType, Partial<QuerycharactersArgs>>;
  charactersByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType, RequireFields<QuerycharactersByIdsArgs, 'ids'>>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QuerylocationArgs, 'id'>>;
  locations?: Resolver<Maybe<ResolversTypes['Locations']>, ParentType, ContextType, Partial<QuerylocationsArgs>>;
  locationsByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, RequireFields<QuerylocationsByIdsArgs, 'ids'>>;
  episode?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType, RequireFields<QueryepisodeArgs, 'id'>>;
  episodes?: Resolver<Maybe<ResolversTypes['Episodes']>, ParentType, ContextType, Partial<QueryepisodesArgs>>;
  episodesByIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType, RequireFields<QueryepisodesByIdsArgs, 'ids'>>;
  findPetsByStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryfindPetsByStatusArgs, 'status'>>;
  findPetsByTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pet']>>>, ParentType, ContextType, RequireFields<QueryfindPetsByTagsArgs, 'tags'>>;
  getPetById?: Resolver<ResolversTypes['Pet'], ParentType, ContextType, RequireFields<QuerygetPetByIdArgs, 'petId'>>;
  getOrderById?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QuerygetOrderByIdArgs, 'orderId'>>;
  getInventory?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  getUserByName?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuerygetUserByNameArgs, 'username'>>;
  loginUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryloginUserArgs, 'username' | 'password'>>;
  logoutUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
}>;

export type query_randomResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_random'] = ResolversParentTypes['query_random']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type query_searchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_search'] = ResolversParentTypes['query_search']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  result?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_search_result_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_search_result_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_search_result_items'] = ResolversParentTypes['query_search_result_items']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon_url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type CharacterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Array<Maybe<ResolversTypes['Episode']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blague?: Resolver<Maybe<ResolversTypes['query_random']>, ParentType, ContextType>;
  pet?: Resolver<Maybe<ResolversTypes['Pet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EpisodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  characters?: Resolver<Array<Maybe<ResolversTypes['Character']>>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharactersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Characters'] = ResolversParentTypes['Characters']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Character']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  next?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locations'] = ResolversParentTypes['Locations']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EpisodesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Episodes'] = ResolversParentTypes['Episodes']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  uploadFile?: Resolver<Maybe<ResolversTypes['ApiResponse']>, ParentType, ContextType, RequireFields<MutationuploadFileArgs, 'petId'>>;
  addPet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationaddPetArgs, 'input'>>;
  updatePet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePetArgs, 'input'>>;
  updatePetWithForm?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdatePetWithFormArgs, 'petId'>>;
  deletePet?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeletePetArgs, 'petId'>>;
  placeOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationplaceOrderArgs, 'input'>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteOrderArgs, 'orderId'>>;
  createUsersWithArrayInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUsersWithArrayInputArgs, 'input'>>;
  createUsersWithListInput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUsersWithListInputArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'username' | 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'username'>>;
  createUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
}>;

export type PetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pet'] = ResolversParentTypes['Pet']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrls?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['mutationInput_addPet_input_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['mutation_placeOrder_status']>, ParentType, ContextType>;
  complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiResponse'] = ResolversParentTypes['ApiResponse']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  query_random?: query_randomResolvers<ContextType>;
  URL?: GraphQLScalarType;
  query_search?: query_searchResolvers<ContextType>;
  query_search_result_items?: query_search_result_itemsResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  Character?: CharacterResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Episode?: EpisodeResolvers<ContextType>;
  Characters?: CharactersResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  Locations?: LocationsResolvers<ContextType>;
  Episodes?: EpisodesResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Pet?: PetResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  ApiResponse?: ApiResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  example?: exampleDirectiveResolver<any, any, ContextType>;
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  cacheControl?: cacheControlDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ChuckNorrisTypes.Context & RickAndMortyTypes.Context & PetStoreTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));