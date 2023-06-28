import { ModelProducts } from "./products.api";

export const useModel = () => {
  const products = ModelProducts();

  return {
    products,
  };
};
