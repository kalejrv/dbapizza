import { HOC } from "./globalTypes";

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
