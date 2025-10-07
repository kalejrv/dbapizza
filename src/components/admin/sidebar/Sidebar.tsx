import { SidebarLink } from "./SidebarLink";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = (): JSX.Element => {
  return (
    <aside>
      <div className="h-[77px] flex justify-center items-center gap-x-2">
        <div className="w-8 h-8 text-white flex justify-center items-center rounded-lg bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
        </div>

        <h1 className="text-2xl text-gray-700 font-extrabold"><span className="font-logo">DBAPizza</span> Admin</h1>
      </div>

      <div className="h-[calc(100%-77px)] p-4 flex flex-col gap-y-2">
        <SidebarLink href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M13.45 11.55l2.05 -2.05" />
            <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
          </svg>
          Dashboard
        </SidebarLink>
        
        <SidebarLink href="users">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          Users
        </SidebarLink>

        <SidebarMenu name="Pizzas">
          <SidebarLink href="pizzas/sizes">Sizes</SidebarLink>
          <SidebarLink href="pizzas/flavors">Flavors</SidebarLink>
          <SidebarLink href="pizzas/toppings">Toppings</SidebarLink>
        </SidebarMenu>
        
        <SidebarMenu name="Orders">
          <SidebarLink href="orders/sizes">status</SidebarLink>
        </SidebarMenu>
      </div>
    </aside>
  );
};
