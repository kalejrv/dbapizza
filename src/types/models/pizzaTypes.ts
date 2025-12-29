import { Flavor, Size } from "../";

export interface Pizza {
  _id: string;
  flavor: Flavor;
  size: Size;
  image: string;
  price: number;
};
