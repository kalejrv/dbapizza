import { Pizza, Size, Stats, Status, User } from "../";

/* User. */
export type OrderUser = Pick<User, "firstName" | "lastName" | "address" | "phone" | "email">;

/* Item. */
export type OrderItem = {
  pizza: Pizza | string;
  selectedSize: Size | string;
  extra?: {
    toppings: string[],
    total: number,
  };
  quantity: number;
  total: number;
};

/* Delivery. */
export enum DeliveryType {
  Delivery = "Delivery",
  PickUp = "PickUp",
};
export type OrderDelivery = {
  type: DeliveryType;
  estimatedTime: number;
};

/* Status history. */
export interface OrderStatusHistory extends Pick<Status, "name"> {
  timestamp: Date,
};

export type Order = {
  _id: string;
  code: string;
  user: OrderUser;
  items: OrderItem[];
  delivery: OrderDelivery;
  status: Status | string;
  statusHistory: OrderStatusHistory[];
  notes?: string;
  total: number;
};

export interface OrderStats extends Stats {
  sales: {
    currentMonthSalesAmount: number,
    lastMonthSalesAmount: number,
    salesGrowthRate: number,
    totalSalesAmount: number,
  };
};
