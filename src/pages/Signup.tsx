import { FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { login } from "../state/slices/authSlice";
import { SignUp } from "../types";
import { useAuthUser, useForm, useModal } from "../hooks";
import { Loader } from "../components";

const initialValue: SignUp = { firstName: "", lastName: "", address: "", phone: "", email: "", password: ""  };
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

export const Signup = (): JSX.Element => {
  const { data, handleInputChange, resetForm } = useForm<SignUp>(initialValue);
  const { setUserData, loading, response } = useAuthUser ({ url: "/auth/signup" });
  const { modalIsOpen, openModal, closeModal, modalOpenCounter, incrementModalOpenCounter } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    setUserData(data);
    openModal();
    incrementModalOpenCounter();
  };

  useEffect((): (() => void) | undefined => {
    if (loading || !response) return;

    const { status, data } = response;
    const { token, user} = data;

    const timer = setTimeout((): void => {
      if ((status !== "CREATED") && (modalOpenCounter > 0)) {
        closeModal();
        return;
      };
      
      if (token) {
        resetForm();
        closeModal();
        dispatch(login({
          isAuthenticated: true,
          user,
          token,
        }));

        switch (user.role) {
          case "client":
            navigate("/pizzas");
            break;
          default:
            navigate("/");
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

      <main className="w-[80%] sm:w-[90%] lg:w-[60%] my-12 md:my-0 md:h-[calc(100vh-52px)] flex justify-center items-center">
        <div className="w-full md:w-[550px] h-fit flex flex-col gap-y-2">
          <form className="w-full p-4 border-1 grid grid-cols-1 md:grid-cols-2 gap-4 border-black rounded-2xl" onSubmit={handleSubmit}>
            <h2 className="col-span-1 md:col-span-2 col-start-1 col-end-2 md:col-end-3 text-3xl font-bold">Sign Up</h2>

            <label htmlFor="firstName" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              First Name:
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="E.g: Kevin"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.firstName}
                disabled={loading}
              />
            </label>

            <label htmlFor="lastName" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Last Name:
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="E.g: Reyes"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.lastName}
                disabled={loading}
              />
            </label>

            <label htmlFor="address" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Address:
              <input
                type="text"
                name="address"
                id="address"
                placeholder="E.g: 2th Street Carazo, Nicaragua."
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.address}
                disabled={loading}
              />
            </label>

            <label htmlFor="phone" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Phone:
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="E.g: 88882525"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${loading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={data.phone}
                disabled={loading}
              />
            </label>

            <label htmlFor="email" className="col-span-1 col-start-1 col-end-2 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
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

            <label htmlFor="password" className="col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
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
              value="Register"
              className={`col-span-1 col-start-1 col-end-2 md:col-start-2 md:col-end-3 w-full p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer ${loading && "opacity-[50%] hover:cursor-not-allowed"}`}
              disabled={loading}
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
                    (response?.status !== "CREATED")
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
