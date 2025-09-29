import { Outlet } from "react-router-dom";
import { Footer, Navbar, PizzaLink, SkeletonPizzaLink } from "../components";
import { useGetPizzas } from "../hooks";
import { Pizza } from "../types";

export const Pizzas = (): JSX.Element => {
  const { response, loading } = useGetPizzas({ page: 1, limit: 10 });
  const { items } = response.data;

  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <header className="w-full flex flex-col items-center overflow-hidden">
        <Navbar />

        <div className="mt-12 mb-4 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Enjoy each of our<br /> tasty pizzas!</h1>
        </div>
      </header>
      
      <div className="mt-12 mb-32 mx-auto w-[80%] sm:w-[90%] xl:w-[80%] gap-x-4">
        <section className="w-full">
          <ul className="mx-auto mb-6 w-fit flex justify-center flex-wrap gap-2 rounded-2xl">
            {
              (loading)
              ? (
                Array.from({ length: 7 }).map((_:unknown, index: number): JSX.Element => (
                  <SkeletonPizzaLink key={index}/>
                ))
              )
              : (
                items.map((item: Pizza): JSX.Element => (
                  <PizzaLink key={item._id} id={item._id} name={item.flavor.name}/>
                ))
              )
            }
          </ul>
        </section>
        
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};
