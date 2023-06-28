const endpoint = process.env.REACT_APP_API_URL ?? "https://dummyjson.com";

const header = {
  "Content-Type": "application/json",
};

export const ModelProducts = () => {
  const GetProducts = async (querystring: string) => {
    try {
      const response = await fetch(`${endpoint}/products${querystring}`, {
        method: "GET",
        headers: header,
      });

      return {
        data: await response.json(),
        isError: false,
      };
    } catch (error) {
      return Promise.resolve({
        data: error,
        isError: true,
      });
    }
  };

  const GetProductsByKeyword = async (keyword: string) => {
    try {
      const response = await fetch(`${endpoint}/products/search?q=${keyword}`, {
        method: "GET",
        headers: header,
      });

      return {
        data: await response.json(),
        isError: false,
      };
    } catch (error) {
      return Promise.resolve({
        data: error,
        isError: true,
      });
    }
  };

  return {
    getProducts: GetProducts,
    getProductsByKeyword: GetProductsByKeyword,
  };
};
