/* Models. */
// User.
export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: string;
};
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
// Order.
export type Order = {
  _id: string;
  user: object;
  items: object[];
  status: object;
  total: number;
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
// Query params.
export interface PaginationQueryParams {
  page: number;
  limit: number;
};

/* Stats. */
export interface Stats {
  year: number;
  month: number;
  items: {
    currentMonthItemsCount: number;
    lastMonthItemsCount: number;
    itemsGrowthRate: number;
    totalItemsCount: number;
  };
};
// Query params.
export interface StatsQueryParams {
  year: number;
  month: number;
};
// Models stats.
export interface UserStats extends Stats { };
export interface OrderStats extends Stats {
  sales: {
    currentMonthSalesAmount: number,
    lastMonthSalesAmount: number,
    salesGrowthRate: number,
    totalSalesAmount: number,
  };
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
export type APIResponse<T> = {
  status: string;
  msg?: string;
  data?: T;
};

/* Authentication. */
export interface SignIn extends Pick<User, 'email' | 'password'> { };
export interface SignUp extends Omit<User, 'role'> { };
export type UserLogged = {
  msg: string;
  user: Omit<User, 'password'>;
  token?: string;
};

/* RTK. */
// Tags.
export enum TagType {
  Users = "Users",
  Pizzas = "Pizzas",
  Orders = "Orders",
};
export type Tag = {
  type: TagType;
  id: string;
};
// Cache time.
export const LIVE_CACHE_TIME: number = 300; /* 5 minutes. */
