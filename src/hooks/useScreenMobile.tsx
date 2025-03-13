import { useEffect, useState } from "react"
import { UseScreenMobile } from "../types";

export const useScreenMobile = (): UseScreenMobile => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (width <= 767) {
      setMobile(true);
      return;
    };

    setMobile(false);
  }, [width]);
  
  return { mobile };
};
