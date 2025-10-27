import { useGetOrdersQuery } from "../../../state/services";
import { deliveryTypeColor, Order, Status, statusColor } from "../../../types";
import { Loader } from "../../loader";
import { SectionCard } from "../SectionCard";
import { SectionHeading } from "../SectionHeading";

export const RecentOrders = (): JSX.Element => {
  const { data: ordersResponse, isLoading } = useGetOrdersQuery({ page: 1, limit: 10});
  const items: Order[] = ordersResponse?.data?.items ?? [];
  
  return (
    <SectionCard className="mt-4 p-0!">
      <SectionHeading heading="Recent orders" className="p-4"/>
      
      <table className="block">
        <thead className="block bg-gray-50">
          <tr className="p-3 grid grid-cols-15">
            <th className="col-span-2 col-end-3 text-sm text-gray-500 text-left font-medium"># Order</th>
            <th className="col-span-3 col-start-3 col-end-6 text-sm text-gray-500 text-left font-medium">Customer</th>
            <th className="col-span-1 col-start-6 col-end-7 text-sm text-gray-500 text-left font-medium">Items</th>
            <th className="col-span-2 col-start-7 col-end-9 text-sm text-gray-500 text-left font-medium">Delivery</th>
            <th className="col-span-2 col-start-9 col-end-11 text-sm text-gray-500 text-left font-medium">Date</th>
            <th className="col-span-2 col-start-11 col-end-13 text-sm text-gray-500 text-left font-medium">Total</th>
            <th className="col-span-2 col-start-13 col-end-15 text-sm text-gray-500 text-left font-medium">Status</th>
            <th className="col-span-1 col-start-15 col-end-16 text-sm text-gray-500 text-left font-medium">Action</th>
          </tr>
        </thead>

        {
          isLoading && (
            <div className="w-full p-6 flex justify-center items-center">
              <Loader size="lg" width={5} color="red" style="dotted" />
            </div>
          )
        }

        <tbody className="block divide-y divide-gray-200">
          {
            items.map((order: Order): JSX.Element => (
              <tr
                key={order._id}
                className="p-4 grid grid-cols-15 transition-all duration-300 last:rounded-b-2xl hover:bg-gray-50 hover:cursor-pointer"
                onClick={() => console.log(`Order: ${order.code}`)}
              >
                <td className="col-span-2 col-end-3 text-sm text-gray-700 flex items-center">
                  {order.code}
                </td>
                
                <td className="col-span-3 col-start-3 col-end-6 text-sm text-gray-700 flex items-center">
                  {
                    <div className="flex justify-start items-center gap-x-2">
                      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-100">
                        <span className="text-blue-700 font-medium">{order.user.firstName.slice(0, 1).toUpperCase()}</span>
                        <span className="text-blue-700 font-medium">{order.user.lastName.slice(0, 1).toUpperCase()}</span>
                      </div>

                      <div className="flex flex-col items-start">
                        <p>{order.user.firstName} {order.user.lastName}</p>
                        <span className="text-[12px] text-gray-500">{order.user.email}</span>
                      </div>
                    </div>
                  }
                </td>

                <td className="col-span-1 col-start-6 col-end-7 text-sm text-gray-700 text-left flex items-center">
                  {order.items.length}
                </td>

                <td className="col-span-2 col-start-7 col-end-9 text-sm text-gray-700 text-left flex items-center">
                  <span
                    className={`px-2 rounded-full ${deliveryTypeColor[order.delivery.type]}`}
                    title={`Estimated time: ${order.delivery.estimatedTime.toFixed(2)} minutes.`}
                  >
                    {order.delivery.type}
                  </span>
                </td>

                <td className="col-span-2 col-start-9 col-end-11 text-sm text-gray-700 text-left flex items-center">
                  {new Date().getFullYear()}
                </td>
                
                <td className="col-span-2 col-start-11 col-end-13 text-sm text-gray-700 text-left flex items-center">
                  ${order.total.toFixed(2)}
                </td>

                <td className="col-span-2 col-start-13 col-end-15 text-sm text-gray-700 text-left flex items-center">
                  <span
                    className={`px-2 rounded-full ${statusColor[(order.status as Status).name]}`}
                    title={(order.status as Status).description}
                  >
                    {(order.status as Status).name}
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </SectionCard>
  );
};
