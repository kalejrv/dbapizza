import { SidebarLinkProps } from "../../../types";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

export const SidebarLink = ({ children, href }: SidebarLinkProps): JSX.Element => {
  return (
    <NavLink
      to={href}
      className={({ isActive }: NavLinkRenderProps): string => [
        "px-4 py-2 flex justify-start items-center gap-x-2 rounded-lg transition-all duration-300",
        isActive ? "text-blue-700 bg-blue-100" : "text-gray-700 hover:bg-gray-100",
      ].join(" ")}
    >
      {children}
    </NavLink>
  );
};
