import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const showErrorMessage = (error: unknown): string => {
  if (!error) return "Unknwon error.";

  /* Case 1: an RTK Query error (HTTP). */
  const fetchError = error as FetchBaseQueryError;
  if (("data" in fetchError) && (typeof fetchError.data === "object") && fetchError.data) {
    const data = fetchError.data as { status: string, msg: string };

    if (data.msg) return data.msg;
    if (data.status) return data.status;
  };

  /* Case 2: generic JS error. */
  if (error instanceof Error) return error.message;

  return "An error has happen.";
};
