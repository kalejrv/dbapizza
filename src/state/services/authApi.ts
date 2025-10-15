import { createApi, fetchBaseQuery, FetchArgs } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";
import { APIResponse, Method, SignIn, SignUp, UserLogged } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.APIBaseUrl,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<APIResponse<UserLogged>, SignIn>({
      query: (userCredentials): FetchArgs => ({
        url: "/auth/signin",
        method: Method.POST,
        body: userCredentials,
      }),
    }),
    signUp: builder.mutation<APIResponse<UserLogged>, SignUp>({
      query: (userData): FetchArgs => ({
        url: "/auth/signup",
        method: Method.POST,
        body: userData,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
} = authApi;
