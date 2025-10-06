import { Navbar, NavigationLink } from "../components";

export const NotFound = (): JSX.Element => {
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col items-center">
      <header className="w-full flex flex-col items-center overflow-hidden">
        <Navbar />
      </header>

      <main className="w-[80%] sm:w-[90%] lg:w-[60%] h-[calc(100vh-52px)] flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center gap-x-4">
          <p className="text-[112px] md:text-[148px] text-red-500 font-bold">4</p>
          <img src="/assets/images/pizza-header-banner.png" alt="Pizza image."  className="w-28 md:w-38 w-28 md:h-38 object-contain"/>
          <p className="text-[112px] md:text-[148px] text-red-500 font-bold">4</p>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold">Whoops... Page Not Found</h1>

        <p className="mt-4 mb-8 text-sm md:text-base text-center text-gray-500">This page you are looking for might have been removed, <br className="hidden md:flex" /> had its name changed or is temporarily unavailable.</p>
      
        <NavigationLink href="/" className="text-white bg-red-500">
          Go to Homepage
        </NavigationLink>
      </main>
    </div>
  );
};
