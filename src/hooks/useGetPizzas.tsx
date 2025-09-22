import { useEffect, useState } from "react";
import { Method, UseGetPizzasProps, UseGetPizzas, APIResponse, Pagination, Pizza } from "../types";
import { requestAPI } from "../helpers";
import { config } from "../config";

const responseInitialState: APIResponse<Pagination<Pizza>> = {
  status: "",
  data: {
    items: [],
    totalItems: 0,
    itemsByPage: 0,
    currentItemsQuantity: 0,
    currentPage: 0,
    totalPages: 0,
  },
};

export const useGetPizzas = ({ page, limit }: UseGetPizzasProps): UseGetPizzas => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<APIResponse<Pagination<Pizza>>>(responseInitialState);

  const url: string = `${config.APIBaseUrl}/pizzas?page=${page}&limit=${limit}`;

  useEffect((): void => {
    requestAPI<Pagination<Pizza>>({ url, method: Method["GET"] })
      .then((response: APIResponse<Pagination<Pizza>>): void => setResponse(response))
      .catch((error: any): void => setError(error.message))
      .finally((): void => setLoading(false));
  }, [page]);
  
  return {
    loading,
    response,
    error,
  };
};
