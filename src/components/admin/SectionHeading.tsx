import { SectionHeadingProps } from "../../types";

export const SectionHeading = ({ heading, className }: SectionHeadingProps): JSX.Element => {
  return (
    <h3 className={`mb-4 text-lg text-gray-700 font-medium ${className}`}>
      {heading}
    </h3>
  );
};
