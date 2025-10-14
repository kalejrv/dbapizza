/* User. */
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

/* Flavor. */
type Flavor = {
  name: string;
  description: string;
  price: number;
};

/* Size. */
type Size = {
  name: string;
  price: string;
};

/* Pizza. */
export interface Pizza {
  _id: string;
  flavor: Flavor;
  size: Size;
  image: string;
  price: number;
};

/* Order. */
export type Order = {
  _id: string;
  user: object;
  items: object[];
  status: object;
  total: number;
};
