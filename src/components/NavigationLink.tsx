import { Link } from "react-router-dom";
import { NavigationLinkProps } from "../types";

export const NavigationLink = ({ href, className, children }: NavigationLinkProps): JSX.Element => {
  return (
    <Link
      to={href}
      className={`py-0.5 px-4 flex justify-center items-center gap-x-1 text-base font-semibold border-1 rounded-4xl ${className}`}
    >
      {children}
    </Link>
  );
};
