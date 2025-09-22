import { ReactNode } from "react";
import { Pizza } from "./APITypes";

/* Mobile menu. */
export type MenuIsOpen = boolean;

/* Hamburger menu. */
export interface HamburgerMenuProps {
  menuIsOpen: MenuIsOpen;
  handleClick: () => void;
};

/* Pages. */
export type Page = {
  url: string;
  name: string;
};
export const pages: Page[] = [
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

/* Global component props. */
interface HOC {
  className?: string;
  children: ReactNode;
};

/* Navigation link. */
export interface NavigationLinkProps extends HOC {
  href: string;
};

/* Topping image. */
export interface ToppingImageProps extends Pick<HOC, "className"> {
  topping: string;
};

/* Section title. */
export interface SectionTitleProps extends HOC {
  mainTitle: boolean;
};

/* Delivery card. */
export interface DeliveryCardProps extends Pick<HOC, "children"> {
  src: string;
  title: string;
};

/* Pizza card. */
export interface PizzaCardProps extends Pizza { };

/* Testimonials. */
export type Testimonial = {
  id: number;
  text: string;
  user: {
    name: string;
    title: string;
    photo: string;
  };
};
export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I craved pizza at midnight, and this app saved me! The Spicy Pepperoni was fire (literally and figuratively), and the driver even included free garlic dips. Now THAT’S customer service. My go-to pizza spot forever!",
    user: {
      name: "Aracelly Gómez",
      title: "Culinary Enthusiast",
      photo: "assets/images/testimonials/aracelly-gomez.png",
    }
  },
  {
    id: 2,
    text: "I ordered the Cheese pizza after a long day at work, and it arrived in under 30 minutes—still piping hot! The crust was perfectly crispy, and the basil tasted so fresh. Best of all? The delivery guy was super friendly. 10/10 would recommend!",
    user: {
      name: "Juan Soto",
      title: "Software Engineering",
      photo: "assets/images/testimonials/juan-soto.png",
    }
  },
  {
    id: 3,
    text: "The Truffle Mushroom pizza here is a masterpiece! Every bite is packed with flavor, and the cheese... oh my, it’s heavenly. What surprised me most was how the staff remembered my name and preferences. Feels like family!",
    user: {
      name: "María Pérez",
      title: "Professional Chef",
      photo: "assets/images/testimonials/maria-perez.png",
    }
  },
];
