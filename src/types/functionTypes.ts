export enum Method {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
};

type Options = {
  method?: Method;
  headers?: Record<string, string>;
  signal: AbortSignal;
  body?: BodyInit;
};

export interface FetchFromAPI {
  url: string;
  token?: string;
  options: Options;
};
