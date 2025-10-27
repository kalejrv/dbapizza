import { HOC } from "../";

/* Sidebar. */
export interface SidebarLinkProps extends HOC {
  href: string;
};
export interface SidebarMenuProps extends HOC {
  name: string;
};

/* Overview. */
export interface OverviewCardProps {
  name: string;
  loading: boolean;
  totalItems: number | undefined;
  currentMonthItemsCount: number;
  currentMonthItemsText: string;
  growthRate: number;
};

/* Section heading. */
export interface SectionHeadingProps extends Pick<HOC, 'className'> {
  heading: string,
};

/* Section card. */
export interface SectionCardProps extends HOC { };

/* Recent orders. */
export const statusColor: Record<string, string> = {
  "Pending": "text-yellow-600 bg-yellow-100",
  "Preparing": "text-blue-600 bg-blue-100",
  "Done": "text-teal-600 bg-teal-100",
  "On the way": "text-lime-600 bg-lime-100",
  "Delivered": "text-green-600 bg-green-100",
  "Cancelled": "text-red-600 bg-red-100",
};
export const deliveryTypeColor: Record<string, string> = {
  "Delivery": "text-fuchsia-600 bg-fuchsia-100",
  "PickUp": "text-sky-600 bg-sky-100",
};
