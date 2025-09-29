export const SkeletonPizzaLink = (): JSX.Element => {
  return (
    <div className="w-20 md:w-24 lg:w-28 h-[30px] px-2 flex bg-gray-200 rounded-full animate-pulse">
      <div className="self-center w-1/2 md:w-2/3 h-3 bg-gray-300 rounded"></div>
    </div>
  );
};
