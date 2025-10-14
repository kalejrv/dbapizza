import { Dispatch, SetStateAction } from "react";
import { APIResponse, UserLogged } from "../data";
import { UseHook } from "./useHookTypes";

export type UserData = {
  [key: string]: string,
};

export interface UseAuthUserProps {
  url: string;
};

export interface UseAuthUser extends UseHook {
  setUserData: Dispatch<SetStateAction<UserData | null>>;
  response: APIResponse<UserLogged> | null;
};
