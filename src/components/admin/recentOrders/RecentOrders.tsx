import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Order } from "../../../types";
import { useGetOrdersQuery } from "../../../state/services";
import { Loader, SectionCard, SectionHeading } from "../../";
import { RecentOrdersItem } from "./RecentOrdersItem";
import { RecentOrdersSearchBar } from "./RecentOrdersSearchBar";

export const RecentOrders = (): JSX.Element => {
  const { data: ordersResponse, isLoading } = useGetOrdersQuery({ page: 1, limit: 10});
  const items: Order[] = ordersResponse?.data?.items ?? [];
  const [ordersByCode, setOrdersByCode] = useState<Order[]>([]);

  const [searchParams] = useSearchParams();
  const query: string = searchParams.get("recentOrdersCode") || "";

  useEffect((): void => {
    const orders = items.filter((item): boolean => item.code.includes(query));
    setOrdersByCode(orders);
  }, [query]);
  
  return (
    <SectionCard className="mt-4 p-0!">
      <div className="mb-4 p-4 w-full flex justify-between items-center">
        <SectionHeading heading="Recent orders" className="mb-0!" />

        <RecentOrdersSearchBar disabled={isLoading}/>
      </div>

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
            <tbody className="p-6 flex justify-center items-center">
              <tr>
                <td>
                  <Loader size="lg" width={5} color="red" style="dotted" />
                </td>
              </tr>
            </tbody>
          )
        }

        <tbody className="block divide-y divide-gray-200">
          {
            (!query) && (
              items.map((order: Order): JSX.Element => (
                <RecentOrdersItem key={order._id} {...order} />
              ))
            )
          }
          
          {
            ((query.length > 0) && (ordersByCode.length > 0)) && (
              ordersByCode.map((order: Order): JSX.Element => (
                <RecentOrdersItem key={order._id} {...order} />
              ))
            )
          }
           
          {
            (!isLoading && (query.length > 0) && (ordersByCode.length === 0)) && (
              <tr className="p-6 flex justify-center items-center rounded-b-2xl">
                <td>
                  <p className="text-gray-700">There aren't orders with code: "{query}".</p>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </SectionCard>
  );
};
