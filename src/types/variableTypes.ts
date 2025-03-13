type Page = {
  url: string;
  name: string;
};

export const pages: Array<Page> = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/pizzas",
    name: "Pizzas",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];
