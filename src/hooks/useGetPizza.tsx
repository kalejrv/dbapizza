import { useEffect, useState } from "react";
import { APIResponse, Method, Pizza, UseGetPizza, UseGetPizzaProps } from "../types";
import { requestAPI } from "../helpers";
import { config } from "../config";

export const useGetPizza = ({ id }: UseGetPizzaProps): UseGetPizza => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<APIResponse<Pizza> | null>(null);

  const url: string = `${config.APIBaseUrl}/pizzas/${id}`;
  
  useEffect((): void => {
    requestAPI<Pizza>({ url, method: Method["GET"] })
      .then((response: APIResponse<Pizza>): void => setResponse(response))
      .catch((error: any): void => setError(error.message))
      .finally((): void => setLoading(false));
  }, [id]);
  
  return {
    loading,
    error,
    response,
  };
};
