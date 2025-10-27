export enum StatusOption {
  Pending = "Pending",
  Preparing = "Preparing",
  Done = "Done",
  OnTheWay = "On the way",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
};

export interface Status {
  _id: string;
  name: StatusOption;
  description: string;
};
