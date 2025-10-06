import { User } from "./APITypes";

/* RRD loaders. */
// Pizza loader.
export interface PizzaLoader {
  id: string;
};

/* Redux State. */
// Auth state.
export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, 'password'> | null;
  token: string | null;
};
