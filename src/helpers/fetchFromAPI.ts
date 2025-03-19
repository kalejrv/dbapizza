import { FetchFromAPI } from "../types";

export const fetchFromAPI = async <T> ({ url, token, options }: FetchFromAPI): Promise<T> => {
  try {    
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}.`);
    };

    return data as Promise<T>;
  } catch (error: any) {
    throw new Error(error.message);
  };
};
