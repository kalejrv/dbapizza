import { LoaderProps } from "../../types";
import "./loader.css";

export const Loader = ({ size, width }: LoaderProps): JSX.Element => {
  return (
    <div className={`loader w-${size} h-${size} border-${width} border-b-red-500! border-l-red-500!`}>
    </div>
  );
};
