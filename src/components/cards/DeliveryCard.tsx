import { DeliveryCardProps } from "../../types";

export const DeliveryCard = ({ src, title, children }: DeliveryCardProps): JSX.Element => {
  return (
    <div className="w-full pt-0 pb-4 flex flex-col items-center border-1 border-red-500 rounded-2xl shadow-xl">
      <div className="w-[200px] h-[200px]">
        <img src={`assets/images/${src}.png`} alt="Delivery man image." className="w-full h-full object-contain" />
      </div>

      <h3 className="my-2 text-lg md:text-xl font-semibold">{title}</h3>

      <p className="text-base md:text-lg text-center text-gray-600 font-normal">{children}</p>
    </div>
  );
};
