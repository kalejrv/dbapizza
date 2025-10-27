import { APIResponse, Pagination, Pizza, QueryParams, UseHook } from "../";

export interface UseGetPizzasProps extends Pick<QueryParams, 'page' | 'limit'> { };

export interface UseGetPizzas extends UseHook {
  response: APIResponse<Pagination<Pizza>>;
};
