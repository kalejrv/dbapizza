import { useGetUsersStatsByMonthQuery, useGetUsersQuery, useGetOrdersQuery, useGetOrdersStatsByMonthQuery } from "../../../state/services";
import { SectionHeading } from "../SectionHeading";
import { OverviewCard } from "./OverviewCard";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;

export const Overview = (): JSX.Element => {
  const { data: usersResponse, isLoading: usersIsLoading } = useGetUsersQuery();
  const { data: usersStatsByMonthResponse } = useGetUsersStatsByMonthQuery({ year, month });
  
  const { data: ordersResponse, isLoading: ordersLoading } = useGetOrdersQuery();
  const { data: ordersStatsByMonthResponse } = useGetOrdersStatsByMonthQuery({ year, month });

  const users = usersResponse?.data;
  const usersStats = usersStatsByMonthResponse?.data;
  
  const orders = ordersResponse?.data;
  const ordersStats = ordersStatsByMonthResponse?.data;

  return (
    <section className="w-full p-4 border-1 border-gray-300 rounded-2xl bg-white">
      <SectionHeading heading="Overview" />

      <div className="w-full grid grid-cols-3 gap-4">
        <OverviewCard
          name="Users"
          loading={usersIsLoading}
          totalItems={users?.totalItems || 0}
          growthRate={usersStats?.items.itemsGrowthRate || 0}
          currentMonthItemsCount={usersStats?.items.currentMonthItemsCount || 0}
          currentMonthItemsText="New users this month"
        />
        
        <OverviewCard
          name="Orders"
          loading={ordersLoading}
          totalItems={orders?.totalItems || 0}
          growthRate={ordersStats?.items.itemsGrowthRate || 0}
          currentMonthItemsCount={ordersStats?.items.currentMonthItemsCount || 0}
          currentMonthItemsText="New orders this month"
        />
        
        <OverviewCard
          name="Sales"
          loading={ordersLoading}
          totalItems={ordersStats?.sales.totalSalesAmount || 0}
          growthRate={ordersStats?.sales.salesGrowthRate || 0}
          currentMonthItemsCount={ordersStats?.sales.currentMonthSalesAmount || 0}
          currentMonthItemsText="Sales this month"
        />
      </div>
    </section>
  );
};
