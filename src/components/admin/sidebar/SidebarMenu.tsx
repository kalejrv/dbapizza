import { useMenu } from "../../../hooks";
import { SidebarMenuProps } from "../../../types";

export const SidebarMenu = ({ name, children }: SidebarMenuProps): JSX.Element => {
  const { menuIsOpen, setMenuIsOpen } = useMenu();

  const handleClick = (): void => {
    setMenuIsOpen(!menuIsOpen);
  };

  let icon;
  switch (name) {
    case "Pizzas":
      icon = (
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
          <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z" />
          <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634a14.944 14.944 0 0 0 6.502 -1.479" />
          <path d="M13 11.01v-.01" />
          <path d="M11 14v-.01" />
        </svg>
      );
      break;
    case "Orders":
      icon = (
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
          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
        </svg>
      );
  };

  return (
    <div>
      <div className={`px-4 py-2 flex justify-between items-center rounded-lg transition-all duration-300 hover:cursor-pointer ${menuIsOpen ? "bg-blue-50" : "hover:bg-gray-100"}`} onClick={handleClick}>
        <div className={`${menuIsOpen ? "text-blue-700" : "text-gray-700"} flex justify-start items-center gap-x-1.5`}>
          {icon}
          {name}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={`w-5 h-5 transition-transform duration-300 ${menuIsOpen ? "fill-blue-500 rotate-180" : "fill-gray-500 rotate-0"}`}>
          <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
        </svg>
      </div>
      
      {
        menuIsOpen && (
          <div className="ml-6 mt-2 flex flex-col gap-x-2">
            {children}
          </div>
        )
      }
    </div>
  );
};
