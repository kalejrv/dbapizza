import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = (): JSX.Element => {
  const [date, setDate] = useState<number>(0);
  
  useLayoutEffect((): void => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="mx-auto w-[80%] sm:w-[90%] xl:w-full pb-4 flex flex-col justify-center items-center ">
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
      
      <div className="my-4 w-full h-[1px] bg-red-500"></div>
      
      <p className="text-[12px] md:text-sm text-red-500">DBAPizza - {date} | All rights reserved.</p>
    </footer>
  );
};
