import { Dispatch, SetStateAction } from "react";
import { APIResponse, Pagination, Pizza, QueryParams, UserLogged } from "./APITypes";

interface UseHook {
  loading: boolean;
  error: string;
};

/* UseScreenMobile. */
export type UseScreenMobile = {
  mobile: boolean;
  width: number;
};

/* UseModal. */
export interface UseModal {
  modalIsOpen: boolean;
  openModal(): void;
  closeModal(): void;
  modalOpenCounter: number;
  incrementModalOpenCounter(): void;
};

/* UseGetPizzas. */
export interface UseGetPizzasProps extends QueryParams { };
export interface UseGetPizzas extends UseHook {
  response: APIResponse<Pagination<Pizza>>;
};

/* UseGetPizza. */
export interface UseGetPizzaProps {
  id: string;
};
export interface UseGetPizza extends UseHook {
  response: APIResponse<Pizza> | null;
};

/* UseForm. */
export interface UseForm<T> {
  data: T;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  resetForm(): void;
};

/* UseAuthUser. */
export type UserData = {
  [key: string]: string,
};
export interface UseAuthUserProps {
  url: string;
};
export interface UseAuthUser extends UseHook {
  setUserData: Dispatch<SetStateAction<UserData | null>>;
  response: APIResponse<UserLogged> | null;
};

/* UseMenu. */
export interface UseMenu {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};
