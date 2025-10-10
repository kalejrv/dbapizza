import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { config } from "../../config";
import { APIResponse, LIVE_CACHE_TIME, Pagination, PaginationQueryParams, Pizza, Tag, TagType } from "../../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.APIBaseUrl,
    prepareHeaders: (headers, { getState }): Headers => {
      const token: string = (getState() as RootState).auth.token as string; /* Get token from Redux. */

      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: [TagType.Pizzas as string],
  endpoints: (builder) => ({
    getPizzas: builder.query<APIResponse<Pagination<Pizza>>, void | PaginationQueryParams>({
      query: (queryParams): string => (
        queryParams
          ? `/pizzas?page=${queryParams.page}&limit=${queryParams.limit}`
          : "/pizzas"
      ),
      providesTags: (result): Tag[] => {
        const data = result?.data;

        if (data) {
          if (data.items.length > 0) {
            return [
              { type: TagType.Pizzas, id: "ListPizzas" },
              ...data?.items.map(({ _id }): Tag => ({ type: TagType.Pizzas as const, id: _id })),
            ];
          } else {
            return [{ type: TagType.Pizzas, id: "ListPizzas" }];
          };
        };
        
        return [{ type: TagType.Pizzas, id: "ListPizzas" }];
      },
      keepUnusedDataFor: LIVE_CACHE_TIME,
    }),
  }),
});

export const {
  useGetPizzasQuery,
} = pizzaApi;
