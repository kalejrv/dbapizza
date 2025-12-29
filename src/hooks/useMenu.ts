import { useState } from "react";
import { UseMenu } from "../types";

export const useMenu = (): UseMenu => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return {
    menuIsOpen,
    setMenuIsOpen,
  };
};
