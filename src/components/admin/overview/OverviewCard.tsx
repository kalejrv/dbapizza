import { OverviewCardProps } from "../../../types";
import { Loader } from "../../loader";

export const OverviewCard = ({ name, loading, totalItems, growthRate, currentMonthItemsCount, currentMonthItemsText }: OverviewCardProps): JSX.Element => {
  let icon;
  switch (name) {
    case "Users":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
      );
      break;
    case "Orders":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
      break;
    case "Sales":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 17l6 -6l4 4l8 -8" />
          <path d="M14 7l7 0l0 7" />
        </svg>
      );
      break;
  };
  
  return (
    <div className="p-4 flex justify-between border-1 border-gray-300 rounded-2xl bg-white">
      <div>
        <div className="w-14 h-14 text-gray-700 flex justify-center items-center rounded-xl bg-gray-100">
          {icon}
        </div>
        
        <h2 className="mt-6 text-gray-600">{name}</h2>
        
        { 
          loading
            ? (<Loader size={8} width={3} />)
            : (<p className="text-4xl text-gray-700 font-bold">{totalItems}</p>)
        }
      </div>
      
      {
        loading
          ? (
            <Loader size={14} width={5}/>
          )
          : (
            <div className="flex flex-col items-end justify-between">
              <div className="flex flex-col items-end">
                <p className="text-5xl text-gray-700 font-bold">{currentMonthItemsCount}</p>
                <h2 className="text-gray-600">{currentMonthItemsText}</h2>
              </div>

              <div className="flex justify-center items-center gap-x-1">
                {
                  (growthRate === 0)
                    ? (
                      <div className="px-2 py-0.5 text-sm text-blue-600 font-medium flex justify-between items-center gap-x-1 bg-blue-50 rounded-full">
                        {growthRate}{"%"}
                      </div>
                    )
                    : (
                      (Math.sign(growthRate) === 1)
                        ? (
                            <div className="pl-1 pr-2 py-0.5 text-sm text-green-600 font-medium flex justify-between items-center gap-x-1 bg-green-50 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 5l0 14" />
                                <path d="M16 9l-4 -4" />
                                <path d="M8 9l4 -4" />
                              </svg>
                              {growthRate}{"%"}
                            </div>
                        )
                        : (
                            <div className="pl-1 pr-2 py-0.5 text-sm text-red-600 font-medium flex justify-between items-center gap-x-1 bg-red-50 rounded-full">
                              <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 5l0 14" />
                              <path d="M16 15l-4 4" />
                              <path d="M8 15l4 4" />
                              </svg>
                              {Math.abs(growthRate)}{"%"}
                            </div>
                        )
                    )
                }
                
                <span className="text-[12px] text-gray-500">Vs last month</span>
              </div>
            </div>
          )
      }
    </div>
  );
};
