export const SkeletonPizza = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 animate-pulse">
      <div className="w-full md:w-2/3 h-72 md:h-96 flex justify-center content-center bg-gray-200 rounded-2xl">
        <img src="/public/assets/icons/image.svg" alt="Image icon." className="w-32" />
      </div>

      <div className="w-full md:w-1/3 self-center p-4 flex flex-col gap-y-6 bg-gray-200 rounded-2xl">
        <div className="w-full h-12 bg-gray-300 rounded"></div>
        <div className="w-2/3 h-12 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-12 bg-gray-300 rounded"></div>
        <div className="self-end w-1/2 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
