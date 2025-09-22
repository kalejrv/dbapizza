import { APIResponse, Pagination, Pizza, QueryParams } from "./APITypes";

/* UseScreenMobile. */
export type UseScreenMobile = {
  mobile: boolean;
  width: number;
};

/* UseGetPizzas. */
export interface UseGetPizzasProps extends QueryParams { };
export type UseGetPizzas = {
  loading: boolean;
  error: string;
  response: APIResponse<Pagination<Pizza>>;
};

/* UseModal. */
export interface UseModal {
  modalIsOpen: boolean;
  openModal(): void;
  closeModal(): void;
};
