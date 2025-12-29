import { Role, Stats } from "../";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  role: Role | string;
};

export interface UserStats extends Stats { };
