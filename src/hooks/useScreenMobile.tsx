import { useEffect, useLayoutEffect, useState } from "react"
import { UseScreenMobile } from "../types";

const MAX_MOBILE_SIZE_PX: number = 767;

export const useScreenMobile = (): UseScreenMobile => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useLayoutEffect((): () => void => {
    const handleResize = (): void => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect((): void => {
    if (width <= MAX_MOBILE_SIZE_PX) {
      setMobile(true);
      return;
    };

    setMobile(false);
  }, [width]);
  
  return {
    mobile,
    width,
  };
};
