import React from "react";
import axios from "axios";

interface IState {
  products: Array<any>;
}

const useData = () => {
  const [products, setProducts] = React.useState<IState["products"]>([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get("/api/products");
    if (data && data?.success) {
      setProducts(data?.data);
      console.log("products --", {
        data,
        products,
      });
    }
  };

  React.useEffect(() => {
    fetchAllProducts();
  }, []);

  const state = {
    products,
  };

  return {
    state,
  };
};

export default useData;
