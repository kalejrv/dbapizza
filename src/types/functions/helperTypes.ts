import { UserData } from "../hooks";

/* Request API. */
export interface RequestAPIProps {
  url: string;
  method: string;
  token?: string;
  userData?: UserData;
};
