import { APIResponse, Pizza } from "../data";
import { UseHook } from "./useHookTypes";

export interface UseGetPizzaProps {
  id: string;
};

export interface UseGetPizza extends UseHook {
  response: APIResponse<Pizza> | null;
};
