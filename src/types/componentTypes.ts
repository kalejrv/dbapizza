import { ReactNode } from "react";
import { Pizza } from "./ApiResponseTypes";

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
  className?: string;
  children: ReactNode;
};

export interface DeliveryCardProps {
  src: string;
  title: string;
  children: ReactNode;
};

export interface PizzaCardProps extends Pizza { };
