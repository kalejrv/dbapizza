import { HamburgerMenuProps } from "../../types";

export const HamburgerMenu = ({ menuIsOpen, handleClick }: HamburgerMenuProps): JSX.Element => {
  return (
    <button className="border-none outline-none" onClick={handleClick}>
      <div className="w-7 h-5 flex flex-col justify-between">
        <span className={`w-full h-[3px] bg-black rounded-4xl transition-transform transiton-opacity duration-300 ${menuIsOpen ? "transform rotate-45 translate-y-[7px]" : ""}`}></span>
        <span className={`w-full h-[3px] bg-black rounded-4xl transition-transform transiton-opacity duration-300 ${menuIsOpen ? "opacity-0": ""}`}></span>
        <span className={`w-full h-[3px] bg-black rounded-4xl transition-transform transiton-opacity duration-300 ${menuIsOpen ? "transform -rotate-45 -translate-y-[10px]" : ""}`}></span>
      </div>
    </button>
  );
};
