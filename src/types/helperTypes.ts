import { UserData } from "./hookTypes";

/* Request API. */
export interface RequestAPIProps {
  url: string;
  method: string;
  userData?: UserData;
};
