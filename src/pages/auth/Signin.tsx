import { useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { login } from "../../state/slices";
import { useSignInMutation } from "../../state/services";
import { APIResponse, modalStyles, SignIn, TIMEOUT_TO_CLOSE_MODAL, UserLogged } from "../../types";
import { useForm, useModal } from "../../hooks";
import { Loader } from "../../components";
import { showErrorMessage } from "../../helpers";

const initialValue: SignIn = {} as SignIn;

export const Signin = (): JSX.Element => {
  const { formData, handleInputChange, resetForm } = useForm<SignIn>(initialValue);
  const [signIn, { data: signInResponse, isLoading, isError, error }] = useSignInMutation();
  const { modalIsOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    
    openModal();

    try {
      await signIn(formData).unwrap();
    } catch (error: any) {
      console.log(error.message);
    };
  };

  useEffect((): (() => void) | undefined => {
    if (!signInResponse && !isError) return;

    const timer = setTimeout((): void => {
      closeModal();
      
      const { status, data } = signInResponse as APIResponse<UserLogged>;
      if (status === "OK") {
        const { user, token } = data as UserLogged;

        dispatch(login({ isAuthenticated: true, user, token }));
        resetForm();
        
        switch (user.role as string) {
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
    }, TIMEOUT_TO_CLOSE_MODAL);

    return (): void => clearTimeout(timer);
  }, [signInResponse, isError]);
  
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
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${isLoading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                value={formData.email}
                disabled={isLoading}
              />
            </label>

            <label htmlFor="password" className="my-4 w-full flex flex-col items-start gap-y-1 text-[12px] text-gray-500">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                placeholder="E.g: ********"
                className={`w-full p-2 text-black border-1 border-black outline-none rounded-lg ${isLoading && "border-gray-500 opacity-[50%] hover:cursor-not-allowed"}`}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </label>

            <input
              type="submit"
              value="Log In"
              className={`w-full p-2 text-lg text-white font-bold bg-red-500 rounded-full hover:cursor-pointer ${isLoading && "opacity-[50%] hover:cursor-not-allowed"}`}
              disabled={isLoading}
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
            isLoading
            ? (<Loader size="md" width={5} color="red" style="dotted" />)
              : (
                  <div className="flex flex-col justify-center items-center gap-y-4">
                    {
                      (signInResponse?.status !== "OK")
                        ? (<img src="assets/icons/error.svg" className="w-[48px] md:w-[54px] object-contain" />)
                        : (<img src="assets/icons/check.svg" className="w-[48px] md:w-[54px] object-contain" />)
                    }
                    
                    <h2 className="text-lg md:text-xl text-center">
                      {isError && showErrorMessage(error as any)}
                      {signInResponse?.data?.msg}
                    </h2>
                  </div>
              )
          }
        </div>
      </Modal>
    </div>
  );
};
