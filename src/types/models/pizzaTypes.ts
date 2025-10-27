import { Flavor, Size } from "../";

export interface Pizza {
  _id: string;
  flavor: Flavor | string;
  size: Size | string;
  image: string;
  price: number;
};
