import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

export const About = (): JSX.Element => {
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      <header className="w-full flex flex-col items-center overflow-hidden">
        <Navbar />

        <div className="mt-12 mb-4 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">We believe <br /> every pizza tells a story.</h1>
        </div>
      </header>

      <main className="mt-12 mb-32 w-full">
        <div className="w-full flex flex-col gap-y-6">
          <div className="mx-auto w-[80%] sm:w-[90%] lg:w-[60%]">
            <p className="text-base md:text-lg text-center">Our mission is to craft irresistibly delicious pizzas that bring people together, one slice at a time. We use only the freshest ingredients, hand-tossed dough, and time-honored recipes to create flavors that ignite joy.</p>
            <br />
            <p className="text-base md:text-lg text-center">Each pizza is made with handcrafted dough, fresh ingredients, and DBAPizza’s unique touch. Explore our <Link to="/pizzas" className="text-red-500 border-b-2 border-transparent hover:border-b-red-500 transition-all duration-300">menu</Link> and find your favorite, from timeless classics to bold new flavors.</p>
          </div>

          <div className="mx-auto w-[80%] sm:w-[90%] lg:w-[60%]">
            <img
              src="assets/images/pages/about-page-banner.png"
              alt="An pizza image."
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
