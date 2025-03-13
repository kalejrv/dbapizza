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
