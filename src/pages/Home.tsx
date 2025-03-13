import { FC } from "react";
import { Navbar, NavigationLink, ToppingImage } from "../components";

export const Home: FC = (): JSX.Element => {
  return (
    <div className="container mx-auto">
      <header className="h-screen flex flex-col items-center overflow-hidden">
        <Navbar />

        <div className="mt-12 mb-4 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Your delicious Pizza <br /> start here!</h1>
          <p className="my-6 text-sm sm:text-base">Gather your family and friends and enjoy the best pizza <br /> in city. Freshly made and delivered hot!</p>
          <NavigationLink href="/pizzas" className="text-white bg-red-500">View our pizzas</NavigationLink>
        </div>

        <div className="w-full lg:w-[800px] relative">
          <img src="/src/assets/images/pizza-header-banner.png" alt="Delicious pizza image." className="w-full h-full object-cover"/>
        
          <ToppingImage topping="spinach" className="hidden xl:flex xl:-left-24 xl:-top-64 rotate-300" />
          <ToppingImage topping="onions" className="hidden sm:flex sm:left-0 sm:-top-36 lg:-left-24 lg:-top-36 xl:-left-56 xl:-top-30" />
          <ToppingImage topping="peppers" className="left-10 -top-14 sm:left-24 sm:-top-12 lg:left-12 lg:-top-10 xl:left-0 xl:-top-8" />
          <ToppingImage topping="pepper" className="-left-4 top-12 sm:left-0 sm:top-14 lg:-left-14 lg:top-32 xl:-left-40 xl:top-24 rotate-45" />
          
          <ToppingImage topping="pineapple" className="hidden xl:flex xl:-right-24 xl:-top-64" />
          <ToppingImage topping="tomato" className="hidden sm:flex sm:right-0 sm:-top-36 lg:-right-24 lg:-top-36 xl:-right-56 xl:-top-30 rotate-12" />
          <ToppingImage topping="mushrooms" className="right-10 -top-14 sm:right-24 sm:-top-12 lg:right-12 lg:-top-10 xl:right-0 xl:-top-8" />
          <ToppingImage topping="olives" className="-right-4 top-12 sm:right-0 sm:top-14 lg:-right-14 lg:top-32 xl:-right-40 xl:top-24 rotate-45" />
        </div>
      </header>

      <div className="mt-24 w-full h-98 bg-blue-500"></div>
    </div>
  );
};
