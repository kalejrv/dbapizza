import { ReactNode } from "react";

export interface HamburgerMenuButtonProps {
  menuIsOpen: boolean;
  handleClickMenu: () => void;
};

export interface NavigationLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
};

export interface ToppingImageProps {
  topping: string;
  className: string;
};

export interface SectionTitleProps {
  mainTitle: boolean;
  content: string | ReactNode;
  className?: string;
};

export interface DeliveryCardProps {
  src: string;
  title: string;
  content: string | ReactNode;
};
