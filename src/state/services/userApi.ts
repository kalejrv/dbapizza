import { createApi, fetchBaseQuery, FetchArgs } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { config } from "../../config";
import { APIResponse, LIVE_CACHE_TIME, Method, Pagination, PaginationQueryParams, StatsQueryParams, Tag, TagType, User, UserStats } from "../../types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.APIBaseUrl,
    prepareHeaders: (headers, { getState }): Headers => {
      const token: string = (getState() as RootState).auth.token as string; /* Get token from Redux. */

      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  tagTypes: [TagType.Users as string],
  endpoints: (builder) => ({
    getUsers: builder.query<APIResponse<Pagination<User>>, void | PaginationQueryParams>({
      query: (queryParams): string => (
        queryParams
          ? `/users?page=${queryParams.page}&limit=${queryParams.limit}`
          : "/users"
      ),
      providesTags: (result): Tag[] => {
        const data = result?.data;
				
        if (data) {
          if (data.items.length !== 0) {
            return [
                { type: TagType.Users, id: "ListUsers" },
                ...data.items.map(({ _id }): Tag => ({ type: TagType.Users, id: _id })),
            ]
          } else {
            return [
              { type: TagType.Users, id: "ListUsers" },
            ];
          };
        };
				
				return [{ type: TagType.Users, id: "ListUsers" }];
      },
      keepUnusedDataFor: LIVE_CACHE_TIME,
    }),
    getUserById: builder.query<APIResponse<User>, string>({
      query: (id): string => `/users/${id}`,
      providesTags: (result, error, id): Tag[] => [{ type: TagType.Users, id }],
    }),
    getUsersStatsByMonth: builder.query<APIResponse<UserStats>, StatsQueryParams>({
      query: (statsQueryParams): string => `/users/stats_by_month?year=${statsQueryParams.year}&month=${statsQueryParams.month}`,
    }),
    createUser: builder.mutation<APIResponse<User>, User>({
      query: (newUser): FetchArgs => ({
        url: "/users",
        method: Method["POST"],
        body: newUser,
      }),
      invalidatesTags: [{ type: TagType.Users, id: "ListUsers" }],
    }),
    updateUser: builder.mutation<APIResponse<User>, { id: string, updates: Partial<User> }>({
      query: ({ id, updates }): FetchArgs => ({
        url: `/users/${id}`,
        method: Method["PATCH"],
        body: updates,
      }),
      invalidatesTags: (result, error, { id }): Tag[] => [
        { type: TagType.Users, id },
        { type: TagType.Users, id: "ListUsers" },
      ],
    }),
    deleteUser: builder.mutation<APIResponse<null>, string>({
      query: (id): FetchArgs => ({
        url: `/users/${id}`,
        method: Method["DELETE"],
      }),
      invalidatesTags: (result, error, id): Tag[] => [
        { type: TagType.Users, id },
        { type: TagType.Users, id: "ListUsers" },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUsersStatsByMonthQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
