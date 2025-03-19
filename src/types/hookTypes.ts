import { ApiResponsePizzas } from "./ApiResponseTypes";

export type UseScreenMobile = {
  mobile: boolean;
};

export type UsePizzas = {
  loading: boolean;
  response: ApiResponsePizzas | null;
  error: string | null;
};
