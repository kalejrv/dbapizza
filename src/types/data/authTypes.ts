import { User } from "./modelTypes";

/* Sign in. */
export interface SignIn extends Pick<User, 'email' | 'password'> { };

/* Sign up. */
export interface SignUp extends Omit<User, 'role'> { };

/* User logged. */
export type UserLogged = {
  msg: string;
  user: Omit<User, 'password'>;
  token?: string;
};
