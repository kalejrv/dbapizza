/* Models. */
// Flavor.
type Flavor = {
  name: string;
  description: string;
  price: number;
};

// Size.
type Size = {
  name: string;
  price: string;
};

// Pizza.
export interface Pizza {
  _id: string;
  flavor: Flavor;
  size: Size;
  image: string;
  price: number;
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

/* HTTP methods. */
export enum Method {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
};

/* API response. */
export interface APIResponse<T> {
  status: string;
  data: T;
};

/* API request. */
export interface QueryParams {
  page: number;
  limit: number;
};
