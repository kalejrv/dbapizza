import { useEffect, useState } from "react"
import { APIResponse, Method, UseAuthUser, UseAuthUserProps, UserData, UserLogged } from "../types";
import { requestAPI } from "../helpers";

export const useAuthUser = ({ url }: UseAuthUserProps): UseAuthUser => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [response, setResponse] = useState<APIResponse<UserLogged> | null>(null);
  
  useEffect((): void => {
    if (!userData) return;

    setLoading(true);

    requestAPI<UserLogged>({ url, method: Method["POST"], userData })
      .then((response: APIResponse<UserLogged>): void => setResponse(response))
      .catch((error: any): void => setError(error.message))
      .finally((): void => setLoading(false));
  }, [userData]);

  return {
    setUserData,
    loading,
    error,
    response,
  };
};
