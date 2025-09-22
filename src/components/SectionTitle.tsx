import { SectionTitleProps } from "../types";

export const SectionTitle = ({ mainTitle, children, className }: SectionTitleProps): JSX.Element => {
  return (
    <h2 className={`text-center ${className} ${mainTitle ? "text-sm md:text-lg text-red-500 font-semibold uppercase" : "mt-4 mb-8 text-2xl md:text-4xl text-black font-bold"}`}>
      {children}
    </h2>
  );
};
