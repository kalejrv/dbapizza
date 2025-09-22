import { useState } from "react";
import { NavLink, NavLinkRenderProps } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { MenuIsOpen, Page, pages } from "../../types";
import { NavigationLink } from "../";

export const MobileMenu = (): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<MenuIsOpen>(false);
    
  const handleClick = (): void => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <HamburgerMenu menuIsOpen={menuIsOpen} handleClick={handleClick} />
      
      {menuIsOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={handleClick}></div>}
      
      <div className={`fixed top-0 bottom-0 px-2 py-3.5 w-1/2 sm:w-1/3 bg-white transition-all ease-in-out duration-500 z-20 ${menuIsOpen ? "right-0" : "-right-[100%]"}`}>
        <div className="h-full flex flex-col items-start gap-y-12">
          <HamburgerMenu menuIsOpen={menuIsOpen} handleClick={handleClick} />

          <nav className="w-full h-full flex flex-col justify-between items-center">
            <ul className="w-full flex flex-col items-center gap-y-6 text-xl font-semibold">
              {
                pages.map((page: Page): JSX.Element => (
                  <li key={page.name}>
                    <NavLink to={page.url} className={({ isActive }: NavLinkRenderProps): string => isActive ? "text-red-500" : "text-black"}>{page.name}</NavLink>
                  </li>
                ))
              }
            </ul>

            <div className="w-full flex flex-col gap-y-2">
              <NavigationLink href="/signin" className="text-white bg-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M19 3H5c-1.11 0-2 .89-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8.92 12.58L11.5 17l5-5l-5-5l-1.42 1.41L12.67 11H3v2h9.67z"/></svg>
                Sign In
              </NavigationLink>
              
              <NavigationLink href="/signup" className="text-red-500 bg-white">
                Sign Up
              </NavigationLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
