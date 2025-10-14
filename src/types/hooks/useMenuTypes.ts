import { Dispatch, SetStateAction } from "react";

export interface UseMenu {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};
