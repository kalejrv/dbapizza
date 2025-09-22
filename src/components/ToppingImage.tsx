import { ToppingImageProps } from "../types";

export const ToppingImage = ({ topping, className }: ToppingImageProps): JSX.Element => {
  return (
    <div className={`
      absolute
      w-20
      h-20
      sm:w-24
      sm:h-24
      md:w-28
      md:h-28
      lg:w-32
      lg:h-32
      xl:w-36
      xl:h-36
      ${className}`}
    >
      <img src={`assets/images/toppings/${topping}.png`} className="w-full h-full object-fill" alt="Topping image." />
    </div>
  );
};
