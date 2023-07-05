// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PetStoreTypes {
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
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
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

  export type QuerySdk = {
      /** Multiple status values can be provided with comma separated strings **/
  findPetsByStatus: InContextSdkMethod<Query['findPetsByStatus'], QueryfindPetsByStatusArgs, MeshContext>,
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. **/
  findPetsByTags: InContextSdkMethod<Query['findPetsByTags'], QueryfindPetsByTagsArgs, MeshContext>,
  /** Returns a single pet **/
  getPetById: InContextSdkMethod<Query['getPetById'], QuerygetPetByIdArgs, MeshContext>,
  /** For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions **/
  getOrderById: InContextSdkMethod<Query['getOrderById'], QuerygetOrderByIdArgs, MeshContext>,
  /** Returns a map of status codes to quantities **/
  getInventory: InContextSdkMethod<Query['getInventory'], {}, MeshContext>,
  /** Get user by user name **/
  getUserByName: InContextSdkMethod<Query['getUserByName'], QuerygetUserByNameArgs, MeshContext>,
  /** Logs user into the system **/
  loginUser: InContextSdkMethod<Query['loginUser'], QueryloginUserArgs, MeshContext>,
  /** Logs out current logged in user session **/
  logoutUser: InContextSdkMethod<Query['logoutUser'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** uploads an image **/
  uploadFile: InContextSdkMethod<Mutation['uploadFile'], MutationuploadFileArgs, MeshContext>,
  /** Add a new pet to the store **/
  addPet: InContextSdkMethod<Mutation['addPet'], MutationaddPetArgs, MeshContext>,
  /** Update an existing pet **/
  updatePet: InContextSdkMethod<Mutation['updatePet'], MutationupdatePetArgs, MeshContext>,
  /** Updates a pet in the store with form data **/
  updatePetWithForm: InContextSdkMethod<Mutation['updatePetWithForm'], MutationupdatePetWithFormArgs, MeshContext>,
  /** Deletes a pet **/
  deletePet: InContextSdkMethod<Mutation['deletePet'], MutationdeletePetArgs, MeshContext>,
  /** Place an order for a pet **/
  placeOrder: InContextSdkMethod<Mutation['placeOrder'], MutationplaceOrderArgs, MeshContext>,
  /** For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors **/
  deleteOrder: InContextSdkMethod<Mutation['deleteOrder'], MutationdeleteOrderArgs, MeshContext>,
  /** Creates list of users with given input array **/
  createUsersWithArrayInput: InContextSdkMethod<Mutation['createUsersWithArrayInput'], MutationcreateUsersWithArrayInputArgs, MeshContext>,
  /** Creates list of users with given input array **/
  createUsersWithListInput: InContextSdkMethod<Mutation['createUsersWithListInput'], MutationcreateUsersWithListInputArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  updateUser: InContextSdkMethod<Mutation['updateUser'], MutationupdateUserArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  deleteUser: InContextSdkMethod<Mutation['deleteUser'], MutationdeleteUserArgs, MeshContext>,
  /** This can only be done by the logged in user. **/
  createUser: InContextSdkMethod<Mutation['createUser'], MutationcreateUserArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Pet Store"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
