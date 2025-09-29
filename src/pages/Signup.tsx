import { Link } from "react-router-dom";

export const Signup = (): JSX.Element => {
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col items-center">
      <header className="p-2 w-full flex justify-start">
        <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>
      </header>

      <main className="w-[80%] sm:w-[90%] lg:w-[60%] my-12 md:my-0 md:h-[calc(100vh-52px)] flex justify-center items-center">
        <div className="w-full md:w-[550px] h-fit flex flex-col gap-y-2">
          <form action="" className="w-full p-4 border-1 grid grid-cols-1 md:grid-cols-2 gap-4 border-black rounded-2xl">
            <h2 className="col-span-1 md:col-span-2 col-start-1 col-end-2 md:col-end-3 text-3xl font-bold">Sign Up</h2>

            <label htmlFor="firstName" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              First Name:
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="E.g: Kevin"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="lastName" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Last Name:
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="E.g: Reyes"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="address" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Address:
              <input
                type="text"
                name="address"
                id="address"
                placeholder="E.g: 2th Street Carazo, Nicaragua."
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="phone" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Phone:
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="E.g: 88882525"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="email" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g: kevin@gmail.com"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="password" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="E.g: ********"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <input
              type="submit"
              value="Register"
              className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer"
            />
          </form>

          <p className="self-end text-sm">
            Already have an account?
            <Link
              to="/signin"
              className="text-red-500 font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-b-red-500"
            > 
              {" "}Sign In
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};
