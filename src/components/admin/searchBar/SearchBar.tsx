import { FC, useEffect, useRef, useState } from "react";
import { SearchBarProps } from "../../../types";
import "./searchBar.css";

export const SearchBar: FC<SearchBarProps> = ({ placeholder, disabled, value, onChange, onClear }): JSX.Element => {
  const searchBar = useRef<HTMLDivElement | null>(null);
  const [focusSearchBar, setFocusSearchBar] = useState<boolean>(false); 
  
  const handleClick = (): void => {
    setFocusSearchBar(true);
  };

  useEffect((): () => void => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (searchBar.current && !searchBar.current.contains(event.target as Node)) {
        setFocusSearchBar(false);
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return (): void => document.removeEventListener("mousedown", handleClickOutside);
  }, [focusSearchBar]);
  
  return (
    <div
      ref={searchBar}
      className={`w-[400px] flex items-center border-1 rounded-lg relative ${focusSearchBar ? "border-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" : "border-gray-300"}`}
    >
      <div className="mx-3 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      <input
        type="search"
        name="search"
        id="search"
        placeholder={`${placeholder || "Search or type a command..."}`}
        value={value || ""}
        disabled={disabled}
        className={`grow h-[42px] pr-2 text-gray-700 outline-none search-input placeholder:text-sm ${disabled && "cursor-not-allowed"}`}
        onClick={handleClick}
        onChange={(e): void => onChange(e.target.value)}
      />

      {
        value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 flex justify-center items-center gap-x-1 text-sm text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:cursor-pointer"
            onClick={onClear}
          >
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
              <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
              <path d="M18 13.3l-6.3 -6.3" />
            </svg>

            Clear
          </button>
        )
      }
    </div>
  );
};
