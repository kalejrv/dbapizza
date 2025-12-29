/* Request API. */
export interface RequestAPIProps {
  url: string;
  method: string;
  token?: string;
};

/* Format date. */
export type DateFormat = "numeric" | "text-long" | "text-short";
