import { FC, useEffect } from "react";
import { DeliveryCard, Navbar, NavigationLink, PizzaCard, SectionTitle, Testimonials, ToppingImage } from "../components";
import { usePizzas } from "../hooks";

export const Home: FC = (): JSX.Element => {
  const { loading, response } = usePizzas();

  useEffect(() => {
    document.title = "Home | DBAPizza";
  }, []);
  
  return (
    <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto">
      <header className="w-full flex flex-col items-center overflow-hidden">
        <Navbar />

        <div className="mt-12 mb-4 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Your delicious Pizza <br /> start here!</h1>
          <p className="my-6 text-sm sm:text-base">Gather your family and friends and enjoy the best pizza <br /> in city. Freshly made with the best ingredients and delivered hot!</p>
          <NavigationLink href="/pizzas" className="text-white bg-red-500">View our pizzas</NavigationLink>
        </div>

        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] relative">
          <img src="assets/images/pizza-header-banner.png" alt="Delicious pizza image." className="w-full h-full object-cover"/>
        
          <ToppingImage topping="peppers" className="left-10 -top-14 sm:left-10 sm:-top-12 md:left-12 md:-top-10 lg:left-12 lg:-top-10 xl:left-0 xl:-top-8" />
          <ToppingImage topping="pepper" className="-left-4 top-12 sm:-left-12 sm:top-20 md:-left-18 md:top-28 lg:-left-24 lg:top-38 xl:-left-40 xl:top-38 rotate-45" />
          <ToppingImage topping="onions" className="left-2 bottom-0 sm:-left-20 sm:bottom-40 md:-left-22 md:bottom-44 lg:-left-28 lg:bottom-52 xl:-left-44 xl:bottom-48" />
          <ToppingImage topping="spinach" className="hidden sm:flex sm:-left-8 sm:bottom-0 md:-left-6 md:-bottom-2 lg:-left-4 lg:bottom-0 xl:-left-8 xl:bottom-0 rotate-300" />
          
          <ToppingImage topping="pineapple" className="right-10 -top-14 sm:right-10 sm:-top-12 md:right-12 md:-top-10 lg:right-12 lg:-top-10 xl:right-0 xl:-top-8" />
          <ToppingImage topping="mushrooms" className="-right-4 top-12 sm:-right-12 sm:top-20 md:-right-18 md:top-28 lg:-right-24 lg:top-38 xl:-right-40 xl:top-38 rotate-45" />
          <ToppingImage topping="olives" className="right-2 bottom-0 sm:-right-20 sm:bottom-40 md:-right-22 md:bottom-44 lg:-right-28 lg:bottom-52 xl:-right-44 xl:bottom-48" />
          <ToppingImage topping="tomato" className="hidden sm:flex sm:-right-8 sm:bottom-0 md:-right-6 md:-bottom-2 lg:-right-4 lg:bottom-0 xl:-right-8 xl:bottom-0 rotate-45" />
        </div>
      </header>

      <main className="w-full px-2 xl:px-0 mt-12 py-12">
        <section className="mx-auto w-[80%] sm:w-[90%] xl:w-[80%]">
          <SectionTitle mainTitle={true}>Our Offerings</SectionTitle>
          <SectionTitle mainTitle={false}>Your preferred food<br />delivery companion</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
            <DeliveryCard src="delivery-1" title="Convenient Ordering">Ordering food requires just a<br />simple few steps.</DeliveryCard>
            <DeliveryCard src="delivery-2" title="Quickest Delivery">Consistently timely delivery,<br />even faster.</DeliveryCard>
            <DeliveryCard src="delivery-3" title="Superior Quality">For us, quality is paramount,<br />not just speed.</DeliveryCard>
          </div>
        </section>
        
        <section className="my-32 mx-auto w-[80%] sm:w-[90%] xl:w-full">
          <SectionTitle mainTitle={true}>Our Selection</SectionTitle>
          <SectionTitle mainTitle={false}>A menu that will always<br />capture your heart</SectionTitle>

            {
              (loading)
                ? (<p>Loading...</p>)
                : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      response?.pizzas.map((pizza) => (
                        <PizzaCard key={pizza._id} {...pizza} />
                      ))
                    }
                  </div>)
            }
        </section>

        <section className="mx-auto w-[80%] sm:w-[90%] xl:w-full">
          <SectionTitle mainTitle={true}>Customer Testimonials</SectionTitle>
          <SectionTitle mainTitle={false}>What customers have<br />to say about us</SectionTitle>
        
          <div className="w-full h-[450px] flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="order-2 md:order-1 w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-y-4">
              <h3 className="text-sm md:text-base text-center font-light">Our success is the customer happiness tasting our pizzas.</h3>

              <Testimonials />
            </div>

            <div className="order-1 md:order-2 w-full md:w-1/2 h-full">
              <img src="assets/images/testimonials/testimonials-banner.png" alt="A chef carrying off some pizza ingredients" loading="lazy" className="w-full h-full object-contain"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
