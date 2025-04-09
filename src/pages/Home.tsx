import { FC, useEffect, useState } from "react";
import { DeliveryCard, Navbar, NavigationLink, PizzaCard, SectionTitle, Testimonials, ToppingImage } from "../components";
import { usePizzas } from "../hooks";
import { Link } from "react-router-dom";

export const Home: FC = (): JSX.Element => {
  const { loading, response } = usePizzas();
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    document.title = "Home | DBAPizza";
    setDate(new Date().getFullYear());
  }, []);
  
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
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
        
          <div className="w-full md:h-[450px] flex flex-col md:flex-row gap-8 md:gap-4">
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

      <footer className="mt-32 mx-auto w-[80%] sm:w-[90%] xl:w-full pb-4 flex flex-col justify-center items-center ">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 items-start gap-4 sm:gap-6">
          <div className="col-span-1 flex flex-col items-start justify-center">
            <h3 className="text-base md:text-lg font-semibold">Regarding</h3>

            <div className="mt-2 flex flex-col gap-y-2">
              <Link to="#" className="text-sm md:text-base text-gray-500">Our story</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Attributes</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Updates</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Selection</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-start justify-center">
            <h3 className="text-base md:text-lg font-semibold">Enterprise</h3>

            <div className="mt-2 flex flex-col gap-y-2">
              <Link to="#" className="text-sm md:text-base text-gray-500">Why PizzaDBA?</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Partner with Us</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">FAQ</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Blog</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-start justify-center">
            <h3 className="text-base md:text-lg font-semibold">Assistance</h3>

            <div className="mt-2 flex flex-col gap-y-2">
              <Link to="#" className="text-sm md:text-base text-gray-500">Support Center</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Feedback</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Contact Us</Link>
              <Link to="#" className="text-sm md:text-base text-gray-500">Accesibility</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-start justify-center">
            <h3 className="text-base md:text-lg font-semibold">Account</h3>

            <div className="mt-2 flex flex-col gap-y-2">
              <Link to="/signin" className="text-sm md:text-base text-gray-500">Make a new order</Link>
              <Link to="/signup" className="text-sm md:text-base text-gray-500">Are you a new user?</Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-start justify-center">
            <h3 className="text-base md:text-lg font-semibold">Get in Touch</h3>

            <div className="mt-2 flex flex-col gap-y-2">
              <Link to="#" className="text-sm md:text-base text-gray-500">Have a question or feedback?</Link>
            </div>
          </div>

          <div className="col-span-2 xl:col-span-3 flex flex-col items-start justify-center">
            <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>

            <p className="mt-2 mb-4 text-sm md:text-base text-gray-500">"Our mission is to craft irresistibly delicious pizzas that bring people together, one slice at a time. We use only the freshest ingredients, hand-tossed dough, and time-honored recipes to create flavors that ignite joy."</p>

            <div className="flex justify-start items-center gap-x-4">
              <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={22}>
                  <path fill="#fb2c36" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
                </svg>
              </Link>

              <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={22}>
                  <path fill="#fb2c36" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/>
                </svg>
              </Link>

              <Link to="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={22}>
                  <path fill="#fb2c36" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 mb-4 w-full h-[1px] bg-red-500"></div>
        
        <p className="text-[12px] md:text-sm text-gray-500">{date} PizzaDBA | All rights reserved.</p>
      </footer>
    </div>
  );
};
