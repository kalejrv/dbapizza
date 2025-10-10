import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { config } from "../../config";
import { APIResponse, LIVE_CACHE_TIME, Order, OrderStats, Pagination, PaginationQueryParams, StatsQueryParams, Tag, TagType } from "../../types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.APIBaseUrl,
    prepareHeaders: (headers, { getState }): Headers => {
      const token: string = (getState() as RootState).auth.token as string; /* Get token from Redux. */

      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: [TagType.Orders as string],
  endpoints: (builder) => ({
    getOrders: builder.query<APIResponse<Pagination<Order>>, void | PaginationQueryParams>({
      query: (queryParams): string => (
        queryParams
          ? `/orders?page=${queryParams.page}&limit=${queryParams.limit}`
          : "/orders"
      ),
      providesTags: (result): Tag[] => {
        const data = result?.data;

        if (data) {
          if (data.items.length > 0) {
            return [
              { type: TagType.Orders, id: "ListOrders" },
              ...data?.items.map(({ _id }): Tag => ({ type: TagType.Orders as const, id: _id })),
            ];
          } else {
            return [{ type: TagType.Orders, id: "ListOrders" }];
          };
        };
        
        return [{ type: TagType.Orders, id: "ListOrders" }];
      },
      keepUnusedDataFor: LIVE_CACHE_TIME,
    }),
    getOrdersStatsByMonth: builder.query<APIResponse<OrderStats>, StatsQueryParams>({
      query: (statsQueryParams): string => `/orders/stats_by_month?year=${statsQueryParams.year}&month=${statsQueryParams.month}`,
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersStatsByMonthQuery,
} = orderApi;
