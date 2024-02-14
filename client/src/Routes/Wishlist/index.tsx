import ProductCard from "../../Components/Products/ProductCard";
import WishlistProduct from "../../Components/Products/WishlistProduct";

const Wishlist = () => {
  return (
    <div className="container my-20">
      {/* header */}
      <div className="flex items-center justify-between text-base">
        <span>Wishlist (4)</span>
        <button className="bg-inherit py-2 px-5 border border-gray-400 rounded-sm ring-1 ring-gray-100 bg-gray-50 hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>

      {/* wishlist products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
        <WishlistProduct />
      </div>

      {/* just for you products */}
      <div className="my-20">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-7 bg-red-500 rounded-sm"></div>
            <h2 className="text-base font-semibold text-red-500">
              Just For You
            </h2>
          </div>
          <button className="bg-inherit text-base border border-gray-300 rounded-sm ring-1 ring-gray-50 px-5 py-2 hover:bg-gray-100">
            See All
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
