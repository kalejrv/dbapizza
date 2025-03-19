import { useEffect, useState } from "react";
import { fetchFromAPI } from "../helpers";
import { Method, ApiResponsePizzas, UsePizzas } from "../types";

export const usePizzas = (page: number = 1, limit: number = 10): UsePizzas => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<ApiResponsePizzas | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url: string = `http://localhost:4000/api/v1/pizzas?page=${page}&limit=${limit}`;
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    fetchFromAPI<ApiResponsePizzas>({ url, options: { method: Method.GET, signal } })
      .then((data) => {
        if (!signal.aborted) {
          setResponse(data);
          setLoading(false);
        };
      })
      .catch((error) => {
        if (!signal.aborted) {
          setError(error.message)
          setLoading(false);
          console.log("Error fetching Pizzas: ", error);
        };
      });
    
    return () => {
      abortController.abort();
    };
  }, [page, limit, url]);

  return {
    loading,
    response,
    error,
  };
};
