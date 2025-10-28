import { Pizza, Size, Stats, Status, StatusOption, Topping, User } from "../";

/* User. */
export type OrderUser = Pick<User, "firstName" | "lastName" | "address" | "phone" | "email">;

/* Item. */
export type OrderItem = {
  _id: string;
  pizza: Pizza;
  selectedSize: Size;
  extra?: {
    toppings: Topping[],
    total: number,
  };
  quantity: number;
  total: number;
};

/* Delivery. */
export type DeliveryType = "Delivery" | "PickUp";
export type OrderDelivery = {
  type: DeliveryType;
  estimatedTime: number;
};

/* Status history. */
export interface OrderStatusHistory {
  name: StatusOption;
  timestamp: Date;
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
  createdAt: string;
};

export interface OrderStats extends Stats {
  sales: {
    currentMonthSalesAmount: number,
    lastMonthSalesAmount: number,
    salesGrowthRate: number,
    totalSalesAmount: number,
  };
};
