import { APIResponse, Pagination, Pizza, QueryParams } from "../data";
import { UseHook } from "./useHookTypes";

export interface UseGetPizzasProps extends Pick<QueryParams, 'page' | 'limit'> { };

export interface UseGetPizzas extends UseHook {
  response: APIResponse<Pagination<Pizza>>;
};
