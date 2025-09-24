import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { PizzaLoader } from "../../types";
import { useGetPizza } from "../../hooks";
import { config } from "../../config";
import { NavigationLink } from "../NavigationLink";
import { SkeletonPizza } from "./SkeletonPizza";

export const loader = ({ params }: LoaderFunctionArgs): PizzaLoader => {
  return {
    id: params.id as string,
  };
};

export const Pizza = (): JSX.Element => {
  const { id } = useLoaderData<typeof loader>();
  const { loading, response } = useGetPizza({ id });
  const pizza = response?.data;

  return (
    <div>
      {loading && <SkeletonPizza />}

      {(!loading && response?.data) && (
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 lg:w-2/3 h-72 md:h-96">
            <img
              src={`${config.APIBaseUrl}/images/pizzas/${response.data.image}`}
              alt={`${pizza?.flavor.name} pizza image.`}
              title={`${pizza?.flavor.name} pizza image.`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 self-center p-4 flex flex-col gap-y-6 bg-gray-100 rounded-2xl">
            <div className="flex flex-col">
              <h2 className="text-3xl text-black font-semibold">{pizza?.flavor.name} pizza.</h2>
              <span className="w-fit px-2 text-[12px] text-white bg-red-500 rounded-full">{pizza?.size.name} size</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Made with delicious ingredients:</span>
              <p className="text-lg text-black">{pizza?.flavor.description}</p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">And best price:</span>
              <p className="w-fit text-2xl text-black">C${pizza?.price}.00</p>
            </div>

            <NavigationLink
              href="/signin"
              className="md:self-end w-full md:w-1/2 text-white text-center bg-red-500 rounded-full"
            >
              Order now
            </NavigationLink>
          </div>
        </div>
      )}
    </div>
  );
};
