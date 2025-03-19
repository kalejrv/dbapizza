type Flavor = {
  name: string;
  description: string;
  price: number;
};

type Size = {
  name: string;
  price: string;
};

export interface Pizza {
  _id: string;
  flavor: Flavor;
  size: Size;
  image: string;
  price: number;
};

interface ApiResponse {
  status: string;
  currentPage: number;
  totalPage: number;
};

export interface ApiResponsePizzas extends ApiResponse {
  pizzas: Array<Pizza>,
  totalPizzas: number;
  pizzasByPage: number;
  currentPizzasQuantity: number;
};
