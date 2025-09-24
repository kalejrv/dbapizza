import { NavLink, NavLinkRenderProps } from "react-router-dom"
import { PizzaLinkProps } from "../../types"

export const PizzaLink = ({ id, name }: PizzaLinkProps): JSX.Element => {
  return (
    <li className="w-fit">
      <NavLink
        to={`/pizzas/${id}`}
        className={
          ({ isActive, isPending }: NavLinkRenderProps): string =>
            isActive
            ? "w-fit px-4 py-1 text-center flex text-white border-1 border-red-500 bg-red-500 rounded-full"
            : isPending
              ? "text-gray-500"
              : "w-fit px-4 py-1 text-center flex text-red-500 border-1 border-red-500 rounded-full transition-all duration-300 hover:text-white hover:bg-red-500 hover"
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
