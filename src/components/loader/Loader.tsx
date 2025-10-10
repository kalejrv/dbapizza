import { LoaderProps } from "../../types";
import "./loader.css";

export const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
    <div className={`loader ${className}`}></div>
  );
};
