/* Models. */
// User.
type User = {
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

/* Authentication. */
export interface SignIn extends Pick<User, 'email' | 'password'> { };
export interface SignUp extends Omit<User, 'role'> { };
export type UserLogged = {
  msg: string;
  role: string;
  token?: string;
};
