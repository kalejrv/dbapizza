import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useForm } from "../hooks/useForm";
import { SignIn } from "../types";
import { useAuthUser, useModal } from "../hooks";
import { Loader } from "../components";

const initialValue: SignIn = { email: "", password: "" };
const modalStyles: object = {
  overlay: {
    backgroundColor: "rgba(0 0 0 / 0.5)",
  },
  content: {
    width: "fit-content",
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: "1rem",
    border: "none",
  },
};
const timeout: number = 2500;

export const Signin = (): JSX.Element => {
  const { data, handleInputChange, resetForm } = useForm<SignIn>(initialValue);
  const { setUserData, loading, response } = useAuthUser({ url: "/auth/signin" });
  const { modalIsOpen, openModal, closeModal, modalOpenCounter, incrementModalOpenCounter } = useModal();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    setUserData(data);
    openModal();
    incrementModalOpenCounter();
  };

  useEffect((): (() => void) | undefined => {
    if (loading || !response) return;

    const timer = setTimeout((): void => {
      if ((response.status !== "OK") && (modalOpenCounter > 0)) {
        closeModal();
        return;
      };
      
      if (response.data.token) {
        resetForm();
        closeModal();

        switch (response.data.role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "client":
            navigate("/pizzas");
            break;
          default:
            navigate("/pizzas");
            break;
        };
      };
    }, timeout);

    return (): void => clearTimeout(timer);
  }, [loading, response, modalOpenCounter]);
  
  return (
    <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col items-center">
      <header className="p-2 w-full flex justify-start">
        <Link to="/" className="text-3xl text-red-500 font-logo font-bold">DBAPizza</Link>
      </header>

      <main className="w-[80%] sm:w-[90%] lg:w-[60%] h-[calc(100vh-52px)] flex justify-center items-center">
        <div className="w-full md:w-[350px] h-fit flex flex-col gap-y-2">
          <form className="w-full p-4 border-1 border-black rounded-2xl" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold">Sign In</h2>

            <label htmlFor="email" className="mt-6 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              E-mail:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g: kevin@gmail.com"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.email}
                disabled={loading}
              />
            </label>

            <label htmlFor="password" className="my-4 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="E.g: ********"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.password}
                disabled={loading}
              />
            </label>

            <input
              type="submit"
              value="Log In"
              className={`w-full p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer ${loading && "opacity-[50%] hover:cursor-not-allowed"}`}
              disabled={loading}
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

      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
      >
          <div className="p-4 md:p-8 w-[350px] md:w-[600px] flex flex-col justify-center items-center">
            {
              loading
                ? (<Loader />)
                : (
                  <div className="flex flex-col justify-center items-center gap-y-4">
                    {
                      (response?.status !== "OK")
                        ? (<img src="assets/icons/error.svg" className="w-[48px] md:w-[54px] object-contain" />)
                        : (<img src="assets/icons/check.svg" className="w-[48px] md:w-[54px] object-contain" />)
                     }
                    
                    <h2 className="text-lg md:text-xl text-center">{response?.data.msg}</h2>
                  </div>
                )
            }
          </div>
      </Modal>
    </div>
  );
};
