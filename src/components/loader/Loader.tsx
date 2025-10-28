import { loaderColor, LoaderProps, loaderSize, loaderStyle, loaderWidth } from "../../types";
import "./loader.css";

export const Loader = ({ size, width, color, style }: LoaderProps): JSX.Element => {
  return (
    <div
      className={`
        loader
        ${loaderSize[size]}
        ${loaderWidth[width]}
        ${loaderColor[color]}
        ${loaderStyle[style]}
      `}
    >
    </div>
  );
};
