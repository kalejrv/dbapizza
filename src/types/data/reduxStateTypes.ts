import { User } from "./modelTypes";

/* Auth state. */
export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, 'password'> | null;
  token: string | null;
};
