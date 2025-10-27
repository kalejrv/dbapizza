/* Loader component. */
type LoaderSize = "sm" | "md" | "lg";
export const loaderSize: Record<LoaderSize, string> = {
  "sm": "w-10 h-10",
  "md": "w-11 h-11",
  "lg": "w-12 h-12",
};
type LoaderWidth = 1 | 2 | 3 | 4 | 5;
export const loaderWidth: Record<LoaderWidth, string> = {
  1: "border-1",
  2: "border-2",
  3: "border-3",
  4: "border-4",
  5: "border-5",
};
type LoaderColor = "red" | "green" | "yellow" | "blue" | "slate";
export const loaderColor: Record<LoaderColor, string> = {
  "red": "border-b-red-500! border-l-red-500!",
  "green": "border-b-green-500! border-l-green-500!",
  "yellow": "border-b-yellow-500! border-l-yellow-500!",
  "blue": "border-b-blue-500! border-l-blue-500!",
  "slate": "border-b-slate-500! border-l-slate-500!",
};
type LoaderStyle = "dashed" | "dotted" | "double";
export const loaderStyle: Record<LoaderStyle, string> = {
  "dashed": "border-dashed",
  "dotted": "border-dotted",
  "double": "border-double"
};
export interface LoaderProps {
  size: LoaderSize;
  width: LoaderWidth;
  color: LoaderColor;
  style?: LoaderStyle;
};
