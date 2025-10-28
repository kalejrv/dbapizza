import { FC } from "react";
import { OrderItemsDetailProps } from "../../../types";

export const OrderItemsDetail: FC<OrderItemsDetailProps> = ({ items }): JSX.Element => {  
  return (
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr className="py-3 px-4 grid grid-cols-10">
          <th className="col-span-3 col-start-1 col-end-4 text-sm text-gray-500 text-left font-medium">Pizza</th>
          <th className="col-span-2 col-start-4 col-end-6 text-sm text-gray-500 text-left font-medium">Size</th>
          <th className="col-span-1 col-start-6 col-end-7 text-sm text-gray-500 text-left font-medium">Price</th>
          <th className="col-span-2 col-start-7 col-end-9 text-sm text-gray-500 text-left font-medium">Toppings</th>
          <th className="col-span-1 col-start-9 col-end-10 text-sm text-gray-500 text-left font-medium">Quantity</th>
          <th className="col-span-1 col-start-10 col-end-11 text-sm text-gray-500 text-left font-medium">Total</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {
          items.map((item): JSX.Element => (
            <tr key={item._id} className="p-4 grid grid-cols-10">
              <td className="col-span-3 col-start-1 col-end-4 text-left flex items-start">
                <div className="flex flex-col">
                  <p className="text-gray-700">{item.pizza.flavor.name}</p>
                  <span className="pr-4 text-sm text-gray-500">{item.pizza.flavor.description}</span>
                </div>
              </td>

              <td className="col-span-2 col-start-4 col-end-6 text-gray-700 text-left flex items-start">
                {item.selectedSize.name}
              </td>
              
              <td className="col-span-1 col-start-6 col-end-7 text-gray-700 text-left flex items-start">
                <span>${item.selectedSize.price + item.pizza.flavor.price}</span>
              </td>

              <td className="col-span-2 col-start-7 col-end-9 text-gray-700 text-left flex items-start">
                <div className="w-full flex flex-col gap-y-3">
                  {
                    (item.extra && (item.extra?.toppings.length > 0))
                      ? (
                        item.extra?.toppings.map((topping): JSX.Element => (
                          <div key={topping._id} className="w-fit flex flex-col">
                            <span>{topping.name}</span>
                            <span className="text-sm text-gray-500">Price: ${topping.price}</span>
                          </div>
                        ))
                      )
                      : (<p>No toppings.</p>)
                  }
                </div>
              </td>

              <td className="col-span-1 col-start-9 col-end-10 text-gray-700 text-left flex items-start">
                {item.quantity}
              </td>

              <td className="col-span-1 col-start-10 col-end-11 text-gray-700 text-left flex items-start">
                ${item.total}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
