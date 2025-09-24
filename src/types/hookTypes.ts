import { APIResponse, Pagination, Pizza, QueryParams } from "./APITypes";

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
};

/* UseGetPizzas. */
interface FetchPizzas {
  loading: boolean;
  error: string;
};
export interface UseGetPizzasProps extends QueryParams { };
export interface UseGetPizzas extends FetchPizzas {
  response: APIResponse<Pagination<Pizza>>;
};

/* UseGetPizza. */
export interface UseGetPizzaProps {
  id: string;
};
export interface UseGetPizza extends FetchPizzas {
  response: APIResponse<Pizza> | null;
};
