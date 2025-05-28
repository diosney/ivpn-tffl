import { ClrDatagridComparatorInterface } from '@clr/angular/data/datagrid/interfaces/comparator.interface';
import { IError } from '@core/models/interfaces/error.class';

export interface ApiError {
  ID: number;
  Message: string;
}

export interface ApiErrorResponse {
  Error?: null | ApiError;
}

// TODO: Check for errors & pagination ends & no data.
export interface ApiCollectionResponse extends ApiErrorResponse {
  [index: string]: any;

  max_page_id: number;
}

export interface ApiStandardCollectionResponse<T> {
  meta: {
    totalItems: number;
    lastPage: number;
  };
  data: Array<T>;
  error?: null | ApiError;
}

// TODO.
// {
//   "merchant_count": -1,
//   "max_page_id": 0,
//   "Error": {
//   "ID": 2,
//     "Message": "Total row count = 0"
// }

export interface ApiPostBodyRequestForCollections {
  search_by_column?: string;
  search_by_val?: string;
  is_like_search?: boolean;

  // Ex: '-created_date, dba'.
  order_by: string;
  row_limit: number;
  page_id: number;

  search_filters?: Array<{
    field: string;
    value: string;
    is_wildcard_search: boolean
  }>;
}

export interface ApiPostBodyRequestForUpdates {
  schema_name: string;

  update_commands: Array<{
    // Incremental.
    id: number;
    // "tableName:columnName:newValue:tableIdentifierColumn:tableRowId"
    update_request: string;
  }>;
}

export interface ApiResourceStandardResponse<T> {
  data: T;
  error?: null | ApiError;
}

export interface ApiResourceResponse extends ApiErrorResponse {
  [index: string]: any;
}

export interface ApiUpdateApiResponse extends ApiErrorResponse {
  responses?: Array<{
    id: number;
    success: boolean;
    error: string;
  }>;
}

export interface ApiUpdateStandardResponse {
  error: null | ApiError;
}

export interface ApiGridResponse<T extends any> {
  data: ApiGridDataResponse<T>;
  error?: IError;
}

export interface ApiGridDataResponse<T extends any> {
  items: Array<T>;
  // Next item for paging.
  cursor: string;
}

export interface IndexedClrDatagridStateInterface<T = any> {
  page?: {
    [index: string]: number | undefined;

    from?: number;
    to?: number;
    size?: number;
    current?: number;  // <- cursor primera pagina :: no mandar
  };
  sort?: {
    [index: string]: string | boolean | ClrDatagridComparatorInterface<T> | undefined;

    by: string | ClrDatagridComparatorInterface<T>;
    reverse: boolean;
  };
  filters?: DataGridFilters;
}

export interface DataGridFilter {
  property: string;
  value: any;
}

export type DataGridFilters = DataGridFilter[];

export interface ApiGridRequest {
  filters?: {
    [index: string]: number | string;
  }[];
  limit?: number;
  cursor?: string;
}

export interface ApiGridDataResponseWithGridState<T, E = {}> {
  data: ApiGridDataResponse<T> & E;
  gridState: IndexedClrDatagridStateInterface;
}

export interface AuthGetTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}
