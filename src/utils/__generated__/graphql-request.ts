/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  citext: any;
  date: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app_setting" */
export type App_Setting = {
  __typename?: 'app_setting';
  created_at: Scalars['timestamp'];
  data?: Maybe<Scalars['jsonb']>;
  group_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "app_setting" */
export type App_SettingDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "app_setting" */
export type App_Setting_Aggregate = {
  __typename?: 'app_setting_aggregate';
  aggregate?: Maybe<App_Setting_Aggregate_Fields>;
  nodes: Array<App_Setting>;
};

/** aggregate fields of "app_setting" */
export type App_Setting_Aggregate_Fields = {
  __typename?: 'app_setting_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<App_Setting_Max_Fields>;
  min?: Maybe<App_Setting_Min_Fields>;
};


/** aggregate fields of "app_setting" */
export type App_Setting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<App_Setting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type App_Setting_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "app_setting". All fields are combined with a logical 'AND'. */
export type App_Setting_Bool_Exp = {
  _and?: InputMaybe<Array<App_Setting_Bool_Exp>>;
  _not?: InputMaybe<App_Setting_Bool_Exp>;
  _or?: InputMaybe<Array<App_Setting_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  group_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_setting" */
export enum App_Setting_Constraint {
  /** unique or primary key constraint */
  AppSettingPkey = 'app_setting_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type App_Setting_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type App_Setting_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type App_Setting_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "app_setting" */
export type App_Setting_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['jsonb']>;
  group_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type App_Setting_Max_Fields = {
  __typename?: 'app_setting_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  group_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type App_Setting_Min_Fields = {
  __typename?: 'app_setting_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  group_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "app_setting" */
export type App_Setting_Mutation_Response = {
  __typename?: 'app_setting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<App_Setting>;
};

/** on_conflict condition type for table "app_setting" */
export type App_Setting_On_Conflict = {
  constraint: App_Setting_Constraint;
  update_columns?: Array<App_Setting_Update_Column>;
  where?: InputMaybe<App_Setting_Bool_Exp>;
};

/** Ordering options when selecting data from "app_setting". */
export type App_Setting_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_setting */
export type App_Setting_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type App_Setting_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "app_setting" */
export enum App_Setting_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "app_setting" */
export type App_Setting_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['jsonb']>;
  group_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "app_setting" */
export enum App_Setting_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "bank" */
export type Bank = {
  __typename?: 'bank';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  bank_branches: Array<Bank_Branch>;
  /** An aggregate relationship */
  bank_branches_aggregate: Bank_Branch_Aggregate;
  /** An object relationship */
  bank_type?: Maybe<Bank_Type>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  /** An array relationship */
  fund_contracts: Array<Fund_Contract>;
  /** An aggregate relationship */
  fund_contracts_aggregate: Fund_Contract_Aggregate;
  id: Scalars['String'];
  lo: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "bank" */
export type BankBank_BranchesArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


/** columns and relationships of "bank" */
export type BankBank_Branches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


/** columns and relationships of "bank" */
export type BankFund_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


/** columns and relationships of "bank" */
export type BankFund_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};

/** aggregated selection of "bank" */
export type Bank_Aggregate = {
  __typename?: 'bank_aggregate';
  aggregate?: Maybe<Bank_Aggregate_Fields>;
  nodes: Array<Bank>;
};

/** aggregate fields of "bank" */
export type Bank_Aggregate_Fields = {
  __typename?: 'bank_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bank_Max_Fields>;
  min?: Maybe<Bank_Min_Fields>;
};


/** aggregate fields of "bank" */
export type Bank_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bank" */
export type Bank_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bank_Max_Order_By>;
  min?: InputMaybe<Bank_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bank" */
export type Bank_Arr_Rel_Insert_Input = {
  data: Array<Bank_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bank". All fields are combined with a logical 'AND'. */
export type Bank_Bool_Exp = {
  _and?: InputMaybe<Array<Bank_Bool_Exp>>;
  _not?: InputMaybe<Bank_Bool_Exp>;
  _or?: InputMaybe<Array<Bank_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  bank_branches?: InputMaybe<Bank_Branch_Bool_Exp>;
  bank_type?: InputMaybe<Bank_Type_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  fund_contracts?: InputMaybe<Fund_Contract_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  type_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "bank_branch" */
export type Bank_Branch = {
  __typename?: 'bank_branch';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  /** An object relationship */
  bank: Bank;
  bank_id: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** An object relationship */
  village?: Maybe<Villages>;
  village_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "bank_branch" */
export type Bank_BranchLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** columns and relationships of "bank_branch" */
export type Bank_BranchLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** columns and relationships of "bank_branch" */
export type Bank_BranchUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "bank_branch" */
export type Bank_BranchUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "bank_branch" */
export type Bank_Branch_Aggregate = {
  __typename?: 'bank_branch_aggregate';
  aggregate?: Maybe<Bank_Branch_Aggregate_Fields>;
  nodes: Array<Bank_Branch>;
};

/** aggregate fields of "bank_branch" */
export type Bank_Branch_Aggregate_Fields = {
  __typename?: 'bank_branch_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bank_Branch_Max_Fields>;
  min?: Maybe<Bank_Branch_Min_Fields>;
};


/** aggregate fields of "bank_branch" */
export type Bank_Branch_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bank_branch" */
export type Bank_Branch_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bank_Branch_Max_Order_By>;
  min?: InputMaybe<Bank_Branch_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bank_branch" */
export type Bank_Branch_Arr_Rel_Insert_Input = {
  data: Array<Bank_Branch_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bank_Branch_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bank_branch". All fields are combined with a logical 'AND'. */
export type Bank_Branch_Bool_Exp = {
  _and?: InputMaybe<Array<Bank_Branch_Bool_Exp>>;
  _not?: InputMaybe<Bank_Branch_Bool_Exp>;
  _or?: InputMaybe<Array<Bank_Branch_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  bank?: InputMaybe<Bank_Bool_Exp>;
  bank_id?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  village?: InputMaybe<Villages_Bool_Exp>;
  village_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bank_branch" */
export enum Bank_Branch_Constraint {
  /** unique or primary key constraint */
  BankBranchPkey = 'bank_branch_pkey'
}

/** input type for inserting data into table "bank_branch" */
export type Bank_Branch_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Bank_Obj_Rel_Insert_Input>;
  bank_id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  village?: InputMaybe<Villages_Obj_Rel_Insert_Input>;
  village_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Bank_Branch_Max_Fields = {
  __typename?: 'bank_branch_max_fields';
  address?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  village_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bank_branch" */
export type Bank_Branch_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  village_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bank_Branch_Min_Fields = {
  __typename?: 'bank_branch_min_fields';
  address?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  village_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bank_branch" */
export type Bank_Branch_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  village_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bank_branch" */
export type Bank_Branch_Mutation_Response = {
  __typename?: 'bank_branch_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bank_Branch>;
};

/** input type for inserting object relation for remote table "bank_branch" */
export type Bank_Branch_Obj_Rel_Insert_Input = {
  data: Bank_Branch_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bank_Branch_On_Conflict>;
};

/** on_conflict condition type for table "bank_branch" */
export type Bank_Branch_On_Conflict = {
  constraint: Bank_Branch_Constraint;
  update_columns?: Array<Bank_Branch_Update_Column>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};

/** Ordering options when selecting data from "bank_branch". */
export type Bank_Branch_Order_By = {
  active?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  bank?: InputMaybe<Bank_Order_By>;
  bank_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  village?: InputMaybe<Villages_Order_By>;
  village_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bank_branch */
export type Bank_Branch_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bank_branch" */
export enum Bank_Branch_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VillageId = 'village_id'
}

/** input type for updating data in table "bank_branch" */
export type Bank_Branch_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  bank_id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  village_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "bank_branch" */
export enum Bank_Branch_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VillageId = 'village_id'
}

/** unique or primary key constraints on table "bank" */
export enum Bank_Constraint {
  /** unique or primary key constraint */
  BankPkey = 'bank_pkey'
}

/** input type for inserting data into table "bank" */
export type Bank_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  bank_branches?: InputMaybe<Bank_Branch_Arr_Rel_Insert_Input>;
  bank_type?: InputMaybe<Bank_Type_Obj_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  fund_contracts?: InputMaybe<Fund_Contract_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Bank_Max_Fields = {
  __typename?: 'bank_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "bank" */
export type Bank_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bank_Min_Fields = {
  __typename?: 'bank_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "bank" */
export type Bank_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bank" */
export type Bank_Mutation_Response = {
  __typename?: 'bank_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bank>;
};

/** input type for inserting object relation for remote table "bank" */
export type Bank_Obj_Rel_Insert_Input = {
  data: Bank_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};

/** on_conflict condition type for table "bank" */
export type Bank_On_Conflict = {
  constraint: Bank_Constraint;
  update_columns?: Array<Bank_Update_Column>;
  where?: InputMaybe<Bank_Bool_Exp>;
};

/** Ordering options when selecting data from "bank". */
export type Bank_Order_By = {
  active?: InputMaybe<Order_By>;
  bank_branches_aggregate?: InputMaybe<Bank_Branch_Aggregate_Order_By>;
  bank_type?: InputMaybe<Bank_Type_Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  fund_contracts_aggregate?: InputMaybe<Fund_Contract_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bank */
export type Bank_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "bank" */
export enum Bank_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Logo = 'logo',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "bank" */
export type Bank_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "bank_type" */
export type Bank_Type = {
  __typename?: 'bank_type';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  banks: Array<Bank>;
  /** An aggregate relationship */
  banks_aggregate: Bank_Aggregate;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  updated_at: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "bank_type" */
export type Bank_TypeBanksArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** columns and relationships of "bank_type" */
export type Bank_TypeBanks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};

/** aggregated selection of "bank_type" */
export type Bank_Type_Aggregate = {
  __typename?: 'bank_type_aggregate';
  aggregate?: Maybe<Bank_Type_Aggregate_Fields>;
  nodes: Array<Bank_Type>;
};

/** aggregate fields of "bank_type" */
export type Bank_Type_Aggregate_Fields = {
  __typename?: 'bank_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bank_Type_Max_Fields>;
  min?: Maybe<Bank_Type_Min_Fields>;
};


/** aggregate fields of "bank_type" */
export type Bank_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bank_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "bank_type". All fields are combined with a logical 'AND'. */
export type Bank_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Bank_Type_Bool_Exp>>;
  _not?: InputMaybe<Bank_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Bank_Type_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  banks?: InputMaybe<Bank_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "bank_type" */
export enum Bank_Type_Constraint {
  /** unique or primary key constraint */
  BankTypePkey = 'bank_type_pkey'
}

/** input type for inserting data into table "bank_type" */
export type Bank_Type_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  banks?: InputMaybe<Bank_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Bank_Type_Max_Fields = {
  __typename?: 'bank_type_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Bank_Type_Min_Fields = {
  __typename?: 'bank_type_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "bank_type" */
export type Bank_Type_Mutation_Response = {
  __typename?: 'bank_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bank_Type>;
};

/** input type for inserting object relation for remote table "bank_type" */
export type Bank_Type_Obj_Rel_Insert_Input = {
  data: Bank_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bank_Type_On_Conflict>;
};

/** on_conflict condition type for table "bank_type" */
export type Bank_Type_On_Conflict = {
  constraint: Bank_Type_Constraint;
  update_columns?: Array<Bank_Type_Update_Column>;
  where?: InputMaybe<Bank_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "bank_type". */
export type Bank_Type_Order_By = {
  active?: InputMaybe<Order_By>;
  banks_aggregate?: InputMaybe<Bank_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bank_type */
export type Bank_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "bank_type" */
export enum Bank_Type_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "bank_type" */
export type Bank_Type_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "bank_type" */
export enum Bank_Type_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "bank" */
export enum Bank_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Logo = 'logo',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "busines" */
export type Busines = {
  __typename?: 'busines';
  address?: Maybe<Scalars['String']>;
  /** An object relationship */
  busines_class?: Maybe<Busines_Class>;
  busines_class_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  busines_sector?: Maybe<Busines_Sector>;
  busines_sector_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  busines_size?: Maybe<Busines_Size>;
  busines_size_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  busines_type?: Maybe<Busines_Type>;
  busines_type_id?: Maybe<Scalars['String']>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no: Scalars['String'];
  code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  default_account_id?: Maybe<Scalars['String']>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_condition?: Maybe<Scalars['Boolean']>;
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets: Scalars['numeric'];
  owner: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  staff: Scalars['Int'];
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  village?: Maybe<Villages>;
  village_id?: Maybe<Scalars['String']>;
  village_name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "busines" */
export type BusinesLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** columns and relationships of "busines" */
export type BusinesLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "busines" */
export type Busines_Aggregate = {
  __typename?: 'busines_aggregate';
  aggregate?: Maybe<Busines_Aggregate_Fields>;
  nodes: Array<Busines>;
};

/** aggregate fields of "busines" */
export type Busines_Aggregate_Fields = {
  __typename?: 'busines_aggregate_fields';
  avg?: Maybe<Busines_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Busines_Max_Fields>;
  min?: Maybe<Busines_Min_Fields>;
  stddev?: Maybe<Busines_Stddev_Fields>;
  stddev_pop?: Maybe<Busines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Busines_Stddev_Samp_Fields>;
  sum?: Maybe<Busines_Sum_Fields>;
  var_pop?: Maybe<Busines_Var_Pop_Fields>;
  var_samp?: Maybe<Busines_Var_Samp_Fields>;
  variance?: Maybe<Busines_Variance_Fields>;
};


/** aggregate fields of "busines" */
export type Busines_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Busines_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "busines" */
export type Busines_Aggregate_Order_By = {
  avg?: InputMaybe<Busines_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Busines_Max_Order_By>;
  min?: InputMaybe<Busines_Min_Order_By>;
  stddev?: InputMaybe<Busines_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Busines_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Busines_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Busines_Sum_Order_By>;
  var_pop?: InputMaybe<Busines_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Busines_Var_Samp_Order_By>;
  variance?: InputMaybe<Busines_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "busines" */
export type Busines_Arr_Rel_Insert_Input = {
  data: Array<Busines_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_On_Conflict>;
};

/** aggregate avg on columns */
export type Busines_Avg_Fields = {
  __typename?: 'busines_avg_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "busines" */
export type Busines_Avg_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "busines". All fields are combined with a logical 'AND'. */
export type Busines_Bool_Exp = {
  _and?: InputMaybe<Array<Busines_Bool_Exp>>;
  _not?: InputMaybe<Busines_Bool_Exp>;
  _or?: InputMaybe<Array<Busines_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  busines_class?: InputMaybe<Busines_Class_Bool_Exp>;
  busines_class_id?: InputMaybe<String_Comparison_Exp>;
  busines_sector?: InputMaybe<Busines_Sector_Bool_Exp>;
  busines_sector_id?: InputMaybe<String_Comparison_Exp>;
  busines_size?: InputMaybe<Busines_Size_Bool_Exp>;
  busines_size_id?: InputMaybe<String_Comparison_Exp>;
  busines_type?: InputMaybe<Busines_Type_Bool_Exp>;
  busines_type_id?: InputMaybe<String_Comparison_Exp>;
  certificate_no?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  default_account_id?: InputMaybe<String_Comparison_Exp>;
  describe?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_condition?: InputMaybe<Boolean_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  number_of_assets?: InputMaybe<Numeric_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone2?: InputMaybe<String_Comparison_Exp>;
  staff?: InputMaybe<Int_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  village?: InputMaybe<Villages_Bool_Exp>;
  village_id?: InputMaybe<String_Comparison_Exp>;
  village_name?: InputMaybe<String_Comparison_Exp>;
};

/** ການຈັດປະເພດ E&S [A, B, C, D, E] */
export type Busines_Class = {
  __typename?: 'busines_class';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ການຈັດປະເພດ E&S [A, B, C, D, E] */
export type Busines_ClassBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


/** ການຈັດປະເພດ E&S [A, B, C, D, E] */
export type Busines_ClassBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** aggregated selection of "busines_class" */
export type Busines_Class_Aggregate = {
  __typename?: 'busines_class_aggregate';
  aggregate?: Maybe<Busines_Class_Aggregate_Fields>;
  nodes: Array<Busines_Class>;
};

/** aggregate fields of "busines_class" */
export type Busines_Class_Aggregate_Fields = {
  __typename?: 'busines_class_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Busines_Class_Max_Fields>;
  min?: Maybe<Busines_Class_Min_Fields>;
};


/** aggregate fields of "busines_class" */
export type Busines_Class_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Busines_Class_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "busines_class". All fields are combined with a logical 'AND'. */
export type Busines_Class_Bool_Exp = {
  _and?: InputMaybe<Array<Busines_Class_Bool_Exp>>;
  _not?: InputMaybe<Busines_Class_Bool_Exp>;
  _or?: InputMaybe<Array<Busines_Class_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  busines?: InputMaybe<Busines_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "busines_class" */
export enum Busines_Class_Constraint {
  /** unique or primary key constraint */
  BusinesClassPkey = 'busines_class_pkey'
}

/** input type for inserting data into table "busines_class" */
export type Busines_Class_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  busines?: InputMaybe<Busines_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Busines_Class_Max_Fields = {
  __typename?: 'busines_class_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Busines_Class_Min_Fields = {
  __typename?: 'busines_class_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "busines_class" */
export type Busines_Class_Mutation_Response = {
  __typename?: 'busines_class_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Busines_Class>;
};

/** input type for inserting object relation for remote table "busines_class" */
export type Busines_Class_Obj_Rel_Insert_Input = {
  data: Busines_Class_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_Class_On_Conflict>;
};

/** on_conflict condition type for table "busines_class" */
export type Busines_Class_On_Conflict = {
  constraint: Busines_Class_Constraint;
  update_columns?: Array<Busines_Class_Update_Column>;
  where?: InputMaybe<Busines_Class_Bool_Exp>;
};

/** Ordering options when selecting data from "busines_class". */
export type Busines_Class_Order_By = {
  active?: InputMaybe<Order_By>;
  busines_aggregate?: InputMaybe<Busines_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: busines_class */
export type Busines_Class_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "busines_class" */
export enum Busines_Class_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "busines_class" */
export type Busines_Class_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "busines_class" */
export enum Busines_Class_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** unique or primary key constraints on table "busines" */
export enum Busines_Constraint {
  /** unique or primary key constraint */
  BusinesPkey = 'busines_pkey'
}

/** input type for incrementing numeric columns in table "busines" */
export type Busines_Inc_Input = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Scalars['numeric']>;
  staff?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "busines" */
export type Busines_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  busines_class?: InputMaybe<Busines_Class_Obj_Rel_Insert_Input>;
  busines_class_id?: InputMaybe<Scalars['String']>;
  busines_sector?: InputMaybe<Busines_Sector_Obj_Rel_Insert_Input>;
  busines_sector_id?: InputMaybe<Scalars['String']>;
  busines_size?: InputMaybe<Busines_Size_Obj_Rel_Insert_Input>;
  busines_size_id?: InputMaybe<Scalars['String']>;
  busines_type?: InputMaybe<Busines_Type_Obj_Rel_Insert_Input>;
  busines_type_id?: InputMaybe<Scalars['String']>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default_account_id?: InputMaybe<Scalars['String']>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_condition?: InputMaybe<Scalars['Boolean']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Scalars['numeric']>;
  owner?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone2?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<Scalars['Int']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  village?: InputMaybe<Villages_Obj_Rel_Insert_Input>;
  village_id?: InputMaybe<Scalars['String']>;
  village_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Busines_Max_Fields = {
  __typename?: 'busines_max_fields';
  address?: Maybe<Scalars['String']>;
  busines_class_id?: Maybe<Scalars['String']>;
  busines_sector_id?: Maybe<Scalars['String']>;
  busines_size_id?: Maybe<Scalars['String']>;
  busines_type_id?: Maybe<Scalars['String']>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_account_id?: Maybe<Scalars['String']>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lo?: Maybe<Scalars['String']>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['numeric']>;
  owner?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  staff?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  village_id?: Maybe<Scalars['String']>;
  village_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "busines" */
export type Busines_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  busines_class_id?: InputMaybe<Order_By>;
  busines_sector_id?: InputMaybe<Order_By>;
  busines_size_id?: InputMaybe<Order_By>;
  busines_type_id?: InputMaybe<Order_By>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_account_id?: InputMaybe<Order_By>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone2?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  village_id?: InputMaybe<Order_By>;
  village_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Busines_Min_Fields = {
  __typename?: 'busines_min_fields';
  address?: Maybe<Scalars['String']>;
  busines_class_id?: Maybe<Scalars['String']>;
  busines_sector_id?: Maybe<Scalars['String']>;
  busines_size_id?: Maybe<Scalars['String']>;
  busines_type_id?: Maybe<Scalars['String']>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_account_id?: Maybe<Scalars['String']>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lo?: Maybe<Scalars['String']>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['numeric']>;
  owner?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phone2?: Maybe<Scalars['String']>;
  staff?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  village_id?: Maybe<Scalars['String']>;
  village_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "busines" */
export type Busines_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  busines_class_id?: InputMaybe<Order_By>;
  busines_sector_id?: InputMaybe<Order_By>;
  busines_size_id?: InputMaybe<Order_By>;
  busines_type_id?: InputMaybe<Order_By>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_account_id?: InputMaybe<Order_By>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone2?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  village_id?: InputMaybe<Order_By>;
  village_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "busines" */
export type Busines_Mutation_Response = {
  __typename?: 'busines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Busines>;
};

/** input type for inserting object relation for remote table "busines" */
export type Busines_Obj_Rel_Insert_Input = {
  data: Busines_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_On_Conflict>;
};

/** on_conflict condition type for table "busines" */
export type Busines_On_Conflict = {
  constraint: Busines_Constraint;
  update_columns?: Array<Busines_Update_Column>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** Ordering options when selecting data from "busines". */
export type Busines_Order_By = {
  address?: InputMaybe<Order_By>;
  busines_class?: InputMaybe<Busines_Class_Order_By>;
  busines_class_id?: InputMaybe<Order_By>;
  busines_sector?: InputMaybe<Busines_Sector_Order_By>;
  busines_sector_id?: InputMaybe<Order_By>;
  busines_size?: InputMaybe<Busines_Size_Order_By>;
  busines_size_id?: InputMaybe<Order_By>;
  busines_type?: InputMaybe<Busines_Type_Order_By>;
  busines_type_id?: InputMaybe<Order_By>;
  certificate_no?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  default_account_id?: InputMaybe<Order_By>;
  describe?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_condition?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  number_of_assets?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone2?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  village?: InputMaybe<Villages_Order_By>;
  village_id?: InputMaybe<Order_By>;
  village_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: busines */
export type Busines_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** ຂະແໜງການ [ກະ​ສິ​ກຳ​, ການ​ຄ້າ, ບໍ​ລິ​ການ, ຫັດ​ຖະ​ກຳ, ອຸດ​​ສາ​ຫະ​ກຳ] */
export type Busines_Sector = {
  __typename?: 'busines_sector';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ຂະແໜງການ [ກະ​ສິ​ກຳ​, ການ​ຄ້າ, ບໍ​ລິ​ການ, ຫັດ​ຖະ​ກຳ, ອຸດ​​ສາ​ຫະ​ກຳ] */
export type Busines_SectorBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


/** ຂະແໜງການ [ກະ​ສິ​ກຳ​, ການ​ຄ້າ, ບໍ​ລິ​ການ, ຫັດ​ຖະ​ກຳ, ອຸດ​​ສາ​ຫະ​ກຳ] */
export type Busines_SectorBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** aggregated selection of "busines_sector" */
export type Busines_Sector_Aggregate = {
  __typename?: 'busines_sector_aggregate';
  aggregate?: Maybe<Busines_Sector_Aggregate_Fields>;
  nodes: Array<Busines_Sector>;
};

/** aggregate fields of "busines_sector" */
export type Busines_Sector_Aggregate_Fields = {
  __typename?: 'busines_sector_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Busines_Sector_Max_Fields>;
  min?: Maybe<Busines_Sector_Min_Fields>;
};


/** aggregate fields of "busines_sector" */
export type Busines_Sector_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Busines_Sector_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "busines_sector". All fields are combined with a logical 'AND'. */
export type Busines_Sector_Bool_Exp = {
  _and?: InputMaybe<Array<Busines_Sector_Bool_Exp>>;
  _not?: InputMaybe<Busines_Sector_Bool_Exp>;
  _or?: InputMaybe<Array<Busines_Sector_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  busines?: InputMaybe<Busines_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "busines_sector" */
export enum Busines_Sector_Constraint {
  /** unique or primary key constraint */
  BusinesSectorPkey = 'busines_sector_pkey'
}

/** input type for inserting data into table "busines_sector" */
export type Busines_Sector_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  busines?: InputMaybe<Busines_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Busines_Sector_Max_Fields = {
  __typename?: 'busines_sector_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Busines_Sector_Min_Fields = {
  __typename?: 'busines_sector_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "busines_sector" */
export type Busines_Sector_Mutation_Response = {
  __typename?: 'busines_sector_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Busines_Sector>;
};

/** input type for inserting object relation for remote table "busines_sector" */
export type Busines_Sector_Obj_Rel_Insert_Input = {
  data: Busines_Sector_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_Sector_On_Conflict>;
};

/** on_conflict condition type for table "busines_sector" */
export type Busines_Sector_On_Conflict = {
  constraint: Busines_Sector_Constraint;
  update_columns?: Array<Busines_Sector_Update_Column>;
  where?: InputMaybe<Busines_Sector_Bool_Exp>;
};

/** Ordering options when selecting data from "busines_sector". */
export type Busines_Sector_Order_By = {
  active?: InputMaybe<Order_By>;
  busines_aggregate?: InputMaybe<Busines_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: busines_sector */
export type Busines_Sector_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "busines_sector" */
export enum Busines_Sector_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "busines_sector" */
export type Busines_Sector_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "busines_sector" */
export enum Busines_Sector_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select columns of table "busines" */
export enum Busines_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BusinesClassId = 'busines_class_id',
  /** column name */
  BusinesSectorId = 'busines_sector_id',
  /** column name */
  BusinesSizeId = 'busines_size_id',
  /** column name */
  BusinesTypeId = 'busines_type_id',
  /** column name */
  CertificateNo = 'certificate_no',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultAccountId = 'default_account_id',
  /** column name */
  Describe = 'describe',
  /** column name */
  En = 'en',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsCondition = 'is_condition',
  /** column name */
  Lo = 'lo',
  /** column name */
  NumberOfAssets = 'number_of_assets',
  /** column name */
  Owner = 'owner',
  /** column name */
  Phone = 'phone',
  /** column name */
  Phone2 = 'phone2',
  /** column name */
  Staff = 'staff',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VillageId = 'village_id',
  /** column name */
  VillageName = 'village_name'
}

/** input type for updating data in table "busines" */
export type Busines_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  busines_class_id?: InputMaybe<Scalars['String']>;
  busines_sector_id?: InputMaybe<Scalars['String']>;
  busines_size_id?: InputMaybe<Scalars['String']>;
  busines_type_id?: InputMaybe<Scalars['String']>;
  /** ເລກທີໃບທະບຽນວິ​ສາ​ຫະ​ກິດ [4372/ຫຈທ, 6178/ຫຈທ] */
  certificate_no?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  default_account_id?: InputMaybe<Scalars['String']>;
  /** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ອະ​ທິ​ບາຍ​ລະ​ອຽດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ພິມປະຕິທິນ(ຫ້ອຍຝາ,ຕັ້ງໂຕະ,ບັດອໍາພອນປີໃໝ່] */
  describe?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_condition?: InputMaybe<Scalars['Boolean']>;
  lo?: InputMaybe<Scalars['String']>;
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Scalars['numeric']>;
  owner?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone2?: InputMaybe<Scalars['String']>;
  staff?: InputMaybe<Scalars['Int']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  village_id?: InputMaybe<Scalars['String']>;
  village_name?: InputMaybe<Scalars['String']>;
};

/** "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] */
export type Busines_Size = {
  __typename?: 'busines_size';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] */
export type Busines_SizeBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


/** "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] "​ຂະ​ໜາດ​ທຸ​ລະ​ກິດ [ຈຸນ​ລະ​ພາກ, ນ້ອຍ, ກາງ] */
export type Busines_SizeBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** aggregated selection of "busines_size" */
export type Busines_Size_Aggregate = {
  __typename?: 'busines_size_aggregate';
  aggregate?: Maybe<Busines_Size_Aggregate_Fields>;
  nodes: Array<Busines_Size>;
};

/** aggregate fields of "busines_size" */
export type Busines_Size_Aggregate_Fields = {
  __typename?: 'busines_size_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Busines_Size_Max_Fields>;
  min?: Maybe<Busines_Size_Min_Fields>;
};


/** aggregate fields of "busines_size" */
export type Busines_Size_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Busines_Size_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "busines_size". All fields are combined with a logical 'AND'. */
export type Busines_Size_Bool_Exp = {
  _and?: InputMaybe<Array<Busines_Size_Bool_Exp>>;
  _not?: InputMaybe<Busines_Size_Bool_Exp>;
  _or?: InputMaybe<Array<Busines_Size_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  busines?: InputMaybe<Busines_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "busines_size" */
export enum Busines_Size_Constraint {
  /** unique or primary key constraint */
  BusinesSizePkey = 'busines_size_pkey'
}

/** input type for inserting data into table "busines_size" */
export type Busines_Size_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  busines?: InputMaybe<Busines_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Busines_Size_Max_Fields = {
  __typename?: 'busines_size_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Busines_Size_Min_Fields = {
  __typename?: 'busines_size_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "busines_size" */
export type Busines_Size_Mutation_Response = {
  __typename?: 'busines_size_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Busines_Size>;
};

/** input type for inserting object relation for remote table "busines_size" */
export type Busines_Size_Obj_Rel_Insert_Input = {
  data: Busines_Size_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_Size_On_Conflict>;
};

/** on_conflict condition type for table "busines_size" */
export type Busines_Size_On_Conflict = {
  constraint: Busines_Size_Constraint;
  update_columns?: Array<Busines_Size_Update_Column>;
  where?: InputMaybe<Busines_Size_Bool_Exp>;
};

/** Ordering options when selecting data from "busines_size". */
export type Busines_Size_Order_By = {
  active?: InputMaybe<Order_By>;
  busines_aggregate?: InputMaybe<Busines_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: busines_size */
export type Busines_Size_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "busines_size" */
export enum Busines_Size_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "busines_size" */
export type Busines_Size_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "busines_size" */
export enum Busines_Size_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Busines_Stddev_Fields = {
  __typename?: 'busines_stddev_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "busines" */
export type Busines_Stddev_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Busines_Stddev_Pop_Fields = {
  __typename?: 'busines_stddev_pop_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "busines" */
export type Busines_Stddev_Pop_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Busines_Stddev_Samp_Fields = {
  __typename?: 'busines_stddev_samp_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "busines" */
export type Busines_Stddev_Samp_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Busines_Sum_Fields = {
  __typename?: 'busines_sum_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['numeric']>;
  staff?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "busines" */
export type Busines_Sum_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ແຍກ​ປະ​ເພດຈາກ​ຊື່​ທຸ​ລະ​ກິດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ໂຮງພິມ] */
export type Busines_Type = {
  __typename?: 'busines_type';
  active?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ແຍກ​ປະ​ເພດຈາກ​ຊື່​ທຸ​ລະ​ກິດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ໂຮງພິມ] */
export type Busines_TypeBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


/** ກິດ​ຈະ​ກຳຂອງ​ທຸ​ລະ​ກິດ (ແຍກ​ປະ​ເພດຈາກ​ຊື່​ທຸ​ລະ​ກິດ) [ຂາຍເຄື່ອງກໍ່ສ້າງ, ໂຮງພິມ] */
export type Busines_TypeBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** aggregated selection of "busines_type" */
export type Busines_Type_Aggregate = {
  __typename?: 'busines_type_aggregate';
  aggregate?: Maybe<Busines_Type_Aggregate_Fields>;
  nodes: Array<Busines_Type>;
};

/** aggregate fields of "busines_type" */
export type Busines_Type_Aggregate_Fields = {
  __typename?: 'busines_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Busines_Type_Max_Fields>;
  min?: Maybe<Busines_Type_Min_Fields>;
};


/** aggregate fields of "busines_type" */
export type Busines_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Busines_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "busines_type". All fields are combined with a logical 'AND'. */
export type Busines_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Busines_Type_Bool_Exp>>;
  _not?: InputMaybe<Busines_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Busines_Type_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  busines?: InputMaybe<Busines_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "busines_type" */
export enum Busines_Type_Constraint {
  /** unique or primary key constraint */
  BusinesTypePkey = 'busines_type_pkey'
}

/** input type for inserting data into table "busines_type" */
export type Busines_Type_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  busines?: InputMaybe<Busines_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Busines_Type_Max_Fields = {
  __typename?: 'busines_type_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Busines_Type_Min_Fields = {
  __typename?: 'busines_type_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "busines_type" */
export type Busines_Type_Mutation_Response = {
  __typename?: 'busines_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Busines_Type>;
};

/** input type for inserting object relation for remote table "busines_type" */
export type Busines_Type_Obj_Rel_Insert_Input = {
  data: Busines_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Busines_Type_On_Conflict>;
};

/** on_conflict condition type for table "busines_type" */
export type Busines_Type_On_Conflict = {
  constraint: Busines_Type_Constraint;
  update_columns?: Array<Busines_Type_Update_Column>;
  where?: InputMaybe<Busines_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "busines_type". */
export type Busines_Type_Order_By = {
  active?: InputMaybe<Order_By>;
  busines_aggregate?: InputMaybe<Busines_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: busines_type */
export type Busines_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "busines_type" */
export enum Busines_Type_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "busines_type" */
export type Busines_Type_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "busines_type" */
export enum Busines_Type_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "busines" */
export enum Busines_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BusinesClassId = 'busines_class_id',
  /** column name */
  BusinesSectorId = 'busines_sector_id',
  /** column name */
  BusinesSizeId = 'busines_size_id',
  /** column name */
  BusinesTypeId = 'busines_type_id',
  /** column name */
  CertificateNo = 'certificate_no',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultAccountId = 'default_account_id',
  /** column name */
  Describe = 'describe',
  /** column name */
  En = 'en',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsCondition = 'is_condition',
  /** column name */
  Lo = 'lo',
  /** column name */
  NumberOfAssets = 'number_of_assets',
  /** column name */
  Owner = 'owner',
  /** column name */
  Phone = 'phone',
  /** column name */
  Phone2 = 'phone2',
  /** column name */
  Staff = 'staff',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VillageId = 'village_id',
  /** column name */
  VillageName = 'village_name'
}

/** aggregate var_pop on columns */
export type Busines_Var_Pop_Fields = {
  __typename?: 'busines_var_pop_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "busines" */
export type Busines_Var_Pop_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Busines_Var_Samp_Fields = {
  __typename?: 'busines_var_samp_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "busines" */
export type Busines_Var_Samp_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Busines_Variance_Fields = {
  __typename?: 'busines_variance_fields';
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "busines" */
export type Busines_Variance_Order_By = {
  /** ຈຳ​ນວນ​ຊັບ​ສິນ​​ທາງ​ທຸ​ລະ​ກິດ  (LAK) */
  number_of_assets?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "districts" */
export type Districts = {
  __typename?: 'districts';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lo?: Maybe<Scalars['String']>;
  prov_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  province?: Maybe<Provinces>;
  updated_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  villages: Array<Villages>;
  /** An aggregate relationship */
  villages_aggregate: Villages_Aggregate;
};


/** columns and relationships of "districts" */
export type DistrictsVillagesArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};


/** columns and relationships of "districts" */
export type DistrictsVillages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};

/** aggregated selection of "districts" */
export type Districts_Aggregate = {
  __typename?: 'districts_aggregate';
  aggregate?: Maybe<Districts_Aggregate_Fields>;
  nodes: Array<Districts>;
};

/** aggregate fields of "districts" */
export type Districts_Aggregate_Fields = {
  __typename?: 'districts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Districts_Max_Fields>;
  min?: Maybe<Districts_Min_Fields>;
};


/** aggregate fields of "districts" */
export type Districts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Districts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "districts" */
export type Districts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Districts_Max_Order_By>;
  min?: InputMaybe<Districts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "districts" */
export type Districts_Arr_Rel_Insert_Input = {
  data: Array<Districts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "districts". All fields are combined with a logical 'AND'. */
export type Districts_Bool_Exp = {
  _and?: InputMaybe<Array<Districts_Bool_Exp>>;
  _not?: InputMaybe<Districts_Bool_Exp>;
  _or?: InputMaybe<Array<Districts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  prov_id?: InputMaybe<String_Comparison_Exp>;
  province?: InputMaybe<Provinces_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  villages?: InputMaybe<Villages_Bool_Exp>;
};

/** unique or primary key constraints on table "districts" */
export enum Districts_Constraint {
  /** unique or primary key constraint */
  DistrictsPkey = 'districts_pkey'
}

/** input type for inserting data into table "districts" */
export type Districts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  prov_id?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Provinces_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  villages?: InputMaybe<Villages_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Districts_Max_Fields = {
  __typename?: 'districts_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  prov_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "districts" */
export type Districts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  prov_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Districts_Min_Fields = {
  __typename?: 'districts_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  prov_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "districts" */
export type Districts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  prov_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "districts" */
export type Districts_Mutation_Response = {
  __typename?: 'districts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Districts>;
};

/** input type for inserting object relation for remote table "districts" */
export type Districts_Obj_Rel_Insert_Input = {
  data: Districts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};

/** on_conflict condition type for table "districts" */
export type Districts_On_Conflict = {
  constraint: Districts_Constraint;
  update_columns?: Array<Districts_Update_Column>;
  where?: InputMaybe<Districts_Bool_Exp>;
};

/** Ordering options when selecting data from "districts". */
export type Districts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  prov_id?: InputMaybe<Order_By>;
  province?: InputMaybe<Provinces_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  villages_aggregate?: InputMaybe<Villages_Aggregate_Order_By>;
};

/** primary key columns input for table: districts */
export type Districts_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "districts" */
export enum Districts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  ProvId = 'prov_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "districts" */
export type Districts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  prov_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "districts" */
export enum Districts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  ProvId = 'prov_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "fund" */
export type Fund = {
  __typename?: 'fund';
  active?: Maybe<Scalars['Boolean']>;
  balance?: Maybe<Scalars['numeric']>;
  budget: Scalars['numeric'];
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  fund_contracts: Array<Fund_Contract>;
  /** An aggregate relationship */
  fund_contracts_aggregate: Fund_Contract_Aggregate;
  /** An object relationship */
  fund_src: Fund_Src;
  fund_src_id: Scalars['String'];
  id: Scalars['uuid'];
  start_date?: Maybe<Scalars['date']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "fund" */
export type FundFund_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


/** columns and relationships of "fund" */
export type FundFund_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};

/** aggregated selection of "fund" */
export type Fund_Aggregate = {
  __typename?: 'fund_aggregate';
  aggregate?: Maybe<Fund_Aggregate_Fields>;
  nodes: Array<Fund>;
};

/** aggregate fields of "fund" */
export type Fund_Aggregate_Fields = {
  __typename?: 'fund_aggregate_fields';
  avg?: Maybe<Fund_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fund_Max_Fields>;
  min?: Maybe<Fund_Min_Fields>;
  stddev?: Maybe<Fund_Stddev_Fields>;
  stddev_pop?: Maybe<Fund_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fund_Stddev_Samp_Fields>;
  sum?: Maybe<Fund_Sum_Fields>;
  var_pop?: Maybe<Fund_Var_Pop_Fields>;
  var_samp?: Maybe<Fund_Var_Samp_Fields>;
  variance?: Maybe<Fund_Variance_Fields>;
};


/** aggregate fields of "fund" */
export type Fund_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fund_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fund" */
export type Fund_Aggregate_Order_By = {
  avg?: InputMaybe<Fund_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fund_Max_Order_By>;
  min?: InputMaybe<Fund_Min_Order_By>;
  stddev?: InputMaybe<Fund_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fund_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fund_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fund_Sum_Order_By>;
  var_pop?: InputMaybe<Fund_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fund_Var_Samp_Order_By>;
  variance?: InputMaybe<Fund_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fund" */
export type Fund_Arr_Rel_Insert_Input = {
  data: Array<Fund_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_On_Conflict>;
};

/** aggregate avg on columns */
export type Fund_Avg_Fields = {
  __typename?: 'fund_avg_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fund" */
export type Fund_Avg_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fund". All fields are combined with a logical 'AND'. */
export type Fund_Bool_Exp = {
  _and?: InputMaybe<Array<Fund_Bool_Exp>>;
  _not?: InputMaybe<Fund_Bool_Exp>;
  _or?: InputMaybe<Array<Fund_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  balance?: InputMaybe<Numeric_Comparison_Exp>;
  budget?: InputMaybe<Numeric_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  fund_contracts?: InputMaybe<Fund_Contract_Bool_Exp>;
  fund_src?: InputMaybe<Fund_Src_Bool_Exp>;
  fund_src_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fund" */
export enum Fund_Constraint {
  /** unique or primary key constraint */
  FundPkey = 'fund_pkey'
}

/** columns and relationships of "fund_contract" */
export type Fund_Contract = {
  __typename?: 'fund_contract';
  active?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  bank: Bank;
  bank_id: Scalars['String'];
  budget: Scalars['numeric'];
  close_date?: Maybe<Scalars['date']>;
  closed?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  detail?: Maybe<Scalars['String']>;
  end_date: Scalars['date'];
  fees: Scalars['numeric'];
  /** An object relationship */
  fund: Fund;
  /** An array relationship */
  fund_contract_repayments: Array<Fund_Contract_Repayment>;
  /** An aggregate relationship */
  fund_contract_repayments_aggregate: Fund_Contract_Repayment_Aggregate;
  fund_id: Scalars['uuid'];
  id: Scalars['uuid'];
  interest: Scalars['numeric'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  /** cannot edit or modify when lock = true */
  lock?: Maybe<Scalars['Boolean']>;
  repayment?: Maybe<Scalars['numeric']>;
  start_date: Scalars['date'];
  title: Scalars['String'];
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "fund_contract" */
export type Fund_ContractFund_Contract_RepaymentsArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


/** columns and relationships of "fund_contract" */
export type Fund_ContractFund_Contract_Repayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


/** columns and relationships of "fund_contract" */
export type Fund_ContractLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** columns and relationships of "fund_contract" */
export type Fund_ContractLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "fund_contract" */
export type Fund_Contract_Aggregate = {
  __typename?: 'fund_contract_aggregate';
  aggregate?: Maybe<Fund_Contract_Aggregate_Fields>;
  nodes: Array<Fund_Contract>;
};

/** aggregate fields of "fund_contract" */
export type Fund_Contract_Aggregate_Fields = {
  __typename?: 'fund_contract_aggregate_fields';
  avg?: Maybe<Fund_Contract_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fund_Contract_Max_Fields>;
  min?: Maybe<Fund_Contract_Min_Fields>;
  stddev?: Maybe<Fund_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Fund_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fund_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Fund_Contract_Sum_Fields>;
  var_pop?: Maybe<Fund_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Fund_Contract_Var_Samp_Fields>;
  variance?: Maybe<Fund_Contract_Variance_Fields>;
};


/** aggregate fields of "fund_contract" */
export type Fund_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fund_contract" */
export type Fund_Contract_Aggregate_Order_By = {
  avg?: InputMaybe<Fund_Contract_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fund_Contract_Max_Order_By>;
  min?: InputMaybe<Fund_Contract_Min_Order_By>;
  stddev?: InputMaybe<Fund_Contract_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fund_Contract_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fund_Contract_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fund_Contract_Sum_Order_By>;
  var_pop?: InputMaybe<Fund_Contract_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fund_Contract_Var_Samp_Order_By>;
  variance?: InputMaybe<Fund_Contract_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fund_contract" */
export type Fund_Contract_Arr_Rel_Insert_Input = {
  data: Array<Fund_Contract_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_Contract_On_Conflict>;
};

/** aggregate avg on columns */
export type Fund_Contract_Avg_Fields = {
  __typename?: 'fund_contract_avg_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fund_contract" */
export type Fund_Contract_Avg_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fund_contract". All fields are combined with a logical 'AND'. */
export type Fund_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Fund_Contract_Bool_Exp>>;
  _not?: InputMaybe<Fund_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Fund_Contract_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  bank?: InputMaybe<Bank_Bool_Exp>;
  bank_id?: InputMaybe<String_Comparison_Exp>;
  budget?: InputMaybe<Numeric_Comparison_Exp>;
  close_date?: InputMaybe<Date_Comparison_Exp>;
  closed?: InputMaybe<Boolean_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  detail?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  fees?: InputMaybe<Numeric_Comparison_Exp>;
  fund?: InputMaybe<Fund_Bool_Exp>;
  fund_contract_repayments?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
  fund_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  interest?: InputMaybe<Numeric_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  lock?: InputMaybe<Boolean_Comparison_Exp>;
  repayment?: InputMaybe<Numeric_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fund_contract" */
export enum Fund_Contract_Constraint {
  /** unique or primary key constraint */
  FundContractPkey = 'fund_contract_pkey'
}

/** input type for incrementing numeric columns in table "fund_contract" */
export type Fund_Contract_Inc_Input = {
  budget?: InputMaybe<Scalars['numeric']>;
  fees?: InputMaybe<Scalars['numeric']>;
  interest?: InputMaybe<Scalars['numeric']>;
  repayment?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "fund_contract" */
export type Fund_Contract_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  bank?: InputMaybe<Bank_Obj_Rel_Insert_Input>;
  bank_id?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['numeric']>;
  close_date?: InputMaybe<Scalars['date']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  detail?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  fees?: InputMaybe<Scalars['numeric']>;
  fund?: InputMaybe<Fund_Obj_Rel_Insert_Input>;
  fund_contract_repayments?: InputMaybe<Fund_Contract_Repayment_Arr_Rel_Insert_Input>;
  fund_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  /** cannot edit or modify when lock = true */
  lock?: InputMaybe<Scalars['Boolean']>;
  repayment?: InputMaybe<Scalars['numeric']>;
  start_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Fund_Contract_Max_Fields = {
  __typename?: 'fund_contract_max_fields';
  bank_id?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['numeric']>;
  close_date?: Maybe<Scalars['date']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  detail?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  fees?: Maybe<Scalars['numeric']>;
  fund_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  repayment?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fund_contract" */
export type Fund_Contract_Max_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  fund_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fund_Contract_Min_Fields = {
  __typename?: 'fund_contract_min_fields';
  bank_id?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['numeric']>;
  close_date?: Maybe<Scalars['date']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  detail?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  fees?: Maybe<Scalars['numeric']>;
  fund_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  repayment?: Maybe<Scalars['numeric']>;
  start_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fund_contract" */
export type Fund_Contract_Min_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  fund_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fund_contract" */
export type Fund_Contract_Mutation_Response = {
  __typename?: 'fund_contract_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fund_Contract>;
};

/** input type for inserting object relation for remote table "fund_contract" */
export type Fund_Contract_Obj_Rel_Insert_Input = {
  data: Fund_Contract_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_Contract_On_Conflict>;
};

/** on_conflict condition type for table "fund_contract" */
export type Fund_Contract_On_Conflict = {
  constraint: Fund_Contract_Constraint;
  update_columns?: Array<Fund_Contract_Update_Column>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};

/** Ordering options when selecting data from "fund_contract". */
export type Fund_Contract_Order_By = {
  active?: InputMaybe<Order_By>;
  bank?: InputMaybe<Bank_Order_By>;
  bank_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  closed?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  fund?: InputMaybe<Fund_Order_By>;
  fund_contract_repayments_aggregate?: InputMaybe<Fund_Contract_Repayment_Aggregate_Order_By>;
  fund_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  lock?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fund_contract */
export type Fund_Contract_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "fund_contract_repayment" */
export type Fund_Contract_Repayment = {
  __typename?: 'fund_contract_repayment';
  amount: Scalars['numeric'];
  category_key?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  fee?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  fund_contract: Fund_Contract;
  fund_contract_id: Scalars['uuid'];
  id: Scalars['uuid'];
  interest?: Maybe<Scalars['numeric']>;
  meta_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  metum?: Maybe<Meta>;
  note?: Maybe<Scalars['String']>;
  on_date: Scalars['date'];
  title: Scalars['String'];
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "fund_contract_repayment" */
export type Fund_Contract_Repayment_Aggregate = {
  __typename?: 'fund_contract_repayment_aggregate';
  aggregate?: Maybe<Fund_Contract_Repayment_Aggregate_Fields>;
  nodes: Array<Fund_Contract_Repayment>;
};

/** aggregate fields of "fund_contract_repayment" */
export type Fund_Contract_Repayment_Aggregate_Fields = {
  __typename?: 'fund_contract_repayment_aggregate_fields';
  avg?: Maybe<Fund_Contract_Repayment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fund_Contract_Repayment_Max_Fields>;
  min?: Maybe<Fund_Contract_Repayment_Min_Fields>;
  stddev?: Maybe<Fund_Contract_Repayment_Stddev_Fields>;
  stddev_pop?: Maybe<Fund_Contract_Repayment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fund_Contract_Repayment_Stddev_Samp_Fields>;
  sum?: Maybe<Fund_Contract_Repayment_Sum_Fields>;
  var_pop?: Maybe<Fund_Contract_Repayment_Var_Pop_Fields>;
  var_samp?: Maybe<Fund_Contract_Repayment_Var_Samp_Fields>;
  variance?: Maybe<Fund_Contract_Repayment_Variance_Fields>;
};


/** aggregate fields of "fund_contract_repayment" */
export type Fund_Contract_Repayment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Aggregate_Order_By = {
  avg?: InputMaybe<Fund_Contract_Repayment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fund_Contract_Repayment_Max_Order_By>;
  min?: InputMaybe<Fund_Contract_Repayment_Min_Order_By>;
  stddev?: InputMaybe<Fund_Contract_Repayment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fund_Contract_Repayment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fund_Contract_Repayment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fund_Contract_Repayment_Sum_Order_By>;
  var_pop?: InputMaybe<Fund_Contract_Repayment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fund_Contract_Repayment_Var_Samp_Order_By>;
  variance?: InputMaybe<Fund_Contract_Repayment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Arr_Rel_Insert_Input = {
  data: Array<Fund_Contract_Repayment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_Contract_Repayment_On_Conflict>;
};

/** aggregate avg on columns */
export type Fund_Contract_Repayment_Avg_Fields = {
  __typename?: 'fund_contract_repayment_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fund_contract_repayment". All fields are combined with a logical 'AND'. */
export type Fund_Contract_Repayment_Bool_Exp = {
  _and?: InputMaybe<Array<Fund_Contract_Repayment_Bool_Exp>>;
  _not?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
  _or?: InputMaybe<Array<Fund_Contract_Repayment_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  category_key?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  fund_contract?: InputMaybe<Fund_Contract_Bool_Exp>;
  fund_contract_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  interest?: InputMaybe<Numeric_Comparison_Exp>;
  meta_id?: InputMaybe<Uuid_Comparison_Exp>;
  metum?: InputMaybe<Meta_Bool_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  on_date?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fund_contract_repayment" */
export enum Fund_Contract_Repayment_Constraint {
  /** unique or primary key constraint */
  FundContractRepaymentPkey = 'fund_contract_repayment_pkey'
}

/** input type for incrementing numeric columns in table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  fee?: InputMaybe<Scalars['numeric']>;
  interest?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  fee?: InputMaybe<Scalars['numeric']>;
  fund_contract?: InputMaybe<Fund_Contract_Obj_Rel_Insert_Input>;
  fund_contract_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  meta_id?: InputMaybe<Scalars['uuid']>;
  metum?: InputMaybe<Meta_Obj_Rel_Insert_Input>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Fund_Contract_Repayment_Max_Fields = {
  __typename?: 'fund_contract_repayment_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  fee?: Maybe<Scalars['numeric']>;
  fund_contract_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  meta_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  meta_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fund_Contract_Repayment_Min_Fields = {
  __typename?: 'fund_contract_repayment_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  fee?: Maybe<Scalars['numeric']>;
  fund_contract_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  meta_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  meta_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Mutation_Response = {
  __typename?: 'fund_contract_repayment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fund_Contract_Repayment>;
};

/** on_conflict condition type for table "fund_contract_repayment" */
export type Fund_Contract_Repayment_On_Conflict = {
  constraint: Fund_Contract_Repayment_Constraint;
  update_columns?: Array<Fund_Contract_Repayment_Update_Column>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};

/** Ordering options when selecting data from "fund_contract_repayment". */
export type Fund_Contract_Repayment_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  fund_contract?: InputMaybe<Fund_Contract_Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  meta_id?: InputMaybe<Order_By>;
  metum?: InputMaybe<Meta_Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fund_contract_repayment */
export type Fund_Contract_Repayment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fund_contract_repayment" */
export enum Fund_Contract_Repayment_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  FundContractId = 'fund_contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  MetaId = 'meta_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  Title = 'title',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  fee?: InputMaybe<Scalars['numeric']>;
  fund_contract_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  meta_id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Fund_Contract_Repayment_Stddev_Fields = {
  __typename?: 'fund_contract_repayment_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fund_Contract_Repayment_Stddev_Pop_Fields = {
  __typename?: 'fund_contract_repayment_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fund_Contract_Repayment_Stddev_Samp_Fields = {
  __typename?: 'fund_contract_repayment_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Fund_Contract_Repayment_Sum_Fields = {
  __typename?: 'fund_contract_repayment_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  fee?: Maybe<Scalars['numeric']>;
  interest?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** update columns of table "fund_contract_repayment" */
export enum Fund_Contract_Repayment_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  FundContractId = 'fund_contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  MetaId = 'meta_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  Title = 'title',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Fund_Contract_Repayment_Var_Pop_Fields = {
  __typename?: 'fund_contract_repayment_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fund_Contract_Repayment_Var_Samp_Fields = {
  __typename?: 'fund_contract_repayment_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fund_Contract_Repayment_Variance_Fields = {
  __typename?: 'fund_contract_repayment_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fund_contract_repayment" */
export type Fund_Contract_Repayment_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** select columns of table "fund_contract" */
export enum Fund_Contract_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  Closed = 'closed',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Fees = 'fees',
  /** column name */
  FundId = 'fund_id',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  Lock = 'lock',
  /** column name */
  Repayment = 'repayment',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "fund_contract" */
export type Fund_Contract_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  bank_id?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['numeric']>;
  close_date?: InputMaybe<Scalars['date']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  detail?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  fees?: InputMaybe<Scalars['numeric']>;
  fund_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  /** cannot edit or modify when lock = true */
  lock?: InputMaybe<Scalars['Boolean']>;
  repayment?: InputMaybe<Scalars['numeric']>;
  start_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Fund_Contract_Stddev_Fields = {
  __typename?: 'fund_contract_stddev_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fund_contract" */
export type Fund_Contract_Stddev_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fund_Contract_Stddev_Pop_Fields = {
  __typename?: 'fund_contract_stddev_pop_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fund_contract" */
export type Fund_Contract_Stddev_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fund_Contract_Stddev_Samp_Fields = {
  __typename?: 'fund_contract_stddev_samp_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fund_contract" */
export type Fund_Contract_Stddev_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Fund_Contract_Sum_Fields = {
  __typename?: 'fund_contract_sum_fields';
  budget?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  interest?: Maybe<Scalars['numeric']>;
  repayment?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "fund_contract" */
export type Fund_Contract_Sum_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** update columns of table "fund_contract" */
export enum Fund_Contract_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  Closed = 'closed',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Fees = 'fees',
  /** column name */
  FundId = 'fund_id',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  Lock = 'lock',
  /** column name */
  Repayment = 'repayment',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Fund_Contract_Var_Pop_Fields = {
  __typename?: 'fund_contract_var_pop_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fund_contract" */
export type Fund_Contract_Var_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fund_Contract_Var_Samp_Fields = {
  __typename?: 'fund_contract_var_samp_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fund_contract" */
export type Fund_Contract_Var_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fund_Contract_Variance_Fields = {
  __typename?: 'fund_contract_variance_fields';
  budget?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fund_contract" */
export type Fund_Contract_Variance_Order_By = {
  budget?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "fund" */
export type Fund_Inc_Input = {
  balance?: InputMaybe<Scalars['numeric']>;
  budget?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "fund" */
export type Fund_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['numeric']>;
  budget?: InputMaybe<Scalars['numeric']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  fund_contracts?: InputMaybe<Fund_Contract_Arr_Rel_Insert_Input>;
  fund_src?: InputMaybe<Fund_Src_Obj_Rel_Insert_Input>;
  fund_src_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Fund_Max_Fields = {
  __typename?: 'fund_max_fields';
  balance?: Maybe<Scalars['numeric']>;
  budget?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  fund_src_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fund" */
export type Fund_Max_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fund_src_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Fund_Min_Fields = {
  __typename?: 'fund_min_fields';
  balance?: Maybe<Scalars['numeric']>;
  budget?: Maybe<Scalars['numeric']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  fund_src_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fund" */
export type Fund_Min_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fund_src_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fund" */
export type Fund_Mutation_Response = {
  __typename?: 'fund_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fund>;
};

/** input type for inserting object relation for remote table "fund" */
export type Fund_Obj_Rel_Insert_Input = {
  data: Fund_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_On_Conflict>;
};

/** on_conflict condition type for table "fund" */
export type Fund_On_Conflict = {
  constraint: Fund_Constraint;
  update_columns?: Array<Fund_Update_Column>;
  where?: InputMaybe<Fund_Bool_Exp>;
};

/** Ordering options when selecting data from "fund". */
export type Fund_Order_By = {
  active?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  fund_contracts_aggregate?: InputMaybe<Fund_Contract_Aggregate_Order_By>;
  fund_src?: InputMaybe<Fund_Src_Order_By>;
  fund_src_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fund */
export type Fund_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fund" */
export enum Fund_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  Budget = 'budget',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  FundSrcId = 'fund_src_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "fund" */
export type Fund_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  balance?: InputMaybe<Scalars['numeric']>;
  budget?: InputMaybe<Scalars['numeric']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  fund_src_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** The fund source table */
export type Fund_Src = {
  __typename?: 'fund_src';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamp'];
  en?: Maybe<Scalars['String']>;
  /** An array relationship */
  funds: Array<Fund>;
  /** An aggregate relationship */
  funds_aggregate: Fund_Aggregate;
  id: Scalars['String'];
  /** The fund source name */
  lo: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** The fund source table */
export type Fund_SrcFundsArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};


/** The fund source table */
export type Fund_SrcFunds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};

/** aggregated selection of "fund_src" */
export type Fund_Src_Aggregate = {
  __typename?: 'fund_src_aggregate';
  aggregate?: Maybe<Fund_Src_Aggregate_Fields>;
  nodes: Array<Fund_Src>;
};

/** aggregate fields of "fund_src" */
export type Fund_Src_Aggregate_Fields = {
  __typename?: 'fund_src_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Fund_Src_Max_Fields>;
  min?: Maybe<Fund_Src_Min_Fields>;
};


/** aggregate fields of "fund_src" */
export type Fund_Src_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fund_Src_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fund_src". All fields are combined with a logical 'AND'. */
export type Fund_Src_Bool_Exp = {
  _and?: InputMaybe<Array<Fund_Src_Bool_Exp>>;
  _not?: InputMaybe<Fund_Src_Bool_Exp>;
  _or?: InputMaybe<Array<Fund_Src_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  funds?: InputMaybe<Fund_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fund_src" */
export enum Fund_Src_Constraint {
  /** unique or primary key constraint */
  FundSrcPkey = 'fund_src_pkey'
}

/** input type for inserting data into table "fund_src" */
export type Fund_Src_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  funds?: InputMaybe<Fund_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  /** The fund source name */
  lo?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Fund_Src_Max_Fields = {
  __typename?: 'fund_src_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  /** The fund source name */
  lo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Fund_Src_Min_Fields = {
  __typename?: 'fund_src_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  /** The fund source name */
  lo?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "fund_src" */
export type Fund_Src_Mutation_Response = {
  __typename?: 'fund_src_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fund_Src>;
};

/** input type for inserting object relation for remote table "fund_src" */
export type Fund_Src_Obj_Rel_Insert_Input = {
  data: Fund_Src_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fund_Src_On_Conflict>;
};

/** on_conflict condition type for table "fund_src" */
export type Fund_Src_On_Conflict = {
  constraint: Fund_Src_Constraint;
  update_columns?: Array<Fund_Src_Update_Column>;
  where?: InputMaybe<Fund_Src_Bool_Exp>;
};

/** Ordering options when selecting data from "fund_src". */
export type Fund_Src_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  funds_aggregate?: InputMaybe<Fund_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fund_src */
export type Fund_Src_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "fund_src" */
export enum Fund_Src_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Logo = 'logo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "fund_src" */
export type Fund_Src_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  /** The fund source name */
  lo?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "fund_src" */
export enum Fund_Src_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Logo = 'logo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Fund_Stddev_Fields = {
  __typename?: 'fund_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fund" */
export type Fund_Stddev_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Fund_Stddev_Pop_Fields = {
  __typename?: 'fund_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fund" */
export type Fund_Stddev_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Fund_Stddev_Samp_Fields = {
  __typename?: 'fund_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fund" */
export type Fund_Stddev_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Fund_Sum_Fields = {
  __typename?: 'fund_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
  budget?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "fund" */
export type Fund_Sum_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** update columns of table "fund" */
export enum Fund_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Balance = 'balance',
  /** column name */
  Budget = 'budget',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  FundSrcId = 'fund_src_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Fund_Var_Pop_Fields = {
  __typename?: 'fund_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fund" */
export type Fund_Var_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Fund_Var_Samp_Fields = {
  __typename?: 'fund_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fund" */
export type Fund_Var_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Fund_Variance_Fields = {
  __typename?: 'fund_variance_fields';
  balance?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fund" */
export type Fund_Variance_Order_By = {
  balance?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "loan" */
export type Loan = {
  __typename?: 'loan';
  account_number: Scalars['String'];
  amount: Scalars['numeric'];
  /** An object relationship */
  bank_branch: Bank_Branch;
  bank_branch_id: Scalars['uuid'];
  /** An object relationship */
  busine?: Maybe<Busines>;
  busines_id?: Maybe<Scalars['uuid']>;
  close_date?: Maybe<Scalars['date']>;
  closed?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  collateral: Scalars['String'];
  contract_date: Scalars['date'];
  contract_end: Scalars['date'];
  contract_no: Scalars['String'];
  covid_affected?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  fund_contract?: Maybe<Fund_Contract>;
  fund_contract_id?: Maybe<Scalars['uuid']>;
  grade?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  inital_free_cost?: Maybe<Scalars['date']>;
  interest: Scalars['numeric'];
  /** ໄລຍະປອດທຶນ */
  is_free_cost?: Maybe<Scalars['Boolean']>;
  last_free_cost?: Maybe<Scalars['date']>;
  loan_amount_approved: Scalars['numeric'];
  /** An object relationship */
  loan_collateral: Loan_Collateral;
  loan_collateral_id: Scalars['String'];
  /** An array relationship */
  loan_disburseds: Array<Loan_Disbursed>;
  /** An aggregate relationship */
  loan_disburseds_aggregate: Loan_Disbursed_Aggregate;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees: Scalars['numeric'];
  /** An object relationship */
  loan_purpose: Loan_Purpose;
  loan_purpose_id: Scalars['String'];
  /** An array relationship */
  loan_repayments: Array<Loan_Repayment>;
  /** An aggregate relationship */
  loan_repayments_aggregate: Loan_Repayment_Aggregate;
  /** An object relationship */
  loan_status: Loan_Status;
  loan_status_id: Scalars['String'];
  /** An object relationship */
  loan_type: Loan_Type;
  loan_type_id: Scalars['String'];
  /** An object relationship */
  loan_window: Loan_Window;
  loan_window_id: Scalars['String'];
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose: Scalars['String'];
  remark?: Maybe<Scalars['String']>;
  repayment?: Maybe<Scalars['numeric']>;
  responsible_staff?: Maybe<Scalars['String']>;
  skip_no: Scalars['Int'];
  staff?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  total_of_collateral: Scalars['numeric'];
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "loan" */
export type LoanLoan_DisbursedsArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


/** columns and relationships of "loan" */
export type LoanLoan_Disburseds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


/** columns and relationships of "loan" */
export type LoanLoan_RepaymentsArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};


/** columns and relationships of "loan" */
export type LoanLoan_Repayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};

/** aggregated selection of "loan" */
export type Loan_Aggregate = {
  __typename?: 'loan_aggregate';
  aggregate?: Maybe<Loan_Aggregate_Fields>;
  nodes: Array<Loan>;
};

/** aggregate fields of "loan" */
export type Loan_Aggregate_Fields = {
  __typename?: 'loan_aggregate_fields';
  avg?: Maybe<Loan_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Loan_Max_Fields>;
  min?: Maybe<Loan_Min_Fields>;
  stddev?: Maybe<Loan_Stddev_Fields>;
  stddev_pop?: Maybe<Loan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Loan_Stddev_Samp_Fields>;
  sum?: Maybe<Loan_Sum_Fields>;
  var_pop?: Maybe<Loan_Var_Pop_Fields>;
  var_samp?: Maybe<Loan_Var_Samp_Fields>;
  variance?: Maybe<Loan_Variance_Fields>;
};


/** aggregate fields of "loan" */
export type Loan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "loan" */
export type Loan_Aggregate_Order_By = {
  avg?: InputMaybe<Loan_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Loan_Max_Order_By>;
  min?: InputMaybe<Loan_Min_Order_By>;
  stddev?: InputMaybe<Loan_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Loan_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Loan_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Loan_Sum_Order_By>;
  var_pop?: InputMaybe<Loan_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Loan_Var_Samp_Order_By>;
  variance?: InputMaybe<Loan_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "loan" */
export type Loan_Arr_Rel_Insert_Input = {
  data: Array<Loan_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_On_Conflict>;
};

/** aggregate avg on columns */
export type Loan_Avg_Fields = {
  __typename?: 'loan_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "loan" */
export type Loan_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "loan". All fields are combined with a logical 'AND'. */
export type Loan_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Bool_Exp>>;
  _not?: InputMaybe<Loan_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Bool_Exp>>;
  account_number?: InputMaybe<String_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  bank_branch?: InputMaybe<Bank_Branch_Bool_Exp>;
  bank_branch_id?: InputMaybe<Uuid_Comparison_Exp>;
  busine?: InputMaybe<Busines_Bool_Exp>;
  busines_id?: InputMaybe<Uuid_Comparison_Exp>;
  close_date?: InputMaybe<Date_Comparison_Exp>;
  closed?: InputMaybe<Boolean_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  collateral?: InputMaybe<String_Comparison_Exp>;
  contract_date?: InputMaybe<Date_Comparison_Exp>;
  contract_end?: InputMaybe<Date_Comparison_Exp>;
  contract_no?: InputMaybe<String_Comparison_Exp>;
  covid_affected?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fund_contract?: InputMaybe<Fund_Contract_Bool_Exp>;
  fund_contract_id?: InputMaybe<Uuid_Comparison_Exp>;
  grade?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inital_free_cost?: InputMaybe<Date_Comparison_Exp>;
  interest?: InputMaybe<Numeric_Comparison_Exp>;
  is_free_cost?: InputMaybe<Boolean_Comparison_Exp>;
  last_free_cost?: InputMaybe<Date_Comparison_Exp>;
  loan_amount_approved?: InputMaybe<Numeric_Comparison_Exp>;
  loan_collateral?: InputMaybe<Loan_Collateral_Bool_Exp>;
  loan_collateral_id?: InputMaybe<String_Comparison_Exp>;
  loan_disburseds?: InputMaybe<Loan_Disbursed_Bool_Exp>;
  loan_fees?: InputMaybe<Numeric_Comparison_Exp>;
  loan_purpose?: InputMaybe<Loan_Purpose_Bool_Exp>;
  loan_purpose_id?: InputMaybe<String_Comparison_Exp>;
  loan_repayments?: InputMaybe<Loan_Repayment_Bool_Exp>;
  loan_status?: InputMaybe<Loan_Status_Bool_Exp>;
  loan_status_id?: InputMaybe<String_Comparison_Exp>;
  loan_type?: InputMaybe<Loan_Type_Bool_Exp>;
  loan_type_id?: InputMaybe<String_Comparison_Exp>;
  loan_window?: InputMaybe<Loan_Window_Bool_Exp>;
  loan_window_id?: InputMaybe<String_Comparison_Exp>;
  purpose?: InputMaybe<String_Comparison_Exp>;
  remark?: InputMaybe<String_Comparison_Exp>;
  repayment?: InputMaybe<Numeric_Comparison_Exp>;
  responsible_staff?: InputMaybe<String_Comparison_Exp>;
  skip_no?: InputMaybe<Int_Comparison_Exp>;
  staff?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  total_of_collateral?: InputMaybe<Numeric_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** ປະເພດຂອງຫຼັກຊັບ(ຈັດປະເພດ)(ດິນ, ອາຄານ, ທີ່ດິນ + ອາຄານ, ພາຫະນະ, ເງິນຝາກ, ແລະອື່ນໆ) */
export type Loan_Collateral = {
  __typename?: 'loan_collateral';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ປະເພດຂອງຫຼັກຊັບ(ຈັດປະເພດ)(ດິນ, ອາຄານ, ທີ່ດິນ + ອາຄານ, ພາຫະນະ, ເງິນຝາກ, ແລະອື່ນໆ) */
export type Loan_CollateralLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** ປະເພດຂອງຫຼັກຊັບ(ຈັດປະເພດ)(ດິນ, ອາຄານ, ທີ່ດິນ + ອາຄານ, ພາຫະນະ, ເງິນຝາກ, ແລະອື່ນໆ) */
export type Loan_CollateralLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "loan_collateral" */
export type Loan_Collateral_Aggregate = {
  __typename?: 'loan_collateral_aggregate';
  aggregate?: Maybe<Loan_Collateral_Aggregate_Fields>;
  nodes: Array<Loan_Collateral>;
};

/** aggregate fields of "loan_collateral" */
export type Loan_Collateral_Aggregate_Fields = {
  __typename?: 'loan_collateral_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Loan_Collateral_Max_Fields>;
  min?: Maybe<Loan_Collateral_Min_Fields>;
};


/** aggregate fields of "loan_collateral" */
export type Loan_Collateral_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Collateral_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "loan_collateral". All fields are combined with a logical 'AND'. */
export type Loan_Collateral_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Collateral_Bool_Exp>>;
  _not?: InputMaybe<Loan_Collateral_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Collateral_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_collateral" */
export enum Loan_Collateral_Constraint {
  /** unique or primary key constraint */
  LoanCollateralPkey = 'loan_collateral_pkey'
}

/** input type for inserting data into table "loan_collateral" */
export type Loan_Collateral_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Collateral_Max_Fields = {
  __typename?: 'loan_collateral_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Loan_Collateral_Min_Fields = {
  __typename?: 'loan_collateral_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "loan_collateral" */
export type Loan_Collateral_Mutation_Response = {
  __typename?: 'loan_collateral_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Collateral>;
};

/** input type for inserting object relation for remote table "loan_collateral" */
export type Loan_Collateral_Obj_Rel_Insert_Input = {
  data: Loan_Collateral_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Collateral_On_Conflict>;
};

/** on_conflict condition type for table "loan_collateral" */
export type Loan_Collateral_On_Conflict = {
  constraint: Loan_Collateral_Constraint;
  update_columns?: Array<Loan_Collateral_Update_Column>;
  where?: InputMaybe<Loan_Collateral_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_collateral". */
export type Loan_Collateral_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_collateral */
export type Loan_Collateral_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "loan_collateral" */
export enum Loan_Collateral_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_collateral" */
export type Loan_Collateral_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "loan_collateral" */
export enum Loan_Collateral_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** unique or primary key constraints on table "loan" */
export enum Loan_Constraint {
  /** unique or primary key constraint */
  LoanPkey = 'loan_pkey'
}

/** columns and relationships of "loan_disbursed" */
export type Loan_Disbursed = {
  __typename?: 'loan_disbursed';
  amount: Scalars['numeric'];
  category_key?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  fee: Scalars['numeric'];
  id: Scalars['uuid'];
  /** An object relationship */
  loan: Loan;
  loan_id: Scalars['uuid'];
  note?: Maybe<Scalars['String']>;
  on_date: Scalars['date'];
  parent_id?: Maybe<Scalars['uuid']>;
  responsible_staff?: Maybe<Scalars['String']>;
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "loan_disbursed" */
export type Loan_Disbursed_Aggregate = {
  __typename?: 'loan_disbursed_aggregate';
  aggregate?: Maybe<Loan_Disbursed_Aggregate_Fields>;
  nodes: Array<Loan_Disbursed>;
};

/** aggregate fields of "loan_disbursed" */
export type Loan_Disbursed_Aggregate_Fields = {
  __typename?: 'loan_disbursed_aggregate_fields';
  avg?: Maybe<Loan_Disbursed_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Loan_Disbursed_Max_Fields>;
  min?: Maybe<Loan_Disbursed_Min_Fields>;
  stddev?: Maybe<Loan_Disbursed_Stddev_Fields>;
  stddev_pop?: Maybe<Loan_Disbursed_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Loan_Disbursed_Stddev_Samp_Fields>;
  sum?: Maybe<Loan_Disbursed_Sum_Fields>;
  var_pop?: Maybe<Loan_Disbursed_Var_Pop_Fields>;
  var_samp?: Maybe<Loan_Disbursed_Var_Samp_Fields>;
  variance?: Maybe<Loan_Disbursed_Variance_Fields>;
};


/** aggregate fields of "loan_disbursed" */
export type Loan_Disbursed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "loan_disbursed" */
export type Loan_Disbursed_Aggregate_Order_By = {
  avg?: InputMaybe<Loan_Disbursed_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Loan_Disbursed_Max_Order_By>;
  min?: InputMaybe<Loan_Disbursed_Min_Order_By>;
  stddev?: InputMaybe<Loan_Disbursed_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Loan_Disbursed_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Loan_Disbursed_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Loan_Disbursed_Sum_Order_By>;
  var_pop?: InputMaybe<Loan_Disbursed_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Loan_Disbursed_Var_Samp_Order_By>;
  variance?: InputMaybe<Loan_Disbursed_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "loan_disbursed" */
export type Loan_Disbursed_Arr_Rel_Insert_Input = {
  data: Array<Loan_Disbursed_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Disbursed_On_Conflict>;
};

/** aggregate avg on columns */
export type Loan_Disbursed_Avg_Fields = {
  __typename?: 'loan_disbursed_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "loan_disbursed". All fields are combined with a logical 'AND'. */
export type Loan_Disbursed_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Disbursed_Bool_Exp>>;
  _not?: InputMaybe<Loan_Disbursed_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Disbursed_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  category_key?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  loan?: InputMaybe<Loan_Bool_Exp>;
  loan_id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  on_date?: InputMaybe<Date_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
  responsible_staff?: InputMaybe<String_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_disbursed" */
export enum Loan_Disbursed_Constraint {
  /** unique or primary key constraint */
  LoanDisbursedPkey = 'loan_disbursed_pkey'
}

/** input type for incrementing numeric columns in table "loan_disbursed" */
export type Loan_Disbursed_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  fee?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "loan_disbursed" */
export type Loan_Disbursed_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fee?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  loan?: InputMaybe<Loan_Obj_Rel_Insert_Input>;
  loan_id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  parent_id?: InputMaybe<Scalars['uuid']>;
  responsible_staff?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Disbursed_Max_Fields = {
  __typename?: 'loan_disbursed_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fee?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  loan_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  parent_id?: Maybe<Scalars['uuid']>;
  responsible_staff?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Loan_Disbursed_Min_Fields = {
  __typename?: 'loan_disbursed_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fee?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  loan_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  parent_id?: Maybe<Scalars['uuid']>;
  responsible_staff?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "loan_disbursed" */
export type Loan_Disbursed_Mutation_Response = {
  __typename?: 'loan_disbursed_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Disbursed>;
};

/** on_conflict condition type for table "loan_disbursed" */
export type Loan_Disbursed_On_Conflict = {
  constraint: Loan_Disbursed_Constraint;
  update_columns?: Array<Loan_Disbursed_Update_Column>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_disbursed". */
export type Loan_Disbursed_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  loan?: InputMaybe<Loan_Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_disbursed */
export type Loan_Disbursed_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "loan_disbursed" */
export enum Loan_Disbursed_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  Id = 'id',
  /** column name */
  LoanId = 'loan_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  ResponsibleStaff = 'responsible_staff',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_disbursed" */
export type Loan_Disbursed_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fee?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  loan_id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  parent_id?: InputMaybe<Scalars['uuid']>;
  responsible_staff?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Loan_Disbursed_Stddev_Fields = {
  __typename?: 'loan_disbursed_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Loan_Disbursed_Stddev_Pop_Fields = {
  __typename?: 'loan_disbursed_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Loan_Disbursed_Stddev_Samp_Fields = {
  __typename?: 'loan_disbursed_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Loan_Disbursed_Sum_Fields = {
  __typename?: 'loan_disbursed_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  fee?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** update columns of table "loan_disbursed" */
export enum Loan_Disbursed_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  Id = 'id',
  /** column name */
  LoanId = 'loan_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  ResponsibleStaff = 'responsible_staff',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Loan_Disbursed_Var_Pop_Fields = {
  __typename?: 'loan_disbursed_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Loan_Disbursed_Var_Samp_Fields = {
  __typename?: 'loan_disbursed_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Loan_Disbursed_Variance_Fields = {
  __typename?: 'loan_disbursed_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "loan_disbursed" */
export type Loan_Disbursed_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "loan" */
export type Loan_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  interest?: InputMaybe<Scalars['numeric']>;
  loan_amount_approved?: InputMaybe<Scalars['numeric']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Scalars['numeric']>;
  repayment?: InputMaybe<Scalars['numeric']>;
  skip_no?: InputMaybe<Scalars['Int']>;
  staff?: InputMaybe<Scalars['Int']>;
  total_of_collateral?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "loan" */
export type Loan_Insert_Input = {
  account_number?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['numeric']>;
  bank_branch?: InputMaybe<Bank_Branch_Obj_Rel_Insert_Input>;
  bank_branch_id?: InputMaybe<Scalars['uuid']>;
  busine?: InputMaybe<Busines_Obj_Rel_Insert_Input>;
  busines_id?: InputMaybe<Scalars['uuid']>;
  close_date?: InputMaybe<Scalars['date']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  collateral?: InputMaybe<Scalars['String']>;
  contract_date?: InputMaybe<Scalars['date']>;
  contract_end?: InputMaybe<Scalars['date']>;
  contract_no?: InputMaybe<Scalars['String']>;
  covid_affected?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fund_contract?: InputMaybe<Fund_Contract_Obj_Rel_Insert_Input>;
  fund_contract_id?: InputMaybe<Scalars['uuid']>;
  grade?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inital_free_cost?: InputMaybe<Scalars['date']>;
  interest?: InputMaybe<Scalars['numeric']>;
  /** ໄລຍະປອດທຶນ */
  is_free_cost?: InputMaybe<Scalars['Boolean']>;
  last_free_cost?: InputMaybe<Scalars['date']>;
  loan_amount_approved?: InputMaybe<Scalars['numeric']>;
  loan_collateral?: InputMaybe<Loan_Collateral_Obj_Rel_Insert_Input>;
  loan_collateral_id?: InputMaybe<Scalars['String']>;
  loan_disburseds?: InputMaybe<Loan_Disbursed_Arr_Rel_Insert_Input>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Scalars['numeric']>;
  loan_purpose?: InputMaybe<Loan_Purpose_Obj_Rel_Insert_Input>;
  loan_purpose_id?: InputMaybe<Scalars['String']>;
  loan_repayments?: InputMaybe<Loan_Repayment_Arr_Rel_Insert_Input>;
  loan_status?: InputMaybe<Loan_Status_Obj_Rel_Insert_Input>;
  loan_status_id?: InputMaybe<Scalars['String']>;
  loan_type?: InputMaybe<Loan_Type_Obj_Rel_Insert_Input>;
  loan_type_id?: InputMaybe<Scalars['String']>;
  loan_window?: InputMaybe<Loan_Window_Obj_Rel_Insert_Input>;
  loan_window_id?: InputMaybe<Scalars['String']>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: InputMaybe<Scalars['String']>;
  remark?: InputMaybe<Scalars['String']>;
  repayment?: InputMaybe<Scalars['numeric']>;
  responsible_staff?: InputMaybe<Scalars['String']>;
  skip_no?: InputMaybe<Scalars['Int']>;
  staff?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  total_of_collateral?: InputMaybe<Scalars['numeric']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Max_Fields = {
  __typename?: 'loan_max_fields';
  account_number?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  bank_branch_id?: Maybe<Scalars['uuid']>;
  busines_id?: Maybe<Scalars['uuid']>;
  close_date?: Maybe<Scalars['date']>;
  code?: Maybe<Scalars['String']>;
  collateral?: Maybe<Scalars['String']>;
  contract_date?: Maybe<Scalars['date']>;
  contract_end?: Maybe<Scalars['date']>;
  contract_no?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fund_contract_id?: Maybe<Scalars['uuid']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inital_free_cost?: Maybe<Scalars['date']>;
  interest?: Maybe<Scalars['numeric']>;
  last_free_cost?: Maybe<Scalars['date']>;
  loan_amount_approved?: Maybe<Scalars['numeric']>;
  loan_collateral_id?: Maybe<Scalars['String']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['numeric']>;
  loan_purpose_id?: Maybe<Scalars['String']>;
  loan_status_id?: Maybe<Scalars['String']>;
  loan_type_id?: Maybe<Scalars['String']>;
  loan_window_id?: Maybe<Scalars['String']>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  repayment?: Maybe<Scalars['numeric']>;
  responsible_staff?: Maybe<Scalars['String']>;
  skip_no?: Maybe<Scalars['Int']>;
  staff?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  total_of_collateral?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "loan" */
export type Loan_Max_Order_By = {
  account_number?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  busines_id?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  contract_date?: InputMaybe<Order_By>;
  contract_end?: InputMaybe<Order_By>;
  contract_no?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inital_free_cost?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  last_free_cost?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  loan_collateral_id?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  loan_purpose_id?: InputMaybe<Order_By>;
  loan_status_id?: InputMaybe<Order_By>;
  loan_type_id?: InputMaybe<Order_By>;
  loan_window_id?: InputMaybe<Order_By>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Loan_Min_Fields = {
  __typename?: 'loan_min_fields';
  account_number?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['numeric']>;
  bank_branch_id?: Maybe<Scalars['uuid']>;
  busines_id?: Maybe<Scalars['uuid']>;
  close_date?: Maybe<Scalars['date']>;
  code?: Maybe<Scalars['String']>;
  collateral?: Maybe<Scalars['String']>;
  contract_date?: Maybe<Scalars['date']>;
  contract_end?: Maybe<Scalars['date']>;
  contract_no?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fund_contract_id?: Maybe<Scalars['uuid']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  inital_free_cost?: Maybe<Scalars['date']>;
  interest?: Maybe<Scalars['numeric']>;
  last_free_cost?: Maybe<Scalars['date']>;
  loan_amount_approved?: Maybe<Scalars['numeric']>;
  loan_collateral_id?: Maybe<Scalars['String']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['numeric']>;
  loan_purpose_id?: Maybe<Scalars['String']>;
  loan_status_id?: Maybe<Scalars['String']>;
  loan_type_id?: Maybe<Scalars['String']>;
  loan_window_id?: Maybe<Scalars['String']>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  repayment?: Maybe<Scalars['numeric']>;
  responsible_staff?: Maybe<Scalars['String']>;
  skip_no?: Maybe<Scalars['Int']>;
  staff?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  total_of_collateral?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "loan" */
export type Loan_Min_Order_By = {
  account_number?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  busines_id?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  contract_date?: InputMaybe<Order_By>;
  contract_end?: InputMaybe<Order_By>;
  contract_no?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inital_free_cost?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  last_free_cost?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  loan_collateral_id?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  loan_purpose_id?: InputMaybe<Order_By>;
  loan_status_id?: InputMaybe<Order_By>;
  loan_type_id?: InputMaybe<Order_By>;
  loan_window_id?: InputMaybe<Order_By>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "loan" */
export type Loan_Mutation_Response = {
  __typename?: 'loan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan>;
};

/** input type for inserting object relation for remote table "loan" */
export type Loan_Obj_Rel_Insert_Input = {
  data: Loan_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_On_Conflict>;
};

/** on_conflict condition type for table "loan" */
export type Loan_On_Conflict = {
  constraint: Loan_Constraint;
  update_columns?: Array<Loan_Update_Column>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** Ordering options when selecting data from "loan". */
export type Loan_Order_By = {
  account_number?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  bank_branch?: InputMaybe<Bank_Branch_Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  busine?: InputMaybe<Busines_Order_By>;
  busines_id?: InputMaybe<Order_By>;
  close_date?: InputMaybe<Order_By>;
  closed?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  collateral?: InputMaybe<Order_By>;
  contract_date?: InputMaybe<Order_By>;
  contract_end?: InputMaybe<Order_By>;
  contract_no?: InputMaybe<Order_By>;
  covid_affected?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fund_contract?: InputMaybe<Fund_Contract_Order_By>;
  fund_contract_id?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inital_free_cost?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  is_free_cost?: InputMaybe<Order_By>;
  last_free_cost?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  loan_collateral?: InputMaybe<Loan_Collateral_Order_By>;
  loan_collateral_id?: InputMaybe<Order_By>;
  loan_disburseds_aggregate?: InputMaybe<Loan_Disbursed_Aggregate_Order_By>;
  loan_fees?: InputMaybe<Order_By>;
  loan_purpose?: InputMaybe<Loan_Purpose_Order_By>;
  loan_purpose_id?: InputMaybe<Order_By>;
  loan_repayments_aggregate?: InputMaybe<Loan_Repayment_Aggregate_Order_By>;
  loan_status?: InputMaybe<Loan_Status_Order_By>;
  loan_status_id?: InputMaybe<Order_By>;
  loan_type?: InputMaybe<Loan_Type_Order_By>;
  loan_type_id?: InputMaybe<Order_By>;
  loan_window?: InputMaybe<Loan_Window_Order_By>;
  loan_window_id?: InputMaybe<Order_By>;
  purpose?: InputMaybe<Order_By>;
  remark?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  responsible_staff?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan */
export type Loan_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** ເປົ້າໝາຍເງິນກູ້(ແຍກ​ປະ​ເພດ) [ຊື້ສິນຄ້າເພື່ອຂາຍ, ຊື້ເຄື່ອງຈັກ] */
export type Loan_Purpose = {
  __typename?: 'loan_purpose';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ເປົ້າໝາຍເງິນກູ້(ແຍກ​ປະ​ເພດ) [ຊື້ສິນຄ້າເພື່ອຂາຍ, ຊື້ເຄື່ອງຈັກ] */
export type Loan_PurposeLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** ເປົ້າໝາຍເງິນກູ້(ແຍກ​ປະ​ເພດ) [ຊື້ສິນຄ້າເພື່ອຂາຍ, ຊື້ເຄື່ອງຈັກ] */
export type Loan_PurposeLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "loan_purpose" */
export type Loan_Purpose_Aggregate = {
  __typename?: 'loan_purpose_aggregate';
  aggregate?: Maybe<Loan_Purpose_Aggregate_Fields>;
  nodes: Array<Loan_Purpose>;
};

/** aggregate fields of "loan_purpose" */
export type Loan_Purpose_Aggregate_Fields = {
  __typename?: 'loan_purpose_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Loan_Purpose_Max_Fields>;
  min?: Maybe<Loan_Purpose_Min_Fields>;
};


/** aggregate fields of "loan_purpose" */
export type Loan_Purpose_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Purpose_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "loan_purpose". All fields are combined with a logical 'AND'. */
export type Loan_Purpose_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Purpose_Bool_Exp>>;
  _not?: InputMaybe<Loan_Purpose_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Purpose_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_purpose" */
export enum Loan_Purpose_Constraint {
  /** unique or primary key constraint */
  LoanPurposePkey = 'loan_purpose_pkey'
}

/** input type for inserting data into table "loan_purpose" */
export type Loan_Purpose_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Purpose_Max_Fields = {
  __typename?: 'loan_purpose_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Loan_Purpose_Min_Fields = {
  __typename?: 'loan_purpose_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "loan_purpose" */
export type Loan_Purpose_Mutation_Response = {
  __typename?: 'loan_purpose_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Purpose>;
};

/** input type for inserting object relation for remote table "loan_purpose" */
export type Loan_Purpose_Obj_Rel_Insert_Input = {
  data: Loan_Purpose_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Purpose_On_Conflict>;
};

/** on_conflict condition type for table "loan_purpose" */
export type Loan_Purpose_On_Conflict = {
  constraint: Loan_Purpose_Constraint;
  update_columns?: Array<Loan_Purpose_Update_Column>;
  where?: InputMaybe<Loan_Purpose_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_purpose". */
export type Loan_Purpose_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_purpose */
export type Loan_Purpose_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "loan_purpose" */
export enum Loan_Purpose_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_purpose" */
export type Loan_Purpose_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "loan_purpose" */
export enum Loan_Purpose_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "loan_repayment" */
export type Loan_Repayment = {
  __typename?: 'loan_repayment';
  amount: Scalars['numeric'];
  category_key?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamp'];
  fee?: Maybe<Scalars['numeric']>;
  id: Scalars['uuid'];
  interest: Scalars['numeric'];
  /** An object relationship */
  loan: Loan;
  loan_id: Scalars['uuid'];
  note?: Maybe<Scalars['String']>;
  on_date: Scalars['date'];
  parent_id?: Maybe<Scalars['uuid']>;
  trash?: Maybe<Scalars['Boolean']>;
  updated_at: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "loan_repayment" */
export type Loan_Repayment_Aggregate = {
  __typename?: 'loan_repayment_aggregate';
  aggregate?: Maybe<Loan_Repayment_Aggregate_Fields>;
  nodes: Array<Loan_Repayment>;
};

/** aggregate fields of "loan_repayment" */
export type Loan_Repayment_Aggregate_Fields = {
  __typename?: 'loan_repayment_aggregate_fields';
  avg?: Maybe<Loan_Repayment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Loan_Repayment_Max_Fields>;
  min?: Maybe<Loan_Repayment_Min_Fields>;
  stddev?: Maybe<Loan_Repayment_Stddev_Fields>;
  stddev_pop?: Maybe<Loan_Repayment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Loan_Repayment_Stddev_Samp_Fields>;
  sum?: Maybe<Loan_Repayment_Sum_Fields>;
  var_pop?: Maybe<Loan_Repayment_Var_Pop_Fields>;
  var_samp?: Maybe<Loan_Repayment_Var_Samp_Fields>;
  variance?: Maybe<Loan_Repayment_Variance_Fields>;
};


/** aggregate fields of "loan_repayment" */
export type Loan_Repayment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "loan_repayment" */
export type Loan_Repayment_Aggregate_Order_By = {
  avg?: InputMaybe<Loan_Repayment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Loan_Repayment_Max_Order_By>;
  min?: InputMaybe<Loan_Repayment_Min_Order_By>;
  stddev?: InputMaybe<Loan_Repayment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Loan_Repayment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Loan_Repayment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Loan_Repayment_Sum_Order_By>;
  var_pop?: InputMaybe<Loan_Repayment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Loan_Repayment_Var_Samp_Order_By>;
  variance?: InputMaybe<Loan_Repayment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "loan_repayment" */
export type Loan_Repayment_Arr_Rel_Insert_Input = {
  data: Array<Loan_Repayment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Repayment_On_Conflict>;
};

/** aggregate avg on columns */
export type Loan_Repayment_Avg_Fields = {
  __typename?: 'loan_repayment_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "loan_repayment" */
export type Loan_Repayment_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "loan_repayment". All fields are combined with a logical 'AND'. */
export type Loan_Repayment_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Repayment_Bool_Exp>>;
  _not?: InputMaybe<Loan_Repayment_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Repayment_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  category_key?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  fee?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  interest?: InputMaybe<Numeric_Comparison_Exp>;
  loan?: InputMaybe<Loan_Bool_Exp>;
  loan_id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  on_date?: InputMaybe<Date_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
  trash?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_repayment" */
export enum Loan_Repayment_Constraint {
  /** unique or primary key constraint */
  LoanRepaymentPkey = 'loan_repayment_pkey'
}

/** input type for incrementing numeric columns in table "loan_repayment" */
export type Loan_Repayment_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  fee?: InputMaybe<Scalars['numeric']>;
  interest?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "loan_repayment" */
export type Loan_Repayment_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  fee?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  loan?: InputMaybe<Loan_Obj_Rel_Insert_Input>;
  loan_id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  parent_id?: InputMaybe<Scalars['uuid']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Repayment_Max_Fields = {
  __typename?: 'loan_repayment_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  fee?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  loan_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "loan_repayment" */
export type Loan_Repayment_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Loan_Repayment_Min_Fields = {
  __typename?: 'loan_repayment_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  category_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  fee?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  interest?: Maybe<Scalars['numeric']>;
  loan_id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  on_date?: Maybe<Scalars['date']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "loan_repayment" */
export type Loan_Repayment_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "loan_repayment" */
export type Loan_Repayment_Mutation_Response = {
  __typename?: 'loan_repayment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Repayment>;
};

/** on_conflict condition type for table "loan_repayment" */
export type Loan_Repayment_On_Conflict = {
  constraint: Loan_Repayment_Constraint;
  update_columns?: Array<Loan_Repayment_Update_Column>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_repayment". */
export type Loan_Repayment_Order_By = {
  amount?: InputMaybe<Order_By>;
  category_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan?: InputMaybe<Loan_Order_By>;
  loan_id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  on_date?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  trash?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_repayment */
export type Loan_Repayment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "loan_repayment" */
export enum Loan_Repayment_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  LoanId = 'loan_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_repayment" */
export type Loan_Repayment_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category_key?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  fee?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  interest?: InputMaybe<Scalars['numeric']>;
  loan_id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  on_date?: InputMaybe<Scalars['date']>;
  parent_id?: InputMaybe<Scalars['uuid']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Loan_Repayment_Stddev_Fields = {
  __typename?: 'loan_repayment_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "loan_repayment" */
export type Loan_Repayment_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Loan_Repayment_Stddev_Pop_Fields = {
  __typename?: 'loan_repayment_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "loan_repayment" */
export type Loan_Repayment_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Loan_Repayment_Stddev_Samp_Fields = {
  __typename?: 'loan_repayment_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "loan_repayment" */
export type Loan_Repayment_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Loan_Repayment_Sum_Fields = {
  __typename?: 'loan_repayment_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  fee?: Maybe<Scalars['numeric']>;
  interest?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "loan_repayment" */
export type Loan_Repayment_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** update columns of table "loan_repayment" */
export enum Loan_Repayment_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryKey = 'category_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Fee = 'fee',
  /** column name */
  Id = 'id',
  /** column name */
  Interest = 'interest',
  /** column name */
  LoanId = 'loan_id',
  /** column name */
  Note = 'note',
  /** column name */
  OnDate = 'on_date',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Loan_Repayment_Var_Pop_Fields = {
  __typename?: 'loan_repayment_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "loan_repayment" */
export type Loan_Repayment_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Loan_Repayment_Var_Samp_Fields = {
  __typename?: 'loan_repayment_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "loan_repayment" */
export type Loan_Repayment_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Loan_Repayment_Variance_Fields = {
  __typename?: 'loan_repayment_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "loan_repayment" */
export type Loan_Repayment_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  fee?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
};

/** select columns of table "loan" */
export enum Loan_Select_Column {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  Amount = 'amount',
  /** column name */
  BankBranchId = 'bank_branch_id',
  /** column name */
  BusinesId = 'busines_id',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  Closed = 'closed',
  /** column name */
  Code = 'code',
  /** column name */
  Collateral = 'collateral',
  /** column name */
  ContractDate = 'contract_date',
  /** column name */
  ContractEnd = 'contract_end',
  /** column name */
  ContractNo = 'contract_no',
  /** column name */
  CovidAffected = 'covid_affected',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FundContractId = 'fund_contract_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  InitalFreeCost = 'inital_free_cost',
  /** column name */
  Interest = 'interest',
  /** column name */
  IsFreeCost = 'is_free_cost',
  /** column name */
  LastFreeCost = 'last_free_cost',
  /** column name */
  LoanAmountApproved = 'loan_amount_approved',
  /** column name */
  LoanCollateralId = 'loan_collateral_id',
  /** column name */
  LoanFees = 'loan_fees',
  /** column name */
  LoanPurposeId = 'loan_purpose_id',
  /** column name */
  LoanStatusId = 'loan_status_id',
  /** column name */
  LoanTypeId = 'loan_type_id',
  /** column name */
  LoanWindowId = 'loan_window_id',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  Remark = 'remark',
  /** column name */
  Repayment = 'repayment',
  /** column name */
  ResponsibleStaff = 'responsible_staff',
  /** column name */
  SkipNo = 'skip_no',
  /** column name */
  Staff = 'staff',
  /** column name */
  Title = 'title',
  /** column name */
  TotalOfCollateral = 'total_of_collateral',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan" */
export type Loan_Set_Input = {
  account_number?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['numeric']>;
  bank_branch_id?: InputMaybe<Scalars['uuid']>;
  busines_id?: InputMaybe<Scalars['uuid']>;
  close_date?: InputMaybe<Scalars['date']>;
  closed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  collateral?: InputMaybe<Scalars['String']>;
  contract_date?: InputMaybe<Scalars['date']>;
  contract_end?: InputMaybe<Scalars['date']>;
  contract_no?: InputMaybe<Scalars['String']>;
  covid_affected?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  fund_contract_id?: InputMaybe<Scalars['uuid']>;
  grade?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  inital_free_cost?: InputMaybe<Scalars['date']>;
  interest?: InputMaybe<Scalars['numeric']>;
  /** ໄລຍະປອດທຶນ */
  is_free_cost?: InputMaybe<Scalars['Boolean']>;
  last_free_cost?: InputMaybe<Scalars['date']>;
  loan_amount_approved?: InputMaybe<Scalars['numeric']>;
  loan_collateral_id?: InputMaybe<Scalars['String']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Scalars['numeric']>;
  loan_purpose_id?: InputMaybe<Scalars['String']>;
  loan_status_id?: InputMaybe<Scalars['String']>;
  loan_type_id?: InputMaybe<Scalars['String']>;
  loan_window_id?: InputMaybe<Scalars['String']>;
  /** ເປົ້າໝາຍເງິນກູ້​​(ອະ​ທິ​ບາຍ​ລະ​ອຽດ) */
  purpose?: InputMaybe<Scalars['String']>;
  remark?: InputMaybe<Scalars['String']>;
  repayment?: InputMaybe<Scalars['numeric']>;
  responsible_staff?: InputMaybe<Scalars['String']>;
  skip_no?: InputMaybe<Scalars['Int']>;
  staff?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  total_of_collateral?: InputMaybe<Scalars['numeric']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** ສະ​ຖາ​ນະ​ຂອງ​ເງິນກູ້ "ສະ​ຖາ​ນະ​ຂອງ​ເງິນ​ກູ້ ​*ປ່ຽນແປງຕາມແຕ່ລະເດືອນ[ປິດ, ປະ​ຈຸ​ບັນ​, NPL-​ຊຳ​ລະ​ໝົດ, -NPL-ຍັງ​ຄ້າງ​​ຊຳ​ລະ]-[Status of Loan: ended, current, NPL-ended, NPL-not ended] */
export type Loan_Status = {
  __typename?: 'loan_status';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ສະ​ຖາ​ນະ​ຂອງ​ເງິນກູ້ "ສະ​ຖາ​ນະ​ຂອງ​ເງິນ​ກູ້ ​*ປ່ຽນແປງຕາມແຕ່ລະເດືອນ[ປິດ, ປະ​ຈຸ​ບັນ​, NPL-​ຊຳ​ລະ​ໝົດ, -NPL-ຍັງ​ຄ້າງ​​ຊຳ​ລະ]-[Status of Loan: ended, current, NPL-ended, NPL-not ended] */
export type Loan_StatusLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** ສະ​ຖາ​ນະ​ຂອງ​ເງິນກູ້ "ສະ​ຖາ​ນະ​ຂອງ​ເງິນ​ກູ້ ​*ປ່ຽນແປງຕາມແຕ່ລະເດືອນ[ປິດ, ປະ​ຈຸ​ບັນ​, NPL-​ຊຳ​ລະ​ໝົດ, -NPL-ຍັງ​ຄ້າງ​​ຊຳ​ລະ]-[Status of Loan: ended, current, NPL-ended, NPL-not ended] */
export type Loan_StatusLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "loan_status" */
export type Loan_Status_Aggregate = {
  __typename?: 'loan_status_aggregate';
  aggregate?: Maybe<Loan_Status_Aggregate_Fields>;
  nodes: Array<Loan_Status>;
};

/** aggregate fields of "loan_status" */
export type Loan_Status_Aggregate_Fields = {
  __typename?: 'loan_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Loan_Status_Max_Fields>;
  min?: Maybe<Loan_Status_Min_Fields>;
};


/** aggregate fields of "loan_status" */
export type Loan_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "loan_status". All fields are combined with a logical 'AND'. */
export type Loan_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Status_Bool_Exp>>;
  _not?: InputMaybe<Loan_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Status_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_status" */
export enum Loan_Status_Constraint {
  /** unique or primary key constraint */
  LoanStatusPkey = 'loan_status_pkey'
}

/** input type for inserting data into table "loan_status" */
export type Loan_Status_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Status_Max_Fields = {
  __typename?: 'loan_status_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Loan_Status_Min_Fields = {
  __typename?: 'loan_status_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "loan_status" */
export type Loan_Status_Mutation_Response = {
  __typename?: 'loan_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Status>;
};

/** input type for inserting object relation for remote table "loan_status" */
export type Loan_Status_Obj_Rel_Insert_Input = {
  data: Loan_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Status_On_Conflict>;
};

/** on_conflict condition type for table "loan_status" */
export type Loan_Status_On_Conflict = {
  constraint: Loan_Status_Constraint;
  update_columns?: Array<Loan_Status_Update_Column>;
  where?: InputMaybe<Loan_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_status". */
export type Loan_Status_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_status */
export type Loan_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "loan_status" */
export enum Loan_Status_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_status" */
export type Loan_Status_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "loan_status" */
export enum Loan_Status_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Loan_Stddev_Fields = {
  __typename?: 'loan_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "loan" */
export type Loan_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Loan_Stddev_Pop_Fields = {
  __typename?: 'loan_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "loan" */
export type Loan_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Loan_Stddev_Samp_Fields = {
  __typename?: 'loan_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "loan" */
export type Loan_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Loan_Sum_Fields = {
  __typename?: 'loan_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  interest?: Maybe<Scalars['numeric']>;
  loan_amount_approved?: Maybe<Scalars['numeric']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['numeric']>;
  repayment?: Maybe<Scalars['numeric']>;
  skip_no?: Maybe<Scalars['Int']>;
  staff?: Maybe<Scalars['Int']>;
  total_of_collateral?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "loan" */
export type Loan_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** ປະ​ເພດ​ເປົ້າ​ຫມາຍ​ເງິນ​ກູ້ [​​ທຶນ​ຫມູນ​ວຽນ, ທຶນ​ຄົງ​ທີ່] **ຈາກ​ທະ​ນາ​ຄານ */
export type Loan_Type = {
  __typename?: 'loan_type';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ປະ​ເພດ​ເປົ້າ​ຫມາຍ​ເງິນ​ກູ້ [​​ທຶນ​ຫມູນ​ວຽນ, ທຶນ​ຄົງ​ທີ່] **ຈາກ​ທະ​ນາ​ຄານ */
export type Loan_TypeLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** ປະ​ເພດ​ເປົ້າ​ຫມາຍ​ເງິນ​ກູ້ [​​ທຶນ​ຫມູນ​ວຽນ, ທຶນ​ຄົງ​ທີ່] **ຈາກ​ທະ​ນາ​ຄານ */
export type Loan_TypeLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "loan_type" */
export type Loan_Type_Aggregate = {
  __typename?: 'loan_type_aggregate';
  aggregate?: Maybe<Loan_Type_Aggregate_Fields>;
  nodes: Array<Loan_Type>;
};

/** aggregate fields of "loan_type" */
export type Loan_Type_Aggregate_Fields = {
  __typename?: 'loan_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Loan_Type_Max_Fields>;
  min?: Maybe<Loan_Type_Min_Fields>;
};


/** aggregate fields of "loan_type" */
export type Loan_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "loan_type". All fields are combined with a logical 'AND'. */
export type Loan_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Type_Bool_Exp>>;
  _not?: InputMaybe<Loan_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Type_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_type" */
export enum Loan_Type_Constraint {
  /** unique or primary key constraint */
  LoanTypePkey = 'loan_type_pkey'
}

/** input type for inserting data into table "loan_type" */
export type Loan_Type_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Type_Max_Fields = {
  __typename?: 'loan_type_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Loan_Type_Min_Fields = {
  __typename?: 'loan_type_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "loan_type" */
export type Loan_Type_Mutation_Response = {
  __typename?: 'loan_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Type>;
};

/** input type for inserting object relation for remote table "loan_type" */
export type Loan_Type_Obj_Rel_Insert_Input = {
  data: Loan_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Type_On_Conflict>;
};

/** on_conflict condition type for table "loan_type" */
export type Loan_Type_On_Conflict = {
  constraint: Loan_Type_Constraint;
  update_columns?: Array<Loan_Type_Update_Column>;
  where?: InputMaybe<Loan_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_type". */
export type Loan_Type_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_type */
export type Loan_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "loan_type" */
export enum Loan_Type_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_type" */
export type Loan_Type_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "loan_type" */
export enum Loan_Type_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "loan" */
export enum Loan_Update_Column {
  /** column name */
  AccountNumber = 'account_number',
  /** column name */
  Amount = 'amount',
  /** column name */
  BankBranchId = 'bank_branch_id',
  /** column name */
  BusinesId = 'busines_id',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  Closed = 'closed',
  /** column name */
  Code = 'code',
  /** column name */
  Collateral = 'collateral',
  /** column name */
  ContractDate = 'contract_date',
  /** column name */
  ContractEnd = 'contract_end',
  /** column name */
  ContractNo = 'contract_no',
  /** column name */
  CovidAffected = 'covid_affected',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FundContractId = 'fund_contract_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  InitalFreeCost = 'inital_free_cost',
  /** column name */
  Interest = 'interest',
  /** column name */
  IsFreeCost = 'is_free_cost',
  /** column name */
  LastFreeCost = 'last_free_cost',
  /** column name */
  LoanAmountApproved = 'loan_amount_approved',
  /** column name */
  LoanCollateralId = 'loan_collateral_id',
  /** column name */
  LoanFees = 'loan_fees',
  /** column name */
  LoanPurposeId = 'loan_purpose_id',
  /** column name */
  LoanStatusId = 'loan_status_id',
  /** column name */
  LoanTypeId = 'loan_type_id',
  /** column name */
  LoanWindowId = 'loan_window_id',
  /** column name */
  Purpose = 'purpose',
  /** column name */
  Remark = 'remark',
  /** column name */
  Repayment = 'repayment',
  /** column name */
  ResponsibleStaff = 'responsible_staff',
  /** column name */
  SkipNo = 'skip_no',
  /** column name */
  Staff = 'staff',
  /** column name */
  Title = 'title',
  /** column name */
  TotalOfCollateral = 'total_of_collateral',
  /** column name */
  Trash = 'trash',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Loan_Var_Pop_Fields = {
  __typename?: 'loan_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "loan" */
export type Loan_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Loan_Var_Samp_Fields = {
  __typename?: 'loan_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "loan" */
export type Loan_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Loan_Variance_Fields = {
  __typename?: 'loan_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  interest?: Maybe<Scalars['Float']>;
  loan_amount_approved?: Maybe<Scalars['Float']>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: Maybe<Scalars['Float']>;
  repayment?: Maybe<Scalars['Float']>;
  skip_no?: Maybe<Scalars['Float']>;
  staff?: Maybe<Scalars['Float']>;
  total_of_collateral?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "loan" */
export type Loan_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  interest?: InputMaybe<Order_By>;
  loan_amount_approved?: InputMaybe<Order_By>;
  /** ຄ່າ​ທໍາ​ນຽມ​ການ​ກູ້​ຢືມ​ເງິນ​ */
  loan_fees?: InputMaybe<Order_By>;
  repayment?: InputMaybe<Order_By>;
  skip_no?: InputMaybe<Order_By>;
  staff?: InputMaybe<Order_By>;
  total_of_collateral?: InputMaybe<Order_By>;
};

/** ຮູບແບບເງິນກູ້ [Regular ກັບ Emergency] */
export type Loan_Window = {
  __typename?: 'loan_window';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamp'];
  en: Scalars['String'];
  id: Scalars['String'];
  lo: Scalars['String'];
  /** An array relationship */
  loans: Array<Loan>;
  /** An aggregate relationship */
  loans_aggregate: Loan_Aggregate;
  updated_at: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** ຮູບແບບເງິນກູ້ [Regular ກັບ Emergency] */
export type Loan_WindowLoansArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


/** ຮູບແບບເງິນກູ້ [Regular ກັບ Emergency] */
export type Loan_WindowLoans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};

/** aggregated selection of "loan_window" */
export type Loan_Window_Aggregate = {
  __typename?: 'loan_window_aggregate';
  aggregate?: Maybe<Loan_Window_Aggregate_Fields>;
  nodes: Array<Loan_Window>;
};

/** aggregate fields of "loan_window" */
export type Loan_Window_Aggregate_Fields = {
  __typename?: 'loan_window_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Loan_Window_Max_Fields>;
  min?: Maybe<Loan_Window_Min_Fields>;
};


/** aggregate fields of "loan_window" */
export type Loan_Window_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Loan_Window_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "loan_window". All fields are combined with a logical 'AND'. */
export type Loan_Window_Bool_Exp = {
  _and?: InputMaybe<Array<Loan_Window_Bool_Exp>>;
  _not?: InputMaybe<Loan_Window_Bool_Exp>;
  _or?: InputMaybe<Array<Loan_Window_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  loans?: InputMaybe<Loan_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "loan_window" */
export enum Loan_Window_Constraint {
  /** unique or primary key constraint */
  LoanWindowPkey = 'loan_window_pkey'
}

/** input type for inserting data into table "loan_window" */
export type Loan_Window_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  loans?: InputMaybe<Loan_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Loan_Window_Max_Fields = {
  __typename?: 'loan_window_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Loan_Window_Min_Fields = {
  __typename?: 'loan_window_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "loan_window" */
export type Loan_Window_Mutation_Response = {
  __typename?: 'loan_window_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Loan_Window>;
};

/** input type for inserting object relation for remote table "loan_window" */
export type Loan_Window_Obj_Rel_Insert_Input = {
  data: Loan_Window_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Loan_Window_On_Conflict>;
};

/** on_conflict condition type for table "loan_window" */
export type Loan_Window_On_Conflict = {
  constraint: Loan_Window_Constraint;
  update_columns?: Array<Loan_Window_Update_Column>;
  where?: InputMaybe<Loan_Window_Bool_Exp>;
};

/** Ordering options when selecting data from "loan_window". */
export type Loan_Window_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  loans_aggregate?: InputMaybe<Loan_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: loan_window */
export type Loan_Window_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "loan_window" */
export enum Loan_Window_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "loan_window" */
export type Loan_Window_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "loan_window" */
export enum Loan_Window_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "meta" */
export type Meta = {
  __typename?: 'meta';
  active?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['timestamp'];
  description?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  /** An array relationship */
  fund_contract_repayments: Array<Fund_Contract_Repayment>;
  /** An aggregate relationship */
  fund_contract_repayments_aggregate: Fund_Contract_Repayment_Aggregate;
  id: Scalars['uuid'];
  isDefault?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  keyGroup?: Maybe<Scalars['String']>;
  lo: Scalars['String'];
  options?: Maybe<Scalars['jsonb']>;
  updatedAt: Scalars['timestamp'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "meta" */
export type MetaFund_Contract_RepaymentsArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


/** columns and relationships of "meta" */
export type MetaFund_Contract_Repayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


/** columns and relationships of "meta" */
export type MetaOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "meta" */
export type Meta_Aggregate = {
  __typename?: 'meta_aggregate';
  aggregate?: Maybe<Meta_Aggregate_Fields>;
  nodes: Array<Meta>;
};

/** aggregate fields of "meta" */
export type Meta_Aggregate_Fields = {
  __typename?: 'meta_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Meta_Max_Fields>;
  min?: Maybe<Meta_Min_Fields>;
};


/** aggregate fields of "meta" */
export type Meta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Meta_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "meta". All fields are combined with a logical 'AND'. */
export type Meta_Bool_Exp = {
  _and?: InputMaybe<Array<Meta_Bool_Exp>>;
  _not?: InputMaybe<Meta_Bool_Exp>;
  _or?: InputMaybe<Array<Meta_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  fund_contract_repayments?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  keyGroup?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "meta" */
export enum Meta_Constraint {
  /** unique or primary key constraint */
  MetaPkey = 'meta_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Meta_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Meta_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Meta_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "meta" */
export type Meta_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  fund_contract_repayments?: InputMaybe<Fund_Contract_Repayment_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  keyGroup?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Meta_Max_Fields = {
  __typename?: 'meta_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  keyGroup?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Meta_Min_Fields = {
  __typename?: 'meta_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
  keyGroup?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "meta" */
export type Meta_Mutation_Response = {
  __typename?: 'meta_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Meta>;
};

/** input type for inserting object relation for remote table "meta" */
export type Meta_Obj_Rel_Insert_Input = {
  data: Meta_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meta_On_Conflict>;
};

/** on_conflict condition type for table "meta" */
export type Meta_On_Conflict = {
  constraint: Meta_Constraint;
  update_columns?: Array<Meta_Update_Column>;
  where?: InputMaybe<Meta_Bool_Exp>;
};

/** Ordering options when selecting data from "meta". */
export type Meta_Order_By = {
  active?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  fund_contract_repayments_aggregate?: InputMaybe<Fund_Contract_Repayment_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  keyGroup?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meta */
export type Meta_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Meta_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "meta" */
export enum Meta_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  Key = 'key',
  /** column name */
  KeyGroup = 'keyGroup',
  /** column name */
  Lo = 'lo',
  /** column name */
  Options = 'options',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "meta" */
export type Meta_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  keyGroup?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "meta" */
export enum Meta_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  Key = 'key',
  /** column name */
  KeyGroup = 'keyGroup',
  /** column name */
  Lo = 'lo',
  /** column name */
  Options = 'options',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "app_setting" */
  delete_app_setting?: Maybe<App_Setting_Mutation_Response>;
  /** delete single row from the table: "app_setting" */
  delete_app_setting_by_pk?: Maybe<App_Setting>;
  /** delete data from the table: "bank" */
  delete_bank?: Maybe<Bank_Mutation_Response>;
  /** delete data from the table: "bank_branch" */
  delete_bank_branch?: Maybe<Bank_Branch_Mutation_Response>;
  /** delete single row from the table: "bank_branch" */
  delete_bank_branch_by_pk?: Maybe<Bank_Branch>;
  /** delete single row from the table: "bank" */
  delete_bank_by_pk?: Maybe<Bank>;
  /** delete data from the table: "bank_type" */
  delete_bank_type?: Maybe<Bank_Type_Mutation_Response>;
  /** delete single row from the table: "bank_type" */
  delete_bank_type_by_pk?: Maybe<Bank_Type>;
  /** delete data from the table: "busines" */
  delete_busines?: Maybe<Busines_Mutation_Response>;
  /** delete single row from the table: "busines" */
  delete_busines_by_pk?: Maybe<Busines>;
  /** delete data from the table: "busines_class" */
  delete_busines_class?: Maybe<Busines_Class_Mutation_Response>;
  /** delete single row from the table: "busines_class" */
  delete_busines_class_by_pk?: Maybe<Busines_Class>;
  /** delete data from the table: "busines_sector" */
  delete_busines_sector?: Maybe<Busines_Sector_Mutation_Response>;
  /** delete single row from the table: "busines_sector" */
  delete_busines_sector_by_pk?: Maybe<Busines_Sector>;
  /** delete data from the table: "busines_size" */
  delete_busines_size?: Maybe<Busines_Size_Mutation_Response>;
  /** delete single row from the table: "busines_size" */
  delete_busines_size_by_pk?: Maybe<Busines_Size>;
  /** delete data from the table: "busines_type" */
  delete_busines_type?: Maybe<Busines_Type_Mutation_Response>;
  /** delete single row from the table: "busines_type" */
  delete_busines_type_by_pk?: Maybe<Busines_Type>;
  /** delete data from the table: "districts" */
  delete_districts?: Maybe<Districts_Mutation_Response>;
  /** delete single row from the table: "districts" */
  delete_districts_by_pk?: Maybe<Districts>;
  /** delete data from the table: "fund" */
  delete_fund?: Maybe<Fund_Mutation_Response>;
  /** delete single row from the table: "fund" */
  delete_fund_by_pk?: Maybe<Fund>;
  /** delete data from the table: "fund_contract" */
  delete_fund_contract?: Maybe<Fund_Contract_Mutation_Response>;
  /** delete single row from the table: "fund_contract" */
  delete_fund_contract_by_pk?: Maybe<Fund_Contract>;
  /** delete data from the table: "fund_contract_repayment" */
  delete_fund_contract_repayment?: Maybe<Fund_Contract_Repayment_Mutation_Response>;
  /** delete single row from the table: "fund_contract_repayment" */
  delete_fund_contract_repayment_by_pk?: Maybe<Fund_Contract_Repayment>;
  /** delete data from the table: "fund_src" */
  delete_fund_src?: Maybe<Fund_Src_Mutation_Response>;
  /** delete single row from the table: "fund_src" */
  delete_fund_src_by_pk?: Maybe<Fund_Src>;
  /** delete data from the table: "loan" */
  delete_loan?: Maybe<Loan_Mutation_Response>;
  /** delete single row from the table: "loan" */
  delete_loan_by_pk?: Maybe<Loan>;
  /** delete data from the table: "loan_collateral" */
  delete_loan_collateral?: Maybe<Loan_Collateral_Mutation_Response>;
  /** delete single row from the table: "loan_collateral" */
  delete_loan_collateral_by_pk?: Maybe<Loan_Collateral>;
  /** delete data from the table: "loan_disbursed" */
  delete_loan_disbursed?: Maybe<Loan_Disbursed_Mutation_Response>;
  /** delete single row from the table: "loan_disbursed" */
  delete_loan_disbursed_by_pk?: Maybe<Loan_Disbursed>;
  /** delete data from the table: "loan_purpose" */
  delete_loan_purpose?: Maybe<Loan_Purpose_Mutation_Response>;
  /** delete single row from the table: "loan_purpose" */
  delete_loan_purpose_by_pk?: Maybe<Loan_Purpose>;
  /** delete data from the table: "loan_repayment" */
  delete_loan_repayment?: Maybe<Loan_Repayment_Mutation_Response>;
  /** delete single row from the table: "loan_repayment" */
  delete_loan_repayment_by_pk?: Maybe<Loan_Repayment>;
  /** delete data from the table: "loan_status" */
  delete_loan_status?: Maybe<Loan_Status_Mutation_Response>;
  /** delete single row from the table: "loan_status" */
  delete_loan_status_by_pk?: Maybe<Loan_Status>;
  /** delete data from the table: "loan_type" */
  delete_loan_type?: Maybe<Loan_Type_Mutation_Response>;
  /** delete single row from the table: "loan_type" */
  delete_loan_type_by_pk?: Maybe<Loan_Type>;
  /** delete data from the table: "loan_window" */
  delete_loan_window?: Maybe<Loan_Window_Mutation_Response>;
  /** delete single row from the table: "loan_window" */
  delete_loan_window_by_pk?: Maybe<Loan_Window>;
  /** delete data from the table: "meta" */
  delete_meta?: Maybe<Meta_Mutation_Response>;
  /** delete single row from the table: "meta" */
  delete_meta_by_pk?: Maybe<Meta>;
  /** delete data from the table: "provinces" */
  delete_provinces?: Maybe<Provinces_Mutation_Response>;
  /** delete single row from the table: "provinces" */
  delete_provinces_by_pk?: Maybe<Provinces>;
  /** delete data from the table: "user_log" */
  delete_user_log?: Maybe<User_Log_Mutation_Response>;
  /** delete single row from the table: "user_log" */
  delete_user_log_by_pk?: Maybe<User_Log>;
  /** delete data from the table: "villages" */
  delete_villages?: Maybe<Villages_Mutation_Response>;
  /** delete single row from the table: "villages" */
  delete_villages_by_pk?: Maybe<Villages>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "app_setting" */
  insert_app_setting?: Maybe<App_Setting_Mutation_Response>;
  /** insert a single row into the table: "app_setting" */
  insert_app_setting_one?: Maybe<App_Setting>;
  /** insert data into the table: "bank" */
  insert_bank?: Maybe<Bank_Mutation_Response>;
  /** insert data into the table: "bank_branch" */
  insert_bank_branch?: Maybe<Bank_Branch_Mutation_Response>;
  /** insert a single row into the table: "bank_branch" */
  insert_bank_branch_one?: Maybe<Bank_Branch>;
  /** insert a single row into the table: "bank" */
  insert_bank_one?: Maybe<Bank>;
  /** insert data into the table: "bank_type" */
  insert_bank_type?: Maybe<Bank_Type_Mutation_Response>;
  /** insert a single row into the table: "bank_type" */
  insert_bank_type_one?: Maybe<Bank_Type>;
  /** insert data into the table: "busines" */
  insert_busines?: Maybe<Busines_Mutation_Response>;
  /** insert data into the table: "busines_class" */
  insert_busines_class?: Maybe<Busines_Class_Mutation_Response>;
  /** insert a single row into the table: "busines_class" */
  insert_busines_class_one?: Maybe<Busines_Class>;
  /** insert a single row into the table: "busines" */
  insert_busines_one?: Maybe<Busines>;
  /** insert data into the table: "busines_sector" */
  insert_busines_sector?: Maybe<Busines_Sector_Mutation_Response>;
  /** insert a single row into the table: "busines_sector" */
  insert_busines_sector_one?: Maybe<Busines_Sector>;
  /** insert data into the table: "busines_size" */
  insert_busines_size?: Maybe<Busines_Size_Mutation_Response>;
  /** insert a single row into the table: "busines_size" */
  insert_busines_size_one?: Maybe<Busines_Size>;
  /** insert data into the table: "busines_type" */
  insert_busines_type?: Maybe<Busines_Type_Mutation_Response>;
  /** insert a single row into the table: "busines_type" */
  insert_busines_type_one?: Maybe<Busines_Type>;
  /** insert data into the table: "districts" */
  insert_districts?: Maybe<Districts_Mutation_Response>;
  /** insert a single row into the table: "districts" */
  insert_districts_one?: Maybe<Districts>;
  /** insert data into the table: "fund" */
  insert_fund?: Maybe<Fund_Mutation_Response>;
  /** insert data into the table: "fund_contract" */
  insert_fund_contract?: Maybe<Fund_Contract_Mutation_Response>;
  /** insert a single row into the table: "fund_contract" */
  insert_fund_contract_one?: Maybe<Fund_Contract>;
  /** insert data into the table: "fund_contract_repayment" */
  insert_fund_contract_repayment?: Maybe<Fund_Contract_Repayment_Mutation_Response>;
  /** insert a single row into the table: "fund_contract_repayment" */
  insert_fund_contract_repayment_one?: Maybe<Fund_Contract_Repayment>;
  /** insert a single row into the table: "fund" */
  insert_fund_one?: Maybe<Fund>;
  /** insert data into the table: "fund_src" */
  insert_fund_src?: Maybe<Fund_Src_Mutation_Response>;
  /** insert a single row into the table: "fund_src" */
  insert_fund_src_one?: Maybe<Fund_Src>;
  /** insert data into the table: "loan" */
  insert_loan?: Maybe<Loan_Mutation_Response>;
  /** insert data into the table: "loan_collateral" */
  insert_loan_collateral?: Maybe<Loan_Collateral_Mutation_Response>;
  /** insert a single row into the table: "loan_collateral" */
  insert_loan_collateral_one?: Maybe<Loan_Collateral>;
  /** insert data into the table: "loan_disbursed" */
  insert_loan_disbursed?: Maybe<Loan_Disbursed_Mutation_Response>;
  /** insert a single row into the table: "loan_disbursed" */
  insert_loan_disbursed_one?: Maybe<Loan_Disbursed>;
  /** insert a single row into the table: "loan" */
  insert_loan_one?: Maybe<Loan>;
  /** insert data into the table: "loan_purpose" */
  insert_loan_purpose?: Maybe<Loan_Purpose_Mutation_Response>;
  /** insert a single row into the table: "loan_purpose" */
  insert_loan_purpose_one?: Maybe<Loan_Purpose>;
  /** insert data into the table: "loan_repayment" */
  insert_loan_repayment?: Maybe<Loan_Repayment_Mutation_Response>;
  /** insert a single row into the table: "loan_repayment" */
  insert_loan_repayment_one?: Maybe<Loan_Repayment>;
  /** insert data into the table: "loan_status" */
  insert_loan_status?: Maybe<Loan_Status_Mutation_Response>;
  /** insert a single row into the table: "loan_status" */
  insert_loan_status_one?: Maybe<Loan_Status>;
  /** insert data into the table: "loan_type" */
  insert_loan_type?: Maybe<Loan_Type_Mutation_Response>;
  /** insert a single row into the table: "loan_type" */
  insert_loan_type_one?: Maybe<Loan_Type>;
  /** insert data into the table: "loan_window" */
  insert_loan_window?: Maybe<Loan_Window_Mutation_Response>;
  /** insert a single row into the table: "loan_window" */
  insert_loan_window_one?: Maybe<Loan_Window>;
  /** insert data into the table: "meta" */
  insert_meta?: Maybe<Meta_Mutation_Response>;
  /** insert a single row into the table: "meta" */
  insert_meta_one?: Maybe<Meta>;
  /** insert data into the table: "provinces" */
  insert_provinces?: Maybe<Provinces_Mutation_Response>;
  /** insert a single row into the table: "provinces" */
  insert_provinces_one?: Maybe<Provinces>;
  /** insert data into the table: "user_log" */
  insert_user_log?: Maybe<User_Log_Mutation_Response>;
  /** insert a single row into the table: "user_log" */
  insert_user_log_one?: Maybe<User_Log>;
  /** insert data into the table: "villages" */
  insert_villages?: Maybe<Villages_Mutation_Response>;
  /** insert a single row into the table: "villages" */
  insert_villages_one?: Maybe<Villages>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "app_setting" */
  update_app_setting?: Maybe<App_Setting_Mutation_Response>;
  /** update single row of the table: "app_setting" */
  update_app_setting_by_pk?: Maybe<App_Setting>;
  /** update data of the table: "bank" */
  update_bank?: Maybe<Bank_Mutation_Response>;
  /** update data of the table: "bank_branch" */
  update_bank_branch?: Maybe<Bank_Branch_Mutation_Response>;
  /** update single row of the table: "bank_branch" */
  update_bank_branch_by_pk?: Maybe<Bank_Branch>;
  /** update single row of the table: "bank" */
  update_bank_by_pk?: Maybe<Bank>;
  /** update data of the table: "bank_type" */
  update_bank_type?: Maybe<Bank_Type_Mutation_Response>;
  /** update single row of the table: "bank_type" */
  update_bank_type_by_pk?: Maybe<Bank_Type>;
  /** update data of the table: "busines" */
  update_busines?: Maybe<Busines_Mutation_Response>;
  /** update single row of the table: "busines" */
  update_busines_by_pk?: Maybe<Busines>;
  /** update data of the table: "busines_class" */
  update_busines_class?: Maybe<Busines_Class_Mutation_Response>;
  /** update single row of the table: "busines_class" */
  update_busines_class_by_pk?: Maybe<Busines_Class>;
  /** update data of the table: "busines_sector" */
  update_busines_sector?: Maybe<Busines_Sector_Mutation_Response>;
  /** update single row of the table: "busines_sector" */
  update_busines_sector_by_pk?: Maybe<Busines_Sector>;
  /** update data of the table: "busines_size" */
  update_busines_size?: Maybe<Busines_Size_Mutation_Response>;
  /** update single row of the table: "busines_size" */
  update_busines_size_by_pk?: Maybe<Busines_Size>;
  /** update data of the table: "busines_type" */
  update_busines_type?: Maybe<Busines_Type_Mutation_Response>;
  /** update single row of the table: "busines_type" */
  update_busines_type_by_pk?: Maybe<Busines_Type>;
  /** update data of the table: "districts" */
  update_districts?: Maybe<Districts_Mutation_Response>;
  /** update single row of the table: "districts" */
  update_districts_by_pk?: Maybe<Districts>;
  /** update data of the table: "fund" */
  update_fund?: Maybe<Fund_Mutation_Response>;
  /** update single row of the table: "fund" */
  update_fund_by_pk?: Maybe<Fund>;
  /** update data of the table: "fund_contract" */
  update_fund_contract?: Maybe<Fund_Contract_Mutation_Response>;
  /** update single row of the table: "fund_contract" */
  update_fund_contract_by_pk?: Maybe<Fund_Contract>;
  /** update data of the table: "fund_contract_repayment" */
  update_fund_contract_repayment?: Maybe<Fund_Contract_Repayment_Mutation_Response>;
  /** update single row of the table: "fund_contract_repayment" */
  update_fund_contract_repayment_by_pk?: Maybe<Fund_Contract_Repayment>;
  /** update data of the table: "fund_src" */
  update_fund_src?: Maybe<Fund_Src_Mutation_Response>;
  /** update single row of the table: "fund_src" */
  update_fund_src_by_pk?: Maybe<Fund_Src>;
  /** update data of the table: "loan" */
  update_loan?: Maybe<Loan_Mutation_Response>;
  /** update single row of the table: "loan" */
  update_loan_by_pk?: Maybe<Loan>;
  /** update data of the table: "loan_collateral" */
  update_loan_collateral?: Maybe<Loan_Collateral_Mutation_Response>;
  /** update single row of the table: "loan_collateral" */
  update_loan_collateral_by_pk?: Maybe<Loan_Collateral>;
  /** update data of the table: "loan_disbursed" */
  update_loan_disbursed?: Maybe<Loan_Disbursed_Mutation_Response>;
  /** update single row of the table: "loan_disbursed" */
  update_loan_disbursed_by_pk?: Maybe<Loan_Disbursed>;
  /** update data of the table: "loan_purpose" */
  update_loan_purpose?: Maybe<Loan_Purpose_Mutation_Response>;
  /** update single row of the table: "loan_purpose" */
  update_loan_purpose_by_pk?: Maybe<Loan_Purpose>;
  /** update data of the table: "loan_repayment" */
  update_loan_repayment?: Maybe<Loan_Repayment_Mutation_Response>;
  /** update single row of the table: "loan_repayment" */
  update_loan_repayment_by_pk?: Maybe<Loan_Repayment>;
  /** update data of the table: "loan_status" */
  update_loan_status?: Maybe<Loan_Status_Mutation_Response>;
  /** update single row of the table: "loan_status" */
  update_loan_status_by_pk?: Maybe<Loan_Status>;
  /** update data of the table: "loan_type" */
  update_loan_type?: Maybe<Loan_Type_Mutation_Response>;
  /** update single row of the table: "loan_type" */
  update_loan_type_by_pk?: Maybe<Loan_Type>;
  /** update data of the table: "loan_window" */
  update_loan_window?: Maybe<Loan_Window_Mutation_Response>;
  /** update single row of the table: "loan_window" */
  update_loan_window_by_pk?: Maybe<Loan_Window>;
  /** update data of the table: "meta" */
  update_meta?: Maybe<Meta_Mutation_Response>;
  /** update single row of the table: "meta" */
  update_meta_by_pk?: Maybe<Meta>;
  /** update data of the table: "provinces" */
  update_provinces?: Maybe<Provinces_Mutation_Response>;
  /** update single row of the table: "provinces" */
  update_provinces_by_pk?: Maybe<Provinces>;
  /** update data of the table: "user_log" */
  update_user_log?: Maybe<User_Log_Mutation_Response>;
  /** update single row of the table: "user_log" */
  update_user_log_by_pk?: Maybe<User_Log>;
  /** update data of the table: "villages" */
  update_villages?: Maybe<Villages_Mutation_Response>;
  /** update single row of the table: "villages" */
  update_villages_by_pk?: Maybe<Villages>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_SettingArgs = {
  where: App_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_App_Setting_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BankArgs = {
  where: Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_BranchArgs = {
  where: Bank_Branch_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_Branch_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Bank_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Bank_TypeArgs = {
  where: Bank_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bank_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_BusinesArgs = {
  where: Busines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Busines_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Busines_ClassArgs = {
  where: Busines_Class_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Busines_Class_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Busines_SectorArgs = {
  where: Busines_Sector_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Busines_Sector_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Busines_SizeArgs = {
  where: Busines_Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Busines_Size_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Busines_TypeArgs = {
  where: Busines_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Busines_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DistrictsArgs = {
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Districts_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FundArgs = {
  where: Fund_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fund_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Fund_ContractArgs = {
  where: Fund_Contract_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fund_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Fund_Contract_RepaymentArgs = {
  where: Fund_Contract_Repayment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fund_Contract_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Fund_SrcArgs = {
  where: Fund_Src_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fund_Src_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_LoanArgs = {
  where: Loan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_CollateralArgs = {
  where: Loan_Collateral_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Collateral_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_DisbursedArgs = {
  where: Loan_Disbursed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Disbursed_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_PurposeArgs = {
  where: Loan_Purpose_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Purpose_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_RepaymentArgs = {
  where: Loan_Repayment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_StatusArgs = {
  where: Loan_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_TypeArgs = {
  where: Loan_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Loan_WindowArgs = {
  where: Loan_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Loan_Window_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_MetaArgs = {
  where: Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meta_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProvincesArgs = {
  where: Provinces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Provinces_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_LogArgs = {
  where: User_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VillagesArgs = {
  where: Villages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Villages_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_SettingArgs = {
  objects: Array<App_Setting_Insert_Input>;
  on_conflict?: InputMaybe<App_Setting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_App_Setting_OneArgs = {
  object: App_Setting_Insert_Input;
  on_conflict?: InputMaybe<App_Setting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BankArgs = {
  objects: Array<Bank_Insert_Input>;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_BranchArgs = {
  objects: Array<Bank_Branch_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Branch_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_Branch_OneArgs = {
  object: Bank_Branch_Insert_Input;
  on_conflict?: InputMaybe<Bank_Branch_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_OneArgs = {
  object: Bank_Insert_Input;
  on_conflict?: InputMaybe<Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_TypeArgs = {
  objects: Array<Bank_Type_Insert_Input>;
  on_conflict?: InputMaybe<Bank_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bank_Type_OneArgs = {
  object: Bank_Type_Insert_Input;
  on_conflict?: InputMaybe<Bank_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BusinesArgs = {
  objects: Array<Busines_Insert_Input>;
  on_conflict?: InputMaybe<Busines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_ClassArgs = {
  objects: Array<Busines_Class_Insert_Input>;
  on_conflict?: InputMaybe<Busines_Class_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_Class_OneArgs = {
  object: Busines_Class_Insert_Input;
  on_conflict?: InputMaybe<Busines_Class_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_OneArgs = {
  object: Busines_Insert_Input;
  on_conflict?: InputMaybe<Busines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_SectorArgs = {
  objects: Array<Busines_Sector_Insert_Input>;
  on_conflict?: InputMaybe<Busines_Sector_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_Sector_OneArgs = {
  object: Busines_Sector_Insert_Input;
  on_conflict?: InputMaybe<Busines_Sector_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_SizeArgs = {
  objects: Array<Busines_Size_Insert_Input>;
  on_conflict?: InputMaybe<Busines_Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_Size_OneArgs = {
  object: Busines_Size_Insert_Input;
  on_conflict?: InputMaybe<Busines_Size_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_TypeArgs = {
  objects: Array<Busines_Type_Insert_Input>;
  on_conflict?: InputMaybe<Busines_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Busines_Type_OneArgs = {
  object: Busines_Type_Insert_Input;
  on_conflict?: InputMaybe<Busines_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistrictsArgs = {
  objects: Array<Districts_Insert_Input>;
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Districts_OneArgs = {
  object: Districts_Insert_Input;
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FundArgs = {
  objects: Array<Fund_Insert_Input>;
  on_conflict?: InputMaybe<Fund_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_ContractArgs = {
  objects: Array<Fund_Contract_Insert_Input>;
  on_conflict?: InputMaybe<Fund_Contract_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_Contract_OneArgs = {
  object: Fund_Contract_Insert_Input;
  on_conflict?: InputMaybe<Fund_Contract_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_Contract_RepaymentArgs = {
  objects: Array<Fund_Contract_Repayment_Insert_Input>;
  on_conflict?: InputMaybe<Fund_Contract_Repayment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_Contract_Repayment_OneArgs = {
  object: Fund_Contract_Repayment_Insert_Input;
  on_conflict?: InputMaybe<Fund_Contract_Repayment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_OneArgs = {
  object: Fund_Insert_Input;
  on_conflict?: InputMaybe<Fund_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_SrcArgs = {
  objects: Array<Fund_Src_Insert_Input>;
  on_conflict?: InputMaybe<Fund_Src_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fund_Src_OneArgs = {
  object: Fund_Src_Insert_Input;
  on_conflict?: InputMaybe<Fund_Src_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LoanArgs = {
  objects: Array<Loan_Insert_Input>;
  on_conflict?: InputMaybe<Loan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_CollateralArgs = {
  objects: Array<Loan_Collateral_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Collateral_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Collateral_OneArgs = {
  object: Loan_Collateral_Insert_Input;
  on_conflict?: InputMaybe<Loan_Collateral_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_DisbursedArgs = {
  objects: Array<Loan_Disbursed_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Disbursed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Disbursed_OneArgs = {
  object: Loan_Disbursed_Insert_Input;
  on_conflict?: InputMaybe<Loan_Disbursed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_OneArgs = {
  object: Loan_Insert_Input;
  on_conflict?: InputMaybe<Loan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_PurposeArgs = {
  objects: Array<Loan_Purpose_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Purpose_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Purpose_OneArgs = {
  object: Loan_Purpose_Insert_Input;
  on_conflict?: InputMaybe<Loan_Purpose_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_RepaymentArgs = {
  objects: Array<Loan_Repayment_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Repayment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Repayment_OneArgs = {
  object: Loan_Repayment_Insert_Input;
  on_conflict?: InputMaybe<Loan_Repayment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_StatusArgs = {
  objects: Array<Loan_Status_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Status_OneArgs = {
  object: Loan_Status_Insert_Input;
  on_conflict?: InputMaybe<Loan_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_TypeArgs = {
  objects: Array<Loan_Type_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Type_OneArgs = {
  object: Loan_Type_Insert_Input;
  on_conflict?: InputMaybe<Loan_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_WindowArgs = {
  objects: Array<Loan_Window_Insert_Input>;
  on_conflict?: InputMaybe<Loan_Window_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Loan_Window_OneArgs = {
  object: Loan_Window_Insert_Input;
  on_conflict?: InputMaybe<Loan_Window_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MetaArgs = {
  objects: Array<Meta_Insert_Input>;
  on_conflict?: InputMaybe<Meta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meta_OneArgs = {
  object: Meta_Insert_Input;
  on_conflict?: InputMaybe<Meta_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProvincesArgs = {
  objects: Array<Provinces_Insert_Input>;
  on_conflict?: InputMaybe<Provinces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provinces_OneArgs = {
  object: Provinces_Insert_Input;
  on_conflict?: InputMaybe<Provinces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_LogArgs = {
  objects: Array<User_Log_Insert_Input>;
  on_conflict?: InputMaybe<User_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Log_OneArgs = {
  object: User_Log_Insert_Input;
  on_conflict?: InputMaybe<User_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VillagesArgs = {
  objects: Array<Villages_Insert_Input>;
  on_conflict?: InputMaybe<Villages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Villages_OneArgs = {
  object: Villages_Insert_Input;
  on_conflict?: InputMaybe<Villages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_SettingArgs = {
  _append?: InputMaybe<App_Setting_Append_Input>;
  _delete_at_path?: InputMaybe<App_Setting_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Setting_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Setting_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Setting_Prepend_Input>;
  _set?: InputMaybe<App_Setting_Set_Input>;
  where: App_Setting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_App_Setting_By_PkArgs = {
  _append?: InputMaybe<App_Setting_Append_Input>;
  _delete_at_path?: InputMaybe<App_Setting_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<App_Setting_Delete_Elem_Input>;
  _delete_key?: InputMaybe<App_Setting_Delete_Key_Input>;
  _prepend?: InputMaybe<App_Setting_Prepend_Input>;
  _set?: InputMaybe<App_Setting_Set_Input>;
  pk_columns: App_Setting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BankArgs = {
  _set?: InputMaybe<Bank_Set_Input>;
  where: Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_BranchArgs = {
  _set?: InputMaybe<Bank_Branch_Set_Input>;
  where: Bank_Branch_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_Branch_By_PkArgs = {
  _set?: InputMaybe<Bank_Branch_Set_Input>;
  pk_columns: Bank_Branch_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_By_PkArgs = {
  _set?: InputMaybe<Bank_Set_Input>;
  pk_columns: Bank_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_TypeArgs = {
  _set?: InputMaybe<Bank_Type_Set_Input>;
  where: Bank_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bank_Type_By_PkArgs = {
  _set?: InputMaybe<Bank_Type_Set_Input>;
  pk_columns: Bank_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BusinesArgs = {
  _inc?: InputMaybe<Busines_Inc_Input>;
  _set?: InputMaybe<Busines_Set_Input>;
  where: Busines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_By_PkArgs = {
  _inc?: InputMaybe<Busines_Inc_Input>;
  _set?: InputMaybe<Busines_Set_Input>;
  pk_columns: Busines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_ClassArgs = {
  _set?: InputMaybe<Busines_Class_Set_Input>;
  where: Busines_Class_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_Class_By_PkArgs = {
  _set?: InputMaybe<Busines_Class_Set_Input>;
  pk_columns: Busines_Class_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_SectorArgs = {
  _set?: InputMaybe<Busines_Sector_Set_Input>;
  where: Busines_Sector_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_Sector_By_PkArgs = {
  _set?: InputMaybe<Busines_Sector_Set_Input>;
  pk_columns: Busines_Sector_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_SizeArgs = {
  _set?: InputMaybe<Busines_Size_Set_Input>;
  where: Busines_Size_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_Size_By_PkArgs = {
  _set?: InputMaybe<Busines_Size_Set_Input>;
  pk_columns: Busines_Size_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_TypeArgs = {
  _set?: InputMaybe<Busines_Type_Set_Input>;
  where: Busines_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Busines_Type_By_PkArgs = {
  _set?: InputMaybe<Busines_Type_Set_Input>;
  pk_columns: Busines_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DistrictsArgs = {
  _set?: InputMaybe<Districts_Set_Input>;
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Districts_By_PkArgs = {
  _set?: InputMaybe<Districts_Set_Input>;
  pk_columns: Districts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FundArgs = {
  _inc?: InputMaybe<Fund_Inc_Input>;
  _set?: InputMaybe<Fund_Set_Input>;
  where: Fund_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_By_PkArgs = {
  _inc?: InputMaybe<Fund_Inc_Input>;
  _set?: InputMaybe<Fund_Set_Input>;
  pk_columns: Fund_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_ContractArgs = {
  _inc?: InputMaybe<Fund_Contract_Inc_Input>;
  _set?: InputMaybe<Fund_Contract_Set_Input>;
  where: Fund_Contract_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_Contract_By_PkArgs = {
  _inc?: InputMaybe<Fund_Contract_Inc_Input>;
  _set?: InputMaybe<Fund_Contract_Set_Input>;
  pk_columns: Fund_Contract_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_Contract_RepaymentArgs = {
  _inc?: InputMaybe<Fund_Contract_Repayment_Inc_Input>;
  _set?: InputMaybe<Fund_Contract_Repayment_Set_Input>;
  where: Fund_Contract_Repayment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_Contract_Repayment_By_PkArgs = {
  _inc?: InputMaybe<Fund_Contract_Repayment_Inc_Input>;
  _set?: InputMaybe<Fund_Contract_Repayment_Set_Input>;
  pk_columns: Fund_Contract_Repayment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_SrcArgs = {
  _set?: InputMaybe<Fund_Src_Set_Input>;
  where: Fund_Src_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fund_Src_By_PkArgs = {
  _set?: InputMaybe<Fund_Src_Set_Input>;
  pk_columns: Fund_Src_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LoanArgs = {
  _inc?: InputMaybe<Loan_Inc_Input>;
  _set?: InputMaybe<Loan_Set_Input>;
  where: Loan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_By_PkArgs = {
  _inc?: InputMaybe<Loan_Inc_Input>;
  _set?: InputMaybe<Loan_Set_Input>;
  pk_columns: Loan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_CollateralArgs = {
  _set?: InputMaybe<Loan_Collateral_Set_Input>;
  where: Loan_Collateral_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Collateral_By_PkArgs = {
  _set?: InputMaybe<Loan_Collateral_Set_Input>;
  pk_columns: Loan_Collateral_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_DisbursedArgs = {
  _inc?: InputMaybe<Loan_Disbursed_Inc_Input>;
  _set?: InputMaybe<Loan_Disbursed_Set_Input>;
  where: Loan_Disbursed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Disbursed_By_PkArgs = {
  _inc?: InputMaybe<Loan_Disbursed_Inc_Input>;
  _set?: InputMaybe<Loan_Disbursed_Set_Input>;
  pk_columns: Loan_Disbursed_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_PurposeArgs = {
  _set?: InputMaybe<Loan_Purpose_Set_Input>;
  where: Loan_Purpose_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Purpose_By_PkArgs = {
  _set?: InputMaybe<Loan_Purpose_Set_Input>;
  pk_columns: Loan_Purpose_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_RepaymentArgs = {
  _inc?: InputMaybe<Loan_Repayment_Inc_Input>;
  _set?: InputMaybe<Loan_Repayment_Set_Input>;
  where: Loan_Repayment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Repayment_By_PkArgs = {
  _inc?: InputMaybe<Loan_Repayment_Inc_Input>;
  _set?: InputMaybe<Loan_Repayment_Set_Input>;
  pk_columns: Loan_Repayment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_StatusArgs = {
  _set?: InputMaybe<Loan_Status_Set_Input>;
  where: Loan_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Status_By_PkArgs = {
  _set?: InputMaybe<Loan_Status_Set_Input>;
  pk_columns: Loan_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_TypeArgs = {
  _set?: InputMaybe<Loan_Type_Set_Input>;
  where: Loan_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Type_By_PkArgs = {
  _set?: InputMaybe<Loan_Type_Set_Input>;
  pk_columns: Loan_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_WindowArgs = {
  _set?: InputMaybe<Loan_Window_Set_Input>;
  where: Loan_Window_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Loan_Window_By_PkArgs = {
  _set?: InputMaybe<Loan_Window_Set_Input>;
  pk_columns: Loan_Window_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MetaArgs = {
  _append?: InputMaybe<Meta_Append_Input>;
  _delete_at_path?: InputMaybe<Meta_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Meta_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Meta_Delete_Key_Input>;
  _prepend?: InputMaybe<Meta_Prepend_Input>;
  _set?: InputMaybe<Meta_Set_Input>;
  where: Meta_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meta_By_PkArgs = {
  _append?: InputMaybe<Meta_Append_Input>;
  _delete_at_path?: InputMaybe<Meta_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Meta_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Meta_Delete_Key_Input>;
  _prepend?: InputMaybe<Meta_Prepend_Input>;
  _set?: InputMaybe<Meta_Set_Input>;
  pk_columns: Meta_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProvincesArgs = {
  _set?: InputMaybe<Provinces_Set_Input>;
  where: Provinces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Provinces_By_PkArgs = {
  _set?: InputMaybe<Provinces_Set_Input>;
  pk_columns: Provinces_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_LogArgs = {
  _append?: InputMaybe<User_Log_Append_Input>;
  _delete_at_path?: InputMaybe<User_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Log_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Log_Prepend_Input>;
  _set?: InputMaybe<User_Log_Set_Input>;
  where: User_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Log_By_PkArgs = {
  _append?: InputMaybe<User_Log_Append_Input>;
  _delete_at_path?: InputMaybe<User_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Log_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Log_Prepend_Input>;
  _set?: InputMaybe<User_Log_Set_Input>;
  pk_columns: User_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VillagesArgs = {
  _set?: InputMaybe<Villages_Set_Input>;
  where: Villages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Villages_By_PkArgs = {
  _set?: InputMaybe<Villages_Set_Input>;
  pk_columns: Villages_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "provinces" */
export type Provinces = {
  __typename?: 'provinces';
  created_at?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  districts: Array<Districts>;
  /** An aggregate relationship */
  districts_aggregate: Districts_Aggregate;
  en?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lo?: Maybe<Scalars['String']>;
  prov_sym?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "provinces" */
export type ProvincesDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


/** columns and relationships of "provinces" */
export type ProvincesDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};

/** aggregated selection of "provinces" */
export type Provinces_Aggregate = {
  __typename?: 'provinces_aggregate';
  aggregate?: Maybe<Provinces_Aggregate_Fields>;
  nodes: Array<Provinces>;
};

/** aggregate fields of "provinces" */
export type Provinces_Aggregate_Fields = {
  __typename?: 'provinces_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Provinces_Max_Fields>;
  min?: Maybe<Provinces_Min_Fields>;
};


/** aggregate fields of "provinces" */
export type Provinces_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provinces_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "provinces". All fields are combined with a logical 'AND'. */
export type Provinces_Bool_Exp = {
  _and?: InputMaybe<Array<Provinces_Bool_Exp>>;
  _not?: InputMaybe<Provinces_Bool_Exp>;
  _or?: InputMaybe<Array<Provinces_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  districts?: InputMaybe<Districts_Bool_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  prov_sym?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "provinces" */
export enum Provinces_Constraint {
  /** unique or primary key constraint */
  ProvincesPkey = 'provinces_pkey'
}

/** input type for inserting data into table "provinces" */
export type Provinces_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  districts?: InputMaybe<Districts_Arr_Rel_Insert_Input>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  prov_sym?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Provinces_Max_Fields = {
  __typename?: 'provinces_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  prov_sym?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Provinces_Min_Fields = {
  __typename?: 'provinces_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  prov_sym?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "provinces" */
export type Provinces_Mutation_Response = {
  __typename?: 'provinces_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Provinces>;
};

/** input type for inserting object relation for remote table "provinces" */
export type Provinces_Obj_Rel_Insert_Input = {
  data: Provinces_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Provinces_On_Conflict>;
};

/** on_conflict condition type for table "provinces" */
export type Provinces_On_Conflict = {
  constraint: Provinces_Constraint;
  update_columns?: Array<Provinces_Update_Column>;
  where?: InputMaybe<Provinces_Bool_Exp>;
};

/** Ordering options when selecting data from "provinces". */
export type Provinces_Order_By = {
  created_at?: InputMaybe<Order_By>;
  districts_aggregate?: InputMaybe<Districts_Aggregate_Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  prov_sym?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: provinces */
export type Provinces_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "provinces" */
export enum Provinces_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  ProvSym = 'prov_sym',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "provinces" */
export type Provinces_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  prov_sym?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "provinces" */
export enum Provinces_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  ProvSym = 'prov_sym',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_setting" */
  app_setting: Array<App_Setting>;
  /** fetch aggregated fields from the table: "app_setting" */
  app_setting_aggregate: App_Setting_Aggregate;
  /** fetch data from the table: "app_setting" using primary key columns */
  app_setting_by_pk?: Maybe<App_Setting>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "bank" */
  bank: Array<Bank>;
  /** fetch aggregated fields from the table: "bank" */
  bank_aggregate: Bank_Aggregate;
  /** fetch data from the table: "bank_branch" */
  bank_branch: Array<Bank_Branch>;
  /** fetch aggregated fields from the table: "bank_branch" */
  bank_branch_aggregate: Bank_Branch_Aggregate;
  /** fetch data from the table: "bank_branch" using primary key columns */
  bank_branch_by_pk?: Maybe<Bank_Branch>;
  /** fetch data from the table: "bank" using primary key columns */
  bank_by_pk?: Maybe<Bank>;
  /** fetch data from the table: "bank_type" */
  bank_type: Array<Bank_Type>;
  /** fetch aggregated fields from the table: "bank_type" */
  bank_type_aggregate: Bank_Type_Aggregate;
  /** fetch data from the table: "bank_type" using primary key columns */
  bank_type_by_pk?: Maybe<Bank_Type>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  /** fetch data from the table: "busines" using primary key columns */
  busines_by_pk?: Maybe<Busines>;
  /** fetch data from the table: "busines_class" */
  busines_class: Array<Busines_Class>;
  /** fetch aggregated fields from the table: "busines_class" */
  busines_class_aggregate: Busines_Class_Aggregate;
  /** fetch data from the table: "busines_class" using primary key columns */
  busines_class_by_pk?: Maybe<Busines_Class>;
  /** fetch data from the table: "busines_sector" */
  busines_sector: Array<Busines_Sector>;
  /** fetch aggregated fields from the table: "busines_sector" */
  busines_sector_aggregate: Busines_Sector_Aggregate;
  /** fetch data from the table: "busines_sector" using primary key columns */
  busines_sector_by_pk?: Maybe<Busines_Sector>;
  /** fetch data from the table: "busines_size" */
  busines_size: Array<Busines_Size>;
  /** fetch aggregated fields from the table: "busines_size" */
  busines_size_aggregate: Busines_Size_Aggregate;
  /** fetch data from the table: "busines_size" using primary key columns */
  busines_size_by_pk?: Maybe<Busines_Size>;
  /** fetch data from the table: "busines_type" */
  busines_type: Array<Busines_Type>;
  /** fetch aggregated fields from the table: "busines_type" */
  busines_type_aggregate: Busines_Type_Aggregate;
  /** fetch data from the table: "busines_type" using primary key columns */
  busines_type_by_pk?: Maybe<Busines_Type>;
  /** An array relationship */
  districts: Array<Districts>;
  /** An aggregate relationship */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "fund" */
  fund: Array<Fund>;
  /** fetch aggregated fields from the table: "fund" */
  fund_aggregate: Fund_Aggregate;
  /** fetch data from the table: "fund" using primary key columns */
  fund_by_pk?: Maybe<Fund>;
  /** fetch data from the table: "fund_contract" */
  fund_contract: Array<Fund_Contract>;
  /** fetch aggregated fields from the table: "fund_contract" */
  fund_contract_aggregate: Fund_Contract_Aggregate;
  /** fetch data from the table: "fund_contract" using primary key columns */
  fund_contract_by_pk?: Maybe<Fund_Contract>;
  /** fetch data from the table: "fund_contract_repayment" */
  fund_contract_repayment: Array<Fund_Contract_Repayment>;
  /** fetch aggregated fields from the table: "fund_contract_repayment" */
  fund_contract_repayment_aggregate: Fund_Contract_Repayment_Aggregate;
  /** fetch data from the table: "fund_contract_repayment" using primary key columns */
  fund_contract_repayment_by_pk?: Maybe<Fund_Contract_Repayment>;
  /** fetch data from the table: "fund_src" */
  fund_src: Array<Fund_Src>;
  /** fetch aggregated fields from the table: "fund_src" */
  fund_src_aggregate: Fund_Src_Aggregate;
  /** fetch data from the table: "fund_src" using primary key columns */
  fund_src_by_pk?: Maybe<Fund_Src>;
  /** fetch data from the table: "loan" */
  loan: Array<Loan>;
  /** fetch aggregated fields from the table: "loan" */
  loan_aggregate: Loan_Aggregate;
  /** fetch data from the table: "loan" using primary key columns */
  loan_by_pk?: Maybe<Loan>;
  /** fetch data from the table: "loan_collateral" */
  loan_collateral: Array<Loan_Collateral>;
  /** fetch aggregated fields from the table: "loan_collateral" */
  loan_collateral_aggregate: Loan_Collateral_Aggregate;
  /** fetch data from the table: "loan_collateral" using primary key columns */
  loan_collateral_by_pk?: Maybe<Loan_Collateral>;
  /** fetch data from the table: "loan_disbursed" */
  loan_disbursed: Array<Loan_Disbursed>;
  /** fetch aggregated fields from the table: "loan_disbursed" */
  loan_disbursed_aggregate: Loan_Disbursed_Aggregate;
  /** fetch data from the table: "loan_disbursed" using primary key columns */
  loan_disbursed_by_pk?: Maybe<Loan_Disbursed>;
  /** fetch data from the table: "loan_purpose" */
  loan_purpose: Array<Loan_Purpose>;
  /** fetch aggregated fields from the table: "loan_purpose" */
  loan_purpose_aggregate: Loan_Purpose_Aggregate;
  /** fetch data from the table: "loan_purpose" using primary key columns */
  loan_purpose_by_pk?: Maybe<Loan_Purpose>;
  /** fetch data from the table: "loan_repayment" */
  loan_repayment: Array<Loan_Repayment>;
  /** fetch aggregated fields from the table: "loan_repayment" */
  loan_repayment_aggregate: Loan_Repayment_Aggregate;
  /** fetch data from the table: "loan_repayment" using primary key columns */
  loan_repayment_by_pk?: Maybe<Loan_Repayment>;
  /** fetch data from the table: "loan_status" */
  loan_status: Array<Loan_Status>;
  /** fetch aggregated fields from the table: "loan_status" */
  loan_status_aggregate: Loan_Status_Aggregate;
  /** fetch data from the table: "loan_status" using primary key columns */
  loan_status_by_pk?: Maybe<Loan_Status>;
  /** fetch data from the table: "loan_type" */
  loan_type: Array<Loan_Type>;
  /** fetch aggregated fields from the table: "loan_type" */
  loan_type_aggregate: Loan_Type_Aggregate;
  /** fetch data from the table: "loan_type" using primary key columns */
  loan_type_by_pk?: Maybe<Loan_Type>;
  /** fetch data from the table: "loan_window" */
  loan_window: Array<Loan_Window>;
  /** fetch aggregated fields from the table: "loan_window" */
  loan_window_aggregate: Loan_Window_Aggregate;
  /** fetch data from the table: "loan_window" using primary key columns */
  loan_window_by_pk?: Maybe<Loan_Window>;
  /** fetch data from the table: "meta" */
  meta: Array<Meta>;
  /** fetch aggregated fields from the table: "meta" */
  meta_aggregate: Meta_Aggregate;
  /** fetch data from the table: "meta" using primary key columns */
  meta_by_pk?: Maybe<Meta>;
  /** fetch data from the table: "provinces" */
  provinces: Array<Provinces>;
  /** fetch aggregated fields from the table: "provinces" */
  provinces_aggregate: Provinces_Aggregate;
  /** fetch data from the table: "provinces" using primary key columns */
  provinces_by_pk?: Maybe<Provinces>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_log" */
  user_log: Array<User_Log>;
  /** fetch aggregated fields from the table: "user_log" */
  user_log_aggregate: User_Log_Aggregate;
  /** fetch data from the table: "user_log" using primary key columns */
  user_log_by_pk?: Maybe<User_Log>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** An array relationship */
  villages: Array<Villages>;
  /** An aggregate relationship */
  villages_aggregate: Villages_Aggregate;
  /** fetch data from the table: "villages" using primary key columns */
  villages_by_pk?: Maybe<Villages>;
};


export type Query_RootApp_SettingArgs = {
  distinct_on?: InputMaybe<Array<App_Setting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Setting_Order_By>>;
  where?: InputMaybe<App_Setting_Bool_Exp>;
};


export type Query_RootApp_Setting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Setting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Setting_Order_By>>;
  where?: InputMaybe<App_Setting_Bool_Exp>;
};


export type Query_RootApp_Setting_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootBankArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


export type Query_RootBank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


export type Query_RootBank_BranchArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


export type Query_RootBank_Branch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


export type Query_RootBank_Branch_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBank_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBank_TypeArgs = {
  distinct_on?: InputMaybe<Array<Bank_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Type_Order_By>>;
  where?: InputMaybe<Bank_Type_Bool_Exp>;
};


export type Query_RootBank_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Type_Order_By>>;
  where?: InputMaybe<Bank_Type_Bool_Exp>;
};


export type Query_RootBank_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


export type Query_RootBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


export type Query_RootBusines_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBusines_ClassArgs = {
  distinct_on?: InputMaybe<Array<Busines_Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Class_Order_By>>;
  where?: InputMaybe<Busines_Class_Bool_Exp>;
};


export type Query_RootBusines_Class_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Class_Order_By>>;
  where?: InputMaybe<Busines_Class_Bool_Exp>;
};


export type Query_RootBusines_Class_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBusines_SectorArgs = {
  distinct_on?: InputMaybe<Array<Busines_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Sector_Order_By>>;
  where?: InputMaybe<Busines_Sector_Bool_Exp>;
};


export type Query_RootBusines_Sector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Sector_Order_By>>;
  where?: InputMaybe<Busines_Sector_Bool_Exp>;
};


export type Query_RootBusines_Sector_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBusines_SizeArgs = {
  distinct_on?: InputMaybe<Array<Busines_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Size_Order_By>>;
  where?: InputMaybe<Busines_Size_Bool_Exp>;
};


export type Query_RootBusines_Size_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Size_Order_By>>;
  where?: InputMaybe<Busines_Size_Bool_Exp>;
};


export type Query_RootBusines_Size_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootBusines_TypeArgs = {
  distinct_on?: InputMaybe<Array<Busines_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Type_Order_By>>;
  where?: InputMaybe<Busines_Type_Bool_Exp>;
};


export type Query_RootBusines_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Type_Order_By>>;
  where?: InputMaybe<Busines_Type_Bool_Exp>;
};


export type Query_RootBusines_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Query_RootDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Query_RootDistricts_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootFundArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};


export type Query_RootFund_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};


export type Query_RootFund_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFund_ContractArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


export type Query_RootFund_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


export type Query_RootFund_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFund_Contract_RepaymentArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


export type Query_RootFund_Contract_Repayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


export type Query_RootFund_Contract_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFund_SrcArgs = {
  distinct_on?: InputMaybe<Array<Fund_Src_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Src_Order_By>>;
  where?: InputMaybe<Fund_Src_Bool_Exp>;
};


export type Query_RootFund_Src_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Src_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Src_Order_By>>;
  where?: InputMaybe<Fund_Src_Bool_Exp>;
};


export type Query_RootFund_Src_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLoanArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


export type Query_RootLoan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


export type Query_RootLoan_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLoan_CollateralArgs = {
  distinct_on?: InputMaybe<Array<Loan_Collateral_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Collateral_Order_By>>;
  where?: InputMaybe<Loan_Collateral_Bool_Exp>;
};


export type Query_RootLoan_Collateral_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Collateral_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Collateral_Order_By>>;
  where?: InputMaybe<Loan_Collateral_Bool_Exp>;
};


export type Query_RootLoan_Collateral_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLoan_DisbursedArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


export type Query_RootLoan_Disbursed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


export type Query_RootLoan_Disbursed_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLoan_PurposeArgs = {
  distinct_on?: InputMaybe<Array<Loan_Purpose_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Purpose_Order_By>>;
  where?: InputMaybe<Loan_Purpose_Bool_Exp>;
};


export type Query_RootLoan_Purpose_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Purpose_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Purpose_Order_By>>;
  where?: InputMaybe<Loan_Purpose_Bool_Exp>;
};


export type Query_RootLoan_Purpose_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLoan_RepaymentArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};


export type Query_RootLoan_Repayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};


export type Query_RootLoan_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLoan_StatusArgs = {
  distinct_on?: InputMaybe<Array<Loan_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Status_Order_By>>;
  where?: InputMaybe<Loan_Status_Bool_Exp>;
};


export type Query_RootLoan_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Status_Order_By>>;
  where?: InputMaybe<Loan_Status_Bool_Exp>;
};


export type Query_RootLoan_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLoan_TypeArgs = {
  distinct_on?: InputMaybe<Array<Loan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Type_Order_By>>;
  where?: InputMaybe<Loan_Type_Bool_Exp>;
};


export type Query_RootLoan_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Type_Order_By>>;
  where?: InputMaybe<Loan_Type_Bool_Exp>;
};


export type Query_RootLoan_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootLoan_WindowArgs = {
  distinct_on?: InputMaybe<Array<Loan_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Window_Order_By>>;
  where?: InputMaybe<Loan_Window_Bool_Exp>;
};


export type Query_RootLoan_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Window_Order_By>>;
  where?: InputMaybe<Loan_Window_Bool_Exp>;
};


export type Query_RootLoan_Window_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootMetaArgs = {
  distinct_on?: InputMaybe<Array<Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meta_Order_By>>;
  where?: InputMaybe<Meta_Bool_Exp>;
};


export type Query_RootMeta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meta_Order_By>>;
  where?: InputMaybe<Meta_Bool_Exp>;
};


export type Query_RootMeta_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProvincesArgs = {
  distinct_on?: InputMaybe<Array<Provinces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provinces_Order_By>>;
  where?: InputMaybe<Provinces_Bool_Exp>;
};


export type Query_RootProvinces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provinces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provinces_Order_By>>;
  where?: InputMaybe<Provinces_Bool_Exp>;
};


export type Query_RootProvinces_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_LogArgs = {
  distinct_on?: InputMaybe<Array<User_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Log_Order_By>>;
  where?: InputMaybe<User_Log_Bool_Exp>;
};


export type Query_RootUser_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Log_Order_By>>;
  where?: InputMaybe<User_Log_Bool_Exp>;
};


export type Query_RootUser_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVillagesArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};


export type Query_RootVillages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};


export type Query_RootVillages_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_setting" */
  app_setting: Array<App_Setting>;
  /** fetch aggregated fields from the table: "app_setting" */
  app_setting_aggregate: App_Setting_Aggregate;
  /** fetch data from the table: "app_setting" using primary key columns */
  app_setting_by_pk?: Maybe<App_Setting>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "bank" */
  bank: Array<Bank>;
  /** fetch aggregated fields from the table: "bank" */
  bank_aggregate: Bank_Aggregate;
  /** fetch data from the table: "bank_branch" */
  bank_branch: Array<Bank_Branch>;
  /** fetch aggregated fields from the table: "bank_branch" */
  bank_branch_aggregate: Bank_Branch_Aggregate;
  /** fetch data from the table: "bank_branch" using primary key columns */
  bank_branch_by_pk?: Maybe<Bank_Branch>;
  /** fetch data from the table: "bank" using primary key columns */
  bank_by_pk?: Maybe<Bank>;
  /** fetch data from the table: "bank_type" */
  bank_type: Array<Bank_Type>;
  /** fetch aggregated fields from the table: "bank_type" */
  bank_type_aggregate: Bank_Type_Aggregate;
  /** fetch data from the table: "bank_type" using primary key columns */
  bank_type_by_pk?: Maybe<Bank_Type>;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  /** fetch data from the table: "busines" using primary key columns */
  busines_by_pk?: Maybe<Busines>;
  /** fetch data from the table: "busines_class" */
  busines_class: Array<Busines_Class>;
  /** fetch aggregated fields from the table: "busines_class" */
  busines_class_aggregate: Busines_Class_Aggregate;
  /** fetch data from the table: "busines_class" using primary key columns */
  busines_class_by_pk?: Maybe<Busines_Class>;
  /** fetch data from the table: "busines_sector" */
  busines_sector: Array<Busines_Sector>;
  /** fetch aggregated fields from the table: "busines_sector" */
  busines_sector_aggregate: Busines_Sector_Aggregate;
  /** fetch data from the table: "busines_sector" using primary key columns */
  busines_sector_by_pk?: Maybe<Busines_Sector>;
  /** fetch data from the table: "busines_size" */
  busines_size: Array<Busines_Size>;
  /** fetch aggregated fields from the table: "busines_size" */
  busines_size_aggregate: Busines_Size_Aggregate;
  /** fetch data from the table: "busines_size" using primary key columns */
  busines_size_by_pk?: Maybe<Busines_Size>;
  /** fetch data from the table: "busines_type" */
  busines_type: Array<Busines_Type>;
  /** fetch aggregated fields from the table: "busines_type" */
  busines_type_aggregate: Busines_Type_Aggregate;
  /** fetch data from the table: "busines_type" using primary key columns */
  busines_type_by_pk?: Maybe<Busines_Type>;
  /** An array relationship */
  districts: Array<Districts>;
  /** An aggregate relationship */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "fund" */
  fund: Array<Fund>;
  /** fetch aggregated fields from the table: "fund" */
  fund_aggregate: Fund_Aggregate;
  /** fetch data from the table: "fund" using primary key columns */
  fund_by_pk?: Maybe<Fund>;
  /** fetch data from the table: "fund_contract" */
  fund_contract: Array<Fund_Contract>;
  /** fetch aggregated fields from the table: "fund_contract" */
  fund_contract_aggregate: Fund_Contract_Aggregate;
  /** fetch data from the table: "fund_contract" using primary key columns */
  fund_contract_by_pk?: Maybe<Fund_Contract>;
  /** fetch data from the table: "fund_contract_repayment" */
  fund_contract_repayment: Array<Fund_Contract_Repayment>;
  /** fetch aggregated fields from the table: "fund_contract_repayment" */
  fund_contract_repayment_aggregate: Fund_Contract_Repayment_Aggregate;
  /** fetch data from the table: "fund_contract_repayment" using primary key columns */
  fund_contract_repayment_by_pk?: Maybe<Fund_Contract_Repayment>;
  /** fetch data from the table: "fund_src" */
  fund_src: Array<Fund_Src>;
  /** fetch aggregated fields from the table: "fund_src" */
  fund_src_aggregate: Fund_Src_Aggregate;
  /** fetch data from the table: "fund_src" using primary key columns */
  fund_src_by_pk?: Maybe<Fund_Src>;
  /** fetch data from the table: "loan" */
  loan: Array<Loan>;
  /** fetch aggregated fields from the table: "loan" */
  loan_aggregate: Loan_Aggregate;
  /** fetch data from the table: "loan" using primary key columns */
  loan_by_pk?: Maybe<Loan>;
  /** fetch data from the table: "loan_collateral" */
  loan_collateral: Array<Loan_Collateral>;
  /** fetch aggregated fields from the table: "loan_collateral" */
  loan_collateral_aggregate: Loan_Collateral_Aggregate;
  /** fetch data from the table: "loan_collateral" using primary key columns */
  loan_collateral_by_pk?: Maybe<Loan_Collateral>;
  /** fetch data from the table: "loan_disbursed" */
  loan_disbursed: Array<Loan_Disbursed>;
  /** fetch aggregated fields from the table: "loan_disbursed" */
  loan_disbursed_aggregate: Loan_Disbursed_Aggregate;
  /** fetch data from the table: "loan_disbursed" using primary key columns */
  loan_disbursed_by_pk?: Maybe<Loan_Disbursed>;
  /** fetch data from the table: "loan_purpose" */
  loan_purpose: Array<Loan_Purpose>;
  /** fetch aggregated fields from the table: "loan_purpose" */
  loan_purpose_aggregate: Loan_Purpose_Aggregate;
  /** fetch data from the table: "loan_purpose" using primary key columns */
  loan_purpose_by_pk?: Maybe<Loan_Purpose>;
  /** fetch data from the table: "loan_repayment" */
  loan_repayment: Array<Loan_Repayment>;
  /** fetch aggregated fields from the table: "loan_repayment" */
  loan_repayment_aggregate: Loan_Repayment_Aggregate;
  /** fetch data from the table: "loan_repayment" using primary key columns */
  loan_repayment_by_pk?: Maybe<Loan_Repayment>;
  /** fetch data from the table: "loan_status" */
  loan_status: Array<Loan_Status>;
  /** fetch aggregated fields from the table: "loan_status" */
  loan_status_aggregate: Loan_Status_Aggregate;
  /** fetch data from the table: "loan_status" using primary key columns */
  loan_status_by_pk?: Maybe<Loan_Status>;
  /** fetch data from the table: "loan_type" */
  loan_type: Array<Loan_Type>;
  /** fetch aggregated fields from the table: "loan_type" */
  loan_type_aggregate: Loan_Type_Aggregate;
  /** fetch data from the table: "loan_type" using primary key columns */
  loan_type_by_pk?: Maybe<Loan_Type>;
  /** fetch data from the table: "loan_window" */
  loan_window: Array<Loan_Window>;
  /** fetch aggregated fields from the table: "loan_window" */
  loan_window_aggregate: Loan_Window_Aggregate;
  /** fetch data from the table: "loan_window" using primary key columns */
  loan_window_by_pk?: Maybe<Loan_Window>;
  /** fetch data from the table: "meta" */
  meta: Array<Meta>;
  /** fetch aggregated fields from the table: "meta" */
  meta_aggregate: Meta_Aggregate;
  /** fetch data from the table: "meta" using primary key columns */
  meta_by_pk?: Maybe<Meta>;
  /** fetch data from the table: "provinces" */
  provinces: Array<Provinces>;
  /** fetch aggregated fields from the table: "provinces" */
  provinces_aggregate: Provinces_Aggregate;
  /** fetch data from the table: "provinces" using primary key columns */
  provinces_by_pk?: Maybe<Provinces>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_log" */
  user_log: Array<User_Log>;
  /** fetch aggregated fields from the table: "user_log" */
  user_log_aggregate: User_Log_Aggregate;
  /** fetch data from the table: "user_log" using primary key columns */
  user_log_by_pk?: Maybe<User_Log>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** An array relationship */
  villages: Array<Villages>;
  /** An aggregate relationship */
  villages_aggregate: Villages_Aggregate;
  /** fetch data from the table: "villages" using primary key columns */
  villages_by_pk?: Maybe<Villages>;
};


export type Subscription_RootApp_SettingArgs = {
  distinct_on?: InputMaybe<Array<App_Setting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Setting_Order_By>>;
  where?: InputMaybe<App_Setting_Bool_Exp>;
};


export type Subscription_RootApp_Setting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<App_Setting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<App_Setting_Order_By>>;
  where?: InputMaybe<App_Setting_Bool_Exp>;
};


export type Subscription_RootApp_Setting_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootBankArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


export type Subscription_RootBank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


export type Subscription_RootBank_BranchArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


export type Subscription_RootBank_Branch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


export type Subscription_RootBank_Branch_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBank_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBank_TypeArgs = {
  distinct_on?: InputMaybe<Array<Bank_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Type_Order_By>>;
  where?: InputMaybe<Bank_Type_Bool_Exp>;
};


export type Subscription_RootBank_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Type_Order_By>>;
  where?: InputMaybe<Bank_Type_Bool_Exp>;
};


export type Subscription_RootBank_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


export type Subscription_RootBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


export type Subscription_RootBusines_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBusines_ClassArgs = {
  distinct_on?: InputMaybe<Array<Busines_Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Class_Order_By>>;
  where?: InputMaybe<Busines_Class_Bool_Exp>;
};


export type Subscription_RootBusines_Class_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Class_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Class_Order_By>>;
  where?: InputMaybe<Busines_Class_Bool_Exp>;
};


export type Subscription_RootBusines_Class_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBusines_SectorArgs = {
  distinct_on?: InputMaybe<Array<Busines_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Sector_Order_By>>;
  where?: InputMaybe<Busines_Sector_Bool_Exp>;
};


export type Subscription_RootBusines_Sector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Sector_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Sector_Order_By>>;
  where?: InputMaybe<Busines_Sector_Bool_Exp>;
};


export type Subscription_RootBusines_Sector_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBusines_SizeArgs = {
  distinct_on?: InputMaybe<Array<Busines_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Size_Order_By>>;
  where?: InputMaybe<Busines_Size_Bool_Exp>;
};


export type Subscription_RootBusines_Size_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Size_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Size_Order_By>>;
  where?: InputMaybe<Busines_Size_Bool_Exp>;
};


export type Subscription_RootBusines_Size_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBusines_TypeArgs = {
  distinct_on?: InputMaybe<Array<Busines_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Type_Order_By>>;
  where?: InputMaybe<Busines_Type_Bool_Exp>;
};


export type Subscription_RootBusines_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Type_Order_By>>;
  where?: InputMaybe<Busines_Type_Bool_Exp>;
};


export type Subscription_RootBusines_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Subscription_RootDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Subscription_RootDistricts_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootFundArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};


export type Subscription_RootFund_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Order_By>>;
  where?: InputMaybe<Fund_Bool_Exp>;
};


export type Subscription_RootFund_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFund_ContractArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


export type Subscription_RootFund_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Order_By>>;
  where?: InputMaybe<Fund_Contract_Bool_Exp>;
};


export type Subscription_RootFund_Contract_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFund_Contract_RepaymentArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


export type Subscription_RootFund_Contract_Repayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Contract_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Contract_Repayment_Order_By>>;
  where?: InputMaybe<Fund_Contract_Repayment_Bool_Exp>;
};


export type Subscription_RootFund_Contract_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFund_SrcArgs = {
  distinct_on?: InputMaybe<Array<Fund_Src_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Src_Order_By>>;
  where?: InputMaybe<Fund_Src_Bool_Exp>;
};


export type Subscription_RootFund_Src_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fund_Src_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fund_Src_Order_By>>;
  where?: InputMaybe<Fund_Src_Bool_Exp>;
};


export type Subscription_RootFund_Src_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLoanArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


export type Subscription_RootLoan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Order_By>>;
  where?: InputMaybe<Loan_Bool_Exp>;
};


export type Subscription_RootLoan_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLoan_CollateralArgs = {
  distinct_on?: InputMaybe<Array<Loan_Collateral_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Collateral_Order_By>>;
  where?: InputMaybe<Loan_Collateral_Bool_Exp>;
};


export type Subscription_RootLoan_Collateral_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Collateral_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Collateral_Order_By>>;
  where?: InputMaybe<Loan_Collateral_Bool_Exp>;
};


export type Subscription_RootLoan_Collateral_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLoan_DisbursedArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


export type Subscription_RootLoan_Disbursed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Disbursed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Disbursed_Order_By>>;
  where?: InputMaybe<Loan_Disbursed_Bool_Exp>;
};


export type Subscription_RootLoan_Disbursed_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLoan_PurposeArgs = {
  distinct_on?: InputMaybe<Array<Loan_Purpose_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Purpose_Order_By>>;
  where?: InputMaybe<Loan_Purpose_Bool_Exp>;
};


export type Subscription_RootLoan_Purpose_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Purpose_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Purpose_Order_By>>;
  where?: InputMaybe<Loan_Purpose_Bool_Exp>;
};


export type Subscription_RootLoan_Purpose_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLoan_RepaymentArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};


export type Subscription_RootLoan_Repayment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Repayment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Repayment_Order_By>>;
  where?: InputMaybe<Loan_Repayment_Bool_Exp>;
};


export type Subscription_RootLoan_Repayment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLoan_StatusArgs = {
  distinct_on?: InputMaybe<Array<Loan_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Status_Order_By>>;
  where?: InputMaybe<Loan_Status_Bool_Exp>;
};


export type Subscription_RootLoan_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Status_Order_By>>;
  where?: InputMaybe<Loan_Status_Bool_Exp>;
};


export type Subscription_RootLoan_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLoan_TypeArgs = {
  distinct_on?: InputMaybe<Array<Loan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Type_Order_By>>;
  where?: InputMaybe<Loan_Type_Bool_Exp>;
};


export type Subscription_RootLoan_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Type_Order_By>>;
  where?: InputMaybe<Loan_Type_Bool_Exp>;
};


export type Subscription_RootLoan_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootLoan_WindowArgs = {
  distinct_on?: InputMaybe<Array<Loan_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Window_Order_By>>;
  where?: InputMaybe<Loan_Window_Bool_Exp>;
};


export type Subscription_RootLoan_Window_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Loan_Window_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Loan_Window_Order_By>>;
  where?: InputMaybe<Loan_Window_Bool_Exp>;
};


export type Subscription_RootLoan_Window_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootMetaArgs = {
  distinct_on?: InputMaybe<Array<Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meta_Order_By>>;
  where?: InputMaybe<Meta_Bool_Exp>;
};


export type Subscription_RootMeta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Meta_Order_By>>;
  where?: InputMaybe<Meta_Bool_Exp>;
};


export type Subscription_RootMeta_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProvincesArgs = {
  distinct_on?: InputMaybe<Array<Provinces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provinces_Order_By>>;
  where?: InputMaybe<Provinces_Bool_Exp>;
};


export type Subscription_RootProvinces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provinces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provinces_Order_By>>;
  where?: InputMaybe<Provinces_Bool_Exp>;
};


export type Subscription_RootProvinces_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_LogArgs = {
  distinct_on?: InputMaybe<Array<User_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Log_Order_By>>;
  where?: InputMaybe<User_Log_Bool_Exp>;
};


export type Subscription_RootUser_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Log_Order_By>>;
  where?: InputMaybe<User_Log_Bool_Exp>;
};


export type Subscription_RootUser_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVillagesArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};


export type Subscription_RootVillages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Villages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Villages_Order_By>>;
  where?: InputMaybe<Villages_Bool_Exp>;
};


export type Subscription_RootVillages_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_log" */
export type User_Log = {
  __typename?: 'user_log';
  created_at: Scalars['timestamp'];
  data?: Maybe<Scalars['jsonb']>;
  event: Scalars['String'];
  id: Scalars['uuid'];
  object_id?: Maybe<Scalars['uuid']>;
  origin?: Maybe<Scalars['jsonb']>;
  tag: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamp'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "user_log" */
export type User_LogDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "user_log" */
export type User_LogOriginArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user_log" */
export type User_Log_Aggregate = {
  __typename?: 'user_log_aggregate';
  aggregate?: Maybe<User_Log_Aggregate_Fields>;
  nodes: Array<User_Log>;
};

/** aggregate fields of "user_log" */
export type User_Log_Aggregate_Fields = {
  __typename?: 'user_log_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Log_Max_Fields>;
  min?: Maybe<User_Log_Min_Fields>;
};


/** aggregate fields of "user_log" */
export type User_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Log_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  origin?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "user_log". All fields are combined with a logical 'AND'. */
export type User_Log_Bool_Exp = {
  _and?: InputMaybe<Array<User_Log_Bool_Exp>>;
  _not?: InputMaybe<User_Log_Bool_Exp>;
  _or?: InputMaybe<Array<User_Log_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  event?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  object_id?: InputMaybe<Uuid_Comparison_Exp>;
  origin?: InputMaybe<Jsonb_Comparison_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_log" */
export enum User_Log_Constraint {
  /** unique or primary key constraint */
  UserLogPkey = 'user_log_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Log_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
  origin?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Log_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
  origin?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Log_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "user_log" */
export type User_Log_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  object_id?: InputMaybe<Scalars['uuid']>;
  origin?: InputMaybe<Scalars['jsonb']>;
  tag?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Log_Max_Fields = {
  __typename?: 'user_log_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Log_Min_Fields = {
  __typename?: 'user_log_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  event?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  tag?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_log" */
export type User_Log_Mutation_Response = {
  __typename?: 'user_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Log>;
};

/** on_conflict condition type for table "user_log" */
export type User_Log_On_Conflict = {
  constraint: User_Log_Constraint;
  update_columns?: Array<User_Log_Update_Column>;
  where?: InputMaybe<User_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "user_log". */
export type User_Log_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  object_id?: InputMaybe<Order_By>;
  origin?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_log */
export type User_Log_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Log_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
  origin?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user_log" */
export enum User_Log_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Origin = 'origin',
  /** column name */
  Tag = 'tag',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_log" */
export type User_Log_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  data?: InputMaybe<Scalars['jsonb']>;
  event?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  object_id?: InputMaybe<Scalars['uuid']>;
  origin?: InputMaybe<Scalars['jsonb']>;
  tag?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_log" */
export enum User_Log_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Origin = 'origin',
  /** column name */
  Tag = 'tag',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  /** An object relationship */
  bank_branch?: Maybe<Bank_Branch>;
  bank_branch_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  banks: Array<Bank>;
  /** An aggregate relationship */
  banks_aggregate: Bank_Aggregate;
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.users" */
export type UsersBanksArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersBanks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Order_By>>;
  where?: InputMaybe<Bank_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  bank_branch?: InputMaybe<Bank_Branch_Bool_Exp>;
  bank_branch_id?: InputMaybe<Uuid_Comparison_Exp>;
  banks?: InputMaybe<Bank_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  bank_branch?: InputMaybe<Bank_Branch_Obj_Rel_Insert_Input>;
  bank_branch_id?: InputMaybe<Scalars['uuid']>;
  banks?: InputMaybe<Bank_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bank_branch_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bank_branch_id?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  bank_branch?: InputMaybe<Bank_Branch_Order_By>;
  bank_branch_id?: InputMaybe<Order_By>;
  banks_aggregate?: InputMaybe<Bank_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  BankBranchId = 'bank_branch_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  bank_branch_id?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  BankBranchId = 'bank_branch_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "villages" */
export type Villages = {
  __typename?: 'villages';
  /** An array relationship */
  bank_branches: Array<Bank_Branch>;
  /** An aggregate relationship */
  bank_branches_aggregate: Bank_Branch_Aggregate;
  /** An array relationship */
  busines: Array<Busines>;
  /** An aggregate relationship */
  busines_aggregate: Busines_Aggregate;
  created_at?: Maybe<Scalars['timestamp']>;
  dist_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  district?: Maybe<Districts>;
  en?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "villages" */
export type VillagesBank_BranchesArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


/** columns and relationships of "villages" */
export type VillagesBank_Branches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bank_Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bank_Branch_Order_By>>;
  where?: InputMaybe<Bank_Branch_Bool_Exp>;
};


/** columns and relationships of "villages" */
export type VillagesBusinesArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};


/** columns and relationships of "villages" */
export type VillagesBusines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Busines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Busines_Order_By>>;
  where?: InputMaybe<Busines_Bool_Exp>;
};

/** aggregated selection of "villages" */
export type Villages_Aggregate = {
  __typename?: 'villages_aggregate';
  aggregate?: Maybe<Villages_Aggregate_Fields>;
  nodes: Array<Villages>;
};

/** aggregate fields of "villages" */
export type Villages_Aggregate_Fields = {
  __typename?: 'villages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Villages_Max_Fields>;
  min?: Maybe<Villages_Min_Fields>;
};


/** aggregate fields of "villages" */
export type Villages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Villages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "villages" */
export type Villages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Villages_Max_Order_By>;
  min?: InputMaybe<Villages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "villages" */
export type Villages_Arr_Rel_Insert_Input = {
  data: Array<Villages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Villages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "villages". All fields are combined with a logical 'AND'. */
export type Villages_Bool_Exp = {
  _and?: InputMaybe<Array<Villages_Bool_Exp>>;
  _not?: InputMaybe<Villages_Bool_Exp>;
  _or?: InputMaybe<Array<Villages_Bool_Exp>>;
  bank_branches?: InputMaybe<Bank_Branch_Bool_Exp>;
  busines?: InputMaybe<Busines_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  dist_id?: InputMaybe<String_Comparison_Exp>;
  district?: InputMaybe<Districts_Bool_Exp>;
  en?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  lo?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  map?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "villages" */
export enum Villages_Constraint {
  /** unique or primary key constraint */
  VillagesPkey = 'villages_pkey'
}

/** input type for inserting data into table "villages" */
export type Villages_Insert_Input = {
  bank_branches?: InputMaybe<Bank_Branch_Arr_Rel_Insert_Input>;
  busines?: InputMaybe<Busines_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  dist_id?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Districts_Obj_Rel_Insert_Input>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Villages_Max_Fields = {
  __typename?: 'villages_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  dist_id?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "villages" */
export type Villages_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dist_id?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  map?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Villages_Min_Fields = {
  __typename?: 'villages_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  dist_id?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lo?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  map?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "villages" */
export type Villages_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dist_id?: InputMaybe<Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  map?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "villages" */
export type Villages_Mutation_Response = {
  __typename?: 'villages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Villages>;
};

/** input type for inserting object relation for remote table "villages" */
export type Villages_Obj_Rel_Insert_Input = {
  data: Villages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Villages_On_Conflict>;
};

/** on_conflict condition type for table "villages" */
export type Villages_On_Conflict = {
  constraint: Villages_Constraint;
  update_columns?: Array<Villages_Update_Column>;
  where?: InputMaybe<Villages_Bool_Exp>;
};

/** Ordering options when selecting data from "villages". */
export type Villages_Order_By = {
  bank_branches_aggregate?: InputMaybe<Bank_Branch_Aggregate_Order_By>;
  busines_aggregate?: InputMaybe<Busines_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  dist_id?: InputMaybe<Order_By>;
  district?: InputMaybe<Districts_Order_By>;
  en?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lo?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  map?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: villages */
export type Villages_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "villages" */
export enum Villages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistId = 'dist_id',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Location = 'location',
  /** column name */
  Map = 'map',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "villages" */
export type Villages_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  dist_id?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lo?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "villages" */
export enum Villages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DistId = 'dist_id',
  /** column name */
  En = 'en',
  /** column name */
  Id = 'id',
  /** column name */
  Lo = 'lo',
  /** column name */
  Location = 'location',
  /** column name */
  Map = 'map',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type InsertProviderRequestMutationVariables = Exact<{
  providerRequest: AuthProviderRequests_Insert_Input;
}>;


export type InsertProviderRequestMutation = { __typename?: 'mutation_root', insertAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type DeleteProviderRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProviderRequestMutation = { __typename?: 'mutation_root', deleteAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type ProviderRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProviderRequestQuery = { __typename?: 'query_root', authProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type InsertRefreshTokenMutationVariables = Exact<{
  refreshToken: AuthRefreshTokens_Insert_Input;
}>;


export type InsertRefreshTokenMutation = { __typename?: 'mutation_root', insertAuthRefreshToken?: { __typename?: 'authRefreshTokens', refreshToken: any } | null };

export type DeleteRefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['uuid'];
}>;


export type DeleteRefreshTokenMutation = { __typename?: 'mutation_root', deleteAuthRefreshToken?: { __typename?: 'authRefreshTokens', refreshToken: any, expiresAt: any } | null };

export type DeleteUserRefreshTokensMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type DeleteExpiredRefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteExpiredRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type AuthUserProvidersQueryVariables = Exact<{
  provider: Scalars['String'];
  providerUserId: Scalars['String'];
}>;


export type AuthUserProvidersQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, user: { __typename?: 'users', id: any } }> };

export type UserProviderQueryVariables = Exact<{
  userId: Scalars['uuid'];
  providerId: Scalars['String'];
}>;


export type UserProviderQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, refreshToken?: string | null }> };

export type UpdateAuthUserproviderMutationVariables = Exact<{
  id: Scalars['uuid'];
  authUserProvider: AuthUserProviders_Set_Input;
}>;


export type UpdateAuthUserproviderMutation = { __typename?: 'mutation_root', updateAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type InsertUserRolesMutationVariables = Exact<{
  userRoles: Array<AuthUserRoles_Insert_Input> | AuthUserRoles_Insert_Input;
}>;


export type InsertUserRolesMutation = { __typename?: 'mutation_root', insertAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type DeleteUserRolesByUserIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRolesByUserIdMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type UserFieldsFragment = { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UsersQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables = Exact<{
  refreshToken: Scalars['uuid'];
  expiresAt: Scalars['timestamptz'];
}>;


export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation = { __typename?: 'mutation_root', updateAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', returning: Array<{ __typename?: 'authRefreshTokens', refreshToken: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> } | null };

export type GetUsersByRefreshTokenOldQueryVariables = Exact<{
  refreshToken: Scalars['uuid'];
}>;


export type GetUsersByRefreshTokenOldQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', refreshToken: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UpdateUserWhereMutationVariables = Exact<{
  where: Users_Bool_Exp;
  user: Users_Set_Input;
}>;


export type UpdateUserWhereMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type RotateUsersTicketMutationVariables = Exact<{
  oldTicket: Scalars['String'];
  newTicket: Scalars['String'];
  newTicketExpiresAt: Scalars['timestamptz'];
}>;


export type RotateUsersTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type ChangeEmailsByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  email: Scalars['citext'];
  newTicket: Scalars['String'];
  now: Scalars['timestamptz'];
}>;


export type ChangeEmailsByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export type InsertUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insertUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, deleteUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeanonymizeUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  avatarUrl?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type DeanonymizeUserMutation = { __typename?: 'mutation_root', updateAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, updateUser?: { __typename?: 'users', id: any } | null };

export type InsertUserProviderToUserMutationVariables = Exact<{
  userProvider: AuthUserProviders_Insert_Input;
}>;


export type InsertUserProviderToUserMutation = { __typename?: 'mutation_root', insertAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type GetUserByTicketQueryVariables = Exact<{
  ticket: Scalars['String'];
}>;


export type GetUserByTicketQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type UpdateUsersByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  user: Users_Set_Input;
}>;


export type UpdateUsersByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export const UserFieldsFragmentDoc = gql`
    fragment userFields on users {
  id
  createdAt
  disabled
  displayName
  avatarUrl
  email
  passwordHash
  emailVerified
  phoneNumber
  phoneNumberVerified
  defaultRole
  isAnonymous
  ticket
  otpHash
  totpSecret
  activeMfaType
  newEmail
  locale
  metadata
  roles {
    role
  }
}
    `;
export const InsertProviderRequestDocument = gql`
    mutation insertProviderRequest($providerRequest: authProviderRequests_insert_input!) {
  insertAuthProviderRequest(object: $providerRequest) {
    id
    options
  }
}
    `;
export const DeleteProviderRequestDocument = gql`
    mutation deleteProviderRequest($id: uuid!) {
  deleteAuthProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const ProviderRequestDocument = gql`
    query providerRequest($id: uuid!) {
  authProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const InsertRefreshTokenDocument = gql`
    mutation insertRefreshToken($refreshToken: authRefreshTokens_insert_input!) {
  insertAuthRefreshToken(object: $refreshToken) {
    refreshToken
  }
}
    `;
export const DeleteRefreshTokenDocument = gql`
    mutation deleteRefreshToken($refreshToken: uuid!) {
  deleteAuthRefreshToken(refreshToken: $refreshToken) {
    refreshToken
    expiresAt
  }
}
    `;
export const DeleteUserRefreshTokensDocument = gql`
    mutation deleteUserRefreshTokens($userId: uuid!) {
  deleteAuthRefreshTokens(where: {user: {id: {_eq: $userId}}}) {
    affected_rows
  }
}
    `;
export const DeleteExpiredRefreshTokensDocument = gql`
    mutation deleteExpiredRefreshTokens {
  deleteAuthRefreshTokens(where: {expiresAt: {_lt: now}}) {
    affected_rows
  }
}
    `;
export const AuthUserProvidersDocument = gql`
    query authUserProviders($provider: String!, $providerUserId: String!) {
  authUserProviders(
    where: {_and: {provider: {id: {_eq: $provider}}, providerUserId: {_eq: $providerUserId}}}
    limit: 1
  ) {
    id
    user {
      id
    }
  }
}
    `;
export const UserProviderDocument = gql`
    query userProvider($userId: uuid!, $providerId: String!) {
  authUserProviders(
    where: {_and: [{userId: {_eq: $userId}}, {providerId: {_eq: $providerId}}]}
    limit: 1
  ) {
    id
    refreshToken
  }
}
    `;
export const UpdateAuthUserproviderDocument = gql`
    mutation updateAuthUserprovider($id: uuid!, $authUserProvider: authUserProviders_set_input!) {
  updateAuthUserProvider(pk_columns: {id: $id}, _set: $authUserProvider) {
    id
  }
}
    `;
export const InsertUserRolesDocument = gql`
    mutation insertUserRoles($userRoles: [authUserRoles_insert_input!]!) {
  insertAuthUserRoles(objects: $userRoles) {
    affected_rows
  }
}
    `;
export const DeleteUserRolesByUserIdDocument = gql`
    mutation deleteUserRolesByUserId($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export const UserDocument = gql`
    query user($id: uuid!) {
  user(id: $id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UsersDocument = gql`
    query users($where: users_bool_exp!) {
  users(where: $where) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument = gql`
    mutation getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt($refreshToken: uuid!, $expiresAt: timestamptz!) {
  updateAuthRefreshTokens(
    _set: {expiresAt: $expiresAt}
    where: {_and: [{refreshToken: {_eq: $refreshToken}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    returning {
      refreshToken
      user {
        ...userFields
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenOldDocument = gql`
    query getUsersByRefreshTokenOld($refreshToken: uuid!) {
  authRefreshTokens(
    where: {_and: [{refreshToken: {_eq: $refreshToken}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    refreshToken
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($id: uuid!, $user: users_set_input!) {
  updateUser(pk_columns: {id: $id}, _set: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserWhereDocument = gql`
    mutation updateUserWhere($where: users_bool_exp!, $user: users_set_input!) {
  updateUsers(where: $where, _set: $user) {
    affected_rows
  }
}
    `;
export const RotateUsersTicketDocument = gql`
    mutation rotateUsersTicket($oldTicket: String!, $newTicket: String!, $newTicketExpiresAt: timestamptz!) {
  updateUsers(
    _set: {ticket: $newTicket, ticketExpiresAt: $newTicketExpiresAt}
    where: {ticket: {_eq: $oldTicket}}
  ) {
    affected_rows
  }
}
    `;
export const ChangeEmailsByTicketDocument = gql`
    mutation changeEmailsByTicket($ticket: String!, $email: citext!, $newTicket: String!, $now: timestamptz!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: $now}}]}
    _set: {email: $email, newEmail: null, ticket: $newTicket, ticketExpiresAt: $now}
  ) {
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const InsertUserDocument = gql`
    mutation insertUser($user: users_insert_input!) {
  insertUser(object: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
  deleteUser(id: $userId) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeanonymizeUserDocument = gql`
    mutation deanonymizeUser($userId: uuid!, $avatarUrl: String, $role: String!) {
  updateAuthUserRoles(where: {user: {id: {_eq: $userId}}}, _set: {role: $role}) {
    affected_rows
  }
  updateUser(
    pk_columns: {id: $userId}
    _set: {avatarUrl: $avatarUrl, defaultRole: $role}
  ) {
    id
  }
}
    `;
export const InsertUserProviderToUserDocument = gql`
    mutation insertUserProviderToUser($userProvider: authUserProviders_insert_input!) {
  insertAuthUserProvider(object: $userProvider) {
    id
  }
}
    `;
export const GetUserByTicketDocument = gql`
    query getUserByTicket($ticket: String!) {
  users(where: {ticket: {_eq: $ticket}}) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUsersByTicketDocument = gql`
    mutation updateUsersByTicket($ticket: String!, $user: users_set_input!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: now}}]}
    _set: $user
  ) {
    affected_rows
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertProviderRequest(variables: InsertProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProviderRequestMutation>(InsertProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProviderRequest', 'mutation');
    },
    deleteProviderRequest(variables: DeleteProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProviderRequestMutation>(DeleteProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProviderRequest', 'mutation');
    },
    providerRequest(variables: ProviderRequestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProviderRequestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProviderRequestQuery>(ProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'providerRequest', 'query');
    },
    insertRefreshToken(variables: InsertRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertRefreshTokenMutation>(InsertRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertRefreshToken', 'mutation');
    },
    deleteRefreshToken(variables: DeleteRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRefreshTokenMutation>(DeleteRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRefreshToken', 'mutation');
    },
    deleteUserRefreshTokens(variables: DeleteUserRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRefreshTokensMutation>(DeleteUserRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRefreshTokens', 'mutation');
    },
    deleteExpiredRefreshTokens(variables?: DeleteExpiredRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteExpiredRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteExpiredRefreshTokensMutation>(DeleteExpiredRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteExpiredRefreshTokens', 'mutation');
    },
    authUserProviders(variables: AuthUserProvidersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthUserProvidersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthUserProvidersQuery>(AuthUserProvidersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authUserProviders', 'query');
    },
    userProvider(variables: UserProviderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProviderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProviderQuery>(UserProviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProvider', 'query');
    },
    updateAuthUserprovider(variables: UpdateAuthUserproviderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAuthUserproviderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAuthUserproviderMutation>(UpdateAuthUserproviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAuthUserprovider', 'mutation');
    },
    insertUserRoles(variables: InsertUserRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserRolesMutation>(InsertUserRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserRoles', 'mutation');
    },
    deleteUserRolesByUserId(variables: DeleteUserRolesByUserIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRolesByUserIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRolesByUserIdMutation>(DeleteUserRolesByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRolesByUserId', 'mutation');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    users(variables: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt(variables: GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation>(GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt', 'mutation');
    },
    getUsersByRefreshTokenOld(variables: GetUsersByRefreshTokenOldQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenOldQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenOldQuery>(GetUsersByRefreshTokenOldDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenOld', 'query');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserWhere(variables: UpdateUserWhereMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserWhereMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserWhereMutation>(UpdateUserWhereDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserWhere', 'mutation');
    },
    rotateUsersTicket(variables: RotateUsersTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RotateUsersTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RotateUsersTicketMutation>(RotateUsersTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'rotateUsersTicket', 'mutation');
    },
    changeEmailsByTicket(variables: ChangeEmailsByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeEmailsByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeEmailsByTicketMutation>(ChangeEmailsByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeEmailsByTicket', 'mutation');
    },
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUser', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deanonymizeUser(variables: DeanonymizeUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeanonymizeUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeanonymizeUserMutation>(DeanonymizeUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deanonymizeUser', 'mutation');
    },
    insertUserProviderToUser(variables: InsertUserProviderToUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserProviderToUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserProviderToUserMutation>(InsertUserProviderToUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserProviderToUser', 'mutation');
    },
    getUserByTicket(variables: GetUserByTicketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByTicketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByTicketQuery>(GetUserByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByTicket', 'query');
    },
    updateUsersByTicket(variables: UpdateUsersByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUsersByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUsersByTicketMutation>(UpdateUsersByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUsersByTicket', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;