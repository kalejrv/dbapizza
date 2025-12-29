import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../state";
import { AuthState } from "../../../types";
import {  Menu, Notifications, SearchBar, Theme } from "../..";

export const AppNavbar = (): JSX.Element => {
  const { user } = useSelector((state: RootState): AuthState => state.auth);
  
  return (
    <header>
      <nav className="w-full px-6 py-3.5 flex justify-between items-center border-b-1 border-gray-300 bg-white">
        {
          (user?.role === "admin")
          ? <SearchBar />
          : <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>
        }

        <div className="flex justify-center items-center gap-x-3.5">
          <Theme />

          {(user?.role === "admin") && <Notifications />}
          
          <Menu />
        </div>
      </nav>
    </header>
  );
};
