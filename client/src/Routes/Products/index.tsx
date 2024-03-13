import ProductCard from "../../Components/Products/ProductCard";
import useData from "./data";

const Products = () => {
  const { state } = useData();
  const { products } = state;
  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* filters */}
        <div className="hidden md:flex flex-col gap-8 p-5">
          {/* product type filter */}
          <div className="flex flex-col gap-4">
            <span className="uppercase text-base tracking-wide font-medium">
              Price
            </span>
            <div className="space-y-5">
              <div className="w-full flex items-center gap-5 text-sm">
                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="text"
                    className="outline-none border border-gray-300 py-1 px-2 w-1/2"
                  />
                  <span>From</span>
                </div>

                <div className="flex items-center gap-2">
                  <span>$</span>
                  <input
                    type="text"
                    className="outline-none border border-gray-300 py-1 px-2 w-1/2"
                  />
                  <span>To</span>
                </div>
              </div>

              <button className="bg-slate-600 text-white px-5 py-2 text-sm hover:bg-red-500 transition-all ease-in-out">
                Filter
              </button>
            </div>
          </div>

          {/* product type filter */}
          <div className="flex flex-col gap-4">
            <span className="uppercase text-base tracking-wide font-medium">
              Product Type
            </span>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Chair (1)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Pant (12)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Shirt (10)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Table (5)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Laptop (10)
                </label>
              </div>
            </div>
          </div>

          {/* color filter */}
          <div className="flex flex-col gap-4">
            <span className="uppercase text-base tracking-wide font-medium">
              Color
            </span>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Black (1)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Green (12)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Brown (10)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  White (5)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                >
                  Gray (1)
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="col-span-3 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products?.map((product) => {
              return (
                <>
                  <ProductCard product={product} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
