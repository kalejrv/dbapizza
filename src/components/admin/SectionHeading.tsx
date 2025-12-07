import { FC } from "react";
import { SectionHeadingProps } from "../../types";

export const SectionHeading: FC<SectionHeadingProps> = ({ heading, className }): JSX.Element => {
  return (
    <h3 className={`mb-4 text-lg text-gray-700 font-medium ${className}`}>
      {heading}
    </h3>
  );
};
