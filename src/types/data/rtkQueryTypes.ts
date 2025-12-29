/* Tag type. */
export enum TagType {
  Users = "Users",
  Pizzas = "Pizzas",
  Orders = "Orders",
};

/* Tag. */
export type Tag = {
  type: TagType;
  id: string;
};

/* Cache time. */
export const LIVE_CACHE_TIME: number = 300; /* 5 minutes. */
