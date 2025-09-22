import axios, { AxiosResponse } from "axios";
import { APIResponse, RequestAPIProps } from "../types";

export const requestAPI = async <T>({ url, method, data }: RequestAPIProps): Promise<APIResponse<T>> => {  
  const api = axios.create({
    method,
    data,
  });

  try {
    const { data: { status, data } }: AxiosResponse<APIResponse<T>> = await api(url);
    
    if (status !== "OK") {
      throw new Error(`Error: ${status}.`);
    };
    
    return {
      status,
      data,
    };
  } catch (error: any) {
    throw new Error(error.message);
  };
};
