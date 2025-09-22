export const SkeletonPizzaCard = (): JSX.Element => {
  return (
    <div className="w-full h-[350px] flex flex-col justify-between bg-gray-200 rounded-2xl animate-pulse">
      <div className="h-40 bg-gray-300 rounded-2xl"></div>
      
      <div className="grow p-4 flex flex-col justify-between rounded-b-2xl">
        <div className="w-full">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>

        <div className="h-8 w-1/2 bg-gray-300 rounded-2xl"></div>
      </div>
    </div>
  );
};
