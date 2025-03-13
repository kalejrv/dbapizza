import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Error, Home, Pizzas, Signin, Signup } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/pizzas",
    element: <Pizzas />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);
