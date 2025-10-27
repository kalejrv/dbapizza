import { APIResponse, Pizza, UseHook } from "../";

export interface UseGetPizzaProps {
  id: string;
};

export interface UseGetPizza extends UseHook {
  response: APIResponse<Pizza> | null;
};
