import { fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { APIResponse } from "../../types";
import { config } from "../../config";
import { RootState } from "../store";

export const customBaseQuery: BaseQueryFn<string | { url: string, method?: string, body?: unknown }, unknown, APIResponse<unknown>> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: config.APIBaseUrl,
    prepareHeaders: (headers, { getState }): Headers => {
      const token: string = (getState() as RootState).auth.token as string; /* Get token from Redux. */

      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");

      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  /* If there was an error. */
  if (result.error) {
    const err = result.error as FetchBaseQueryError;
    let msg: string = "Unknow error.";

    if (("data" in err) && (typeof err.data === "object") && (err.data !== null)) {
      const data = err.data as APIResponse<unknown>;
      msg = data.msg || msg;

      return {
        error: {
          status: data.status,
          msg,
          data: data.data ?? null,
        },
      };
    };

    return {
      error: {
        status: err.status,
        msg,
      },
    };
  };
  
  /* If all is ok. */
  const data = result.data as APIResponse<unknown>;
  return { data };
};
