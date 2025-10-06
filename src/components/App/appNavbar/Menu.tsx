import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../state/slices/authSlice";
import { AuthState } from "../../../types";
import { RootState } from "../../../state";

export const Menu = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { user } = useSelector((state: RootState): AuthState => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickMenu = (): void => {
    setOpenMenu(!openMenu);
  };
  
  const handleClickLogout = (): void => {
    dispatch(logout());
    navigate("/signin");
  };

  /* Close menu by clicking outside menu. */
  useEffect((): () => void => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return (): void => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button className="flex items-center gap-x-3 outline-none hover:cursor-pointer" onClick={handleClickMenu}>
        <img src="https://i.pravatar.cc/40" alt="User avatar image." className="w-12 h-12 border-1 border-white rounded-full object-contain" />
        
        <span className="text-base text-gray-700">{user?.firstName}</span>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className={`w-4 h-4 fill-gray-500 transition-transform duration-300 ${openMenu ? "rotate-180" : "rotate-0"}`}>
          <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
        </svg>
      </button>
      
      {
        openMenu && (
          <div className="absolute right-0 mt-[15px] w-60 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 animate-fadeIn">
            <div className="p-4 flex flex-col items-start">
              <div className="flex items-center gap-x-1">
                <p className="text-sm font-semibold text-gray-600">{user?.firstName} {user?.lastName}</p>
                
                <span className="px-1 text-[11px] text-blue-500 bg-blue-100 rounded-full">
                  {user?.role.slice(0, 1).toUpperCase()}
                  {user?.role.slice(1, user?.role.length)}
                </span>
              </div>
            
              <span className="text-[11px] text-gray-500">{user?.email}</span>
            </div>
            
            <div className="px-2 pb-2">
              <ul>
                <li>
                  <Link to="profile" className="px-4 py-2 text-gray-700 flex items-center gap-x-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Edit profile
                  </Link>
                </li>
                
                <li>
                  <Link to="account" className="px-4 py-2 text-gray-700 flex items-center gap-x-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Account settings
                  </Link>
                </li>
              </ul>

              <div className="my-2 w-full border-t-1 border-gray-200"></div>

              <button className="w-full px-4 py-2 text-gray-700 flex items-center gap-x-2 rounded-lg transition-all duration-300 hover:text-red-500 hover:bg-gray-100 hover:cursor-pointer" onClick={handleClickLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};
