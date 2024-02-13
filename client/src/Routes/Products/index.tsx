import ProductCard from "../../Components/Products/ProductCard";

const Products = () => {
  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-red-400 hidden md:flex flex-col">1</div>
        <div className="col-span-3 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
