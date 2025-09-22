import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { Page, pages } from "../../types";
import { NavigationLink } from "../";

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <ul className="flex justify-center items-center gap-x-4 font-semibold">
        {
          pages.map((page: Page): JSX.Element => (
            <li key={page.name}>
              <NavLink to={page.url} className={({ isActive }: NavLinkRenderProps): string => isActive ? "text-red-500" : "text-black"}>
                {page.name}
              </NavLink>
            </li>
          ))
        }
      </ul>

      <div className=" flex justify-center items-center gap-x-2">
        <NavigationLink href="/signin" className="text-white bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5l-5-5l-1.42 1.41L12.67 11H3v2h9.67z"/></svg>
          Sign In
        </NavigationLink>

        <NavigationLink href="/signup" className="text-red-500 bg-white transition duration-300 hover:text-white hover:bg-red-500">
          Sign Up
        </NavigationLink>
      </div>
    </>
  );
};
