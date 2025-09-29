import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Error, Home, Pizzas, Signin, Signup } from "../pages";
import { Pizza, loader as pizzaLoader, PizzaIndex } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/pizzas",
    element: <Pizzas />,
    children: [
      {
        index: true,
        element: <PizzaIndex />,
      },
      {
        path:"/pizzas/:id",
        element: <Pizza />,
        loader: pizzaLoader,
        errorElement: "<P>Not pizza found.</P>",
      }
    ],
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
