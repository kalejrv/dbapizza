import { FormEvent, useEffect, useRef, useState } from "react";
import "./searchBar.css";

export const SearchBar = (): JSX.Element => {
  const searchBar = useRef<HTMLFormElement | null>(null);
  const [focusSearchBar, setFocusSearchBar] = useState<boolean>(false);

  const handleClick = (): void => {
    setFocusSearchBar(true);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    alert("To Do...");
    return;
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
    <form
      ref={searchBar}
      className={`w-[400px] flex items-center border-1 rounded-lg ${focusSearchBar ? "border-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" : "border-gray-300"}`}
      onSubmit={handleSubmit}
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
        placeholder="Search or type a command..."
        className="grow h-[42px] pr-2 text-gray-700 outline-none search-input placeholder:text-sm"
        onClick={handleClick}
      />
    </form>
  );
};
