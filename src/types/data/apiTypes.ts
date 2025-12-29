/* HTTP methods. */
export enum Method {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
};

/* API response. */
export type APIResponse<T> = {
  status: string;
  msg?: string;
  data?: T;
};

/* Query params. */
export interface QueryParams {
  page: number;
  limit: number;
  year: number;
  month: number;
};

/* Pagination. */
export interface Pagination<T> {
  items: T[];
  totalItems: number;
  itemsByPage: number;
  currentItemsQuantity: number;
  currentPage: number;
  totalPages: number;
};
export interface PaginationQueryParams extends Pick<QueryParams, 'page' | 'limit'> { };

/* Stats. */
export interface Stats extends Pick<QueryParams, 'year' | 'month'> {
  items: {
    currentMonthItemsCount: number;
    lastMonthItemsCount: number;
    itemsGrowthRate: number;
    totalItemsCount: number;
  };
};
export interface StatsQueryParams extends Pick<QueryParams, 'year' | 'month'> { };
