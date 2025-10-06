import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./notifications.css";

const messages = [
  {
    name: "Jane Doe",
    message: "Your order has been shipped!",
    time: "2 hours ago",
  },
  {
    name: "John Smith",
    message: "New comment on your post.",
    time: "1 day ago",
  },
  {
    name: "Alice Johnson",
    message: "Your password was changed successfully.",
    time: "3 days ago",
  },
  {
    name: "Bob Brown",
    message: "You have a new follower.",
    time: "5 days ago",
  },
  {
    name: "Charlie Davis",
    message: "Your subscription is about to expire.",
    time: "1 week ago",
  },
  {
    name: "Eve Wilson",
    message: "New message from support.",
    time: "2 weeks ago",
  },
];

export const Notifications = (): JSX.Element => {
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  const handleClickNotifications = (): void => {
    alert("To Do...");
    return;
    setOpenNotifications(!openNotifications);
  };

  /* Close notifications by clicking outside notifications. */
  useEffect((): () => void => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setOpenNotifications(false);
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return (): void => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={notificationsRef}>
      <button className="w-11 h-11 text-gray-700 flex justify-center items-center border-1 border-gray-300 rounded-full outline-none relative hover:cursor-pointer" onClick={handleClickNotifications}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

        {(messages.length > 0) && (<div className="absolute top-0 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full"></div>)}
      </button>

      {
        openNotifications && (
          <div className="absolute right-0 mt-[18px] w-80 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 animate-fadeIn">
            <div className="p-4 flex justify-between items-center border-b-1 border-gray-200">
              <h3 className="text-gray-700">Messages</h3>
              
              <button className="w-8 h-8 text-gray-700 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-gray-100 hover:cursor-pointer" onClick={handleClickNotifications}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="px-2 py-2">
              {
                (messages.length > 0)
                ? (
                    <ul role="list" className="max-h-60 flex flex-col divide-y divide-gray-200 overflow-y-auto scrollbar">
                      {
                        messages.map((msg, index): JSX.Element => (
                          <li key={index}>
                            <Link to="#" className="p-2 flex items-start gap-x-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
                              <div className="w-10 h-10 text-white flex justify-center items-center bg-blue-500 rounded-full font-semibold">
                                {msg.name.slice(0, 1).toUpperCase()}
                              </div>

                              <div className="grow flex flex-col">
                                <p className="text-sm font-semibold text-gray-700">{msg.name}</p>

                                <p className="mb-1 text-sm text-gray-700 line-clamp-2">{msg.message}</p>
                                
                                <span className="text-[11px] text-gray-500">{msg.time}</span>
                              </div> 
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                )
                : (
                  <div className="p-4">
                    <p className="text-gray-700 text-center">There aren't new messages.</p>
                  </div>
                )
              }
            </div>
            
            <Link to="messages" className="block mx-2 mb-2 py-2 text-center text-gray-700 border-1 border-gray-300 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              View all messages
            </Link>
          </div>
        )
      }
    </div>
  );
};
