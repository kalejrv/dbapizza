import { Outlet } from "react-router-dom";
import { AppNavbar, Sidebar } from "../../components";
import "./dashboard.css";

export const Dasboard = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex">
      <section className="fixed w-[290px] h-full border-r-1 border-gray-300 bg-white">
        <Sidebar />
      </section>

      <div className="ml-[290px] w-[calc(100%-189px)]">
        <div className="fixed w-[calc(100%-290px)]">
          <AppNavbar />
        </div>

        <main className="mt-[77px] h-[calc(100%-77px)] p-4 bg-gray-50 overflow-y-scroll scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
