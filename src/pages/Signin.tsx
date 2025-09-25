import { Link } from "react-router-dom";

export const Signin = (): JSX.Element => {
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col items-center">
      <header className="p-2 w-full flex justify-start">
        <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>
      </header>

      <main className="w-[80%] sm:w-[90%] lg:w-[60%] h-[calc(100vh-52px)] flex justify-center items-center">
        <div className="w-full md:w-[350px] h-fit flex flex-col gap-y-2">
          <form action="" className="w-full p-4 border-1 border-black rounded-2xl">
            <h2 className="text-3xl font-bold">Sign In</h2>

            <label htmlFor="email" className="mt-6 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g: kevin@gmail.com"
                className="w-full p-2 text-black border-1 border-black outline-none rounded-lg"
              />
            </label>

            <label htmlFor="password" className="my-4 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
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
              value="Log In"
              className="w-full p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer"
            />
          </form>

          <p className="self-end text-sm">
            Don't have an account?
            <Link
              to="/signup"
              className="text-red-500 font-semibold border-b-2 border-transparent transition-all duration-300 hover:border-b-red-500"
            > 
              {" "}Sign Up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};
