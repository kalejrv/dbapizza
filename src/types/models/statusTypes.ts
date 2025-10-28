export type StatusOption = "Pending" | "Preparing" | "Done" | "On the way" | "Delivered" | "Cancelled";

export interface Status {
  _id: string;
  name: StatusOption;
  description: string;
};
