import { SectionCardProps } from "../../types";

export const SectionCard = ({ children, className }: SectionCardProps): JSX.Element => {
  return (
    <section className={`w-full p-4 border-1 border-gray-300 bg-white rounded-2xl ${className}`}>
      {children}
    </section>
  );
};
