import axios, { AxiosResponse } from "axios";
import { APIResponse, RequestAPIProps } from "../types";
import { config } from "../config";

export const requestAPI = async <T>({ url, method, token, userData }: RequestAPIProps): Promise<APIResponse<T>> => {  
  const api = axios.create({
    baseURL: config.APIBaseUrl,
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  try {
    const { data: { status, data } } : AxiosResponse<APIResponse<T>> = await api(url, {
      data: userData,
    });

    return {
      status,
      data,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response.data as APIResponse<T>;
      
      return {
        status,
        data,
      };
    };

    return {
      status: "ERROR",
      data: {
        msg: error.message,
      } as unknown as T,
    };
  };
};
