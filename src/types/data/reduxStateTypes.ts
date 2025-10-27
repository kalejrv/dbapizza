import { User } from "../";

/* Auth state. */
export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, 'password'> | null;
  token: string | null;
};
