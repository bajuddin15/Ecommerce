import { Heart, Minus, Plus, RefreshCcw, Truck } from "lucide-react";
import cameraImg from "../../assets/images/camera.png";
import ProductCard from "../../Components/Products/ProductCard";

const ProductDetails = () => {
  return (
    <div className="container my-20">
      {/* main */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
        <div className="flex flex-col justify-between">
          <div className="bg-gray-100 h-4/5 p-16">
            <img
              src={cameraImg}
              alt="camera-img"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-5 mt-5">
            <div className="p-5 bg-gray-200">
              <img
                src={cameraImg}
                alt="camera-img"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 bg-gray-200">
              <img
                src={cameraImg}
                alt="camera-img"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 bg-gray-200">
              <img
                src={cameraImg}
                alt="camera-img"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 bg-gray-200">
              <img
                src={cameraImg}
                alt="camera-img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Havic HV G-92 Gamepad</h2>
            <span className="text-base font-medium">$192.00</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum reprehenderit quisquam earum sed, placeat, distinctio
              et veritatis eveniet natus deleniti perferendis? Fuga explicabo
              quae dolor commodi, est corrupti sequi labore quos officiis
              numquam aliquam dolore omnis enim, praesentium voluptates?
            </p>
          </div>
          <div className="my-4">
            <hr />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-base">Colours: </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-base">Size:</span>
              <div className="flex items-center gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => {
                  return (
                    <div
                      key={size}
                      className="cursor-pointer text-sm w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-red-500 hover:text-white"
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center border border-gray-300 rounded-md">
                <div className="cursor-pointer p-2 border-r border-r-gray-300">
                  <Minus size={20} />
                </div>
                <div className="px-5">12</div>
                <div className="cursor-pointer p-2 border-l border-l-gray-300">
                  <Plus size={20} />
                </div>
              </div>
              <button className="bg-red-500 text-white hover:bg-red-600 py-2 px-14 rounded-md">
                Buy Now
              </button>
              <div className="p-2 cursor-pointer border border-gray-300 rounded-md">
                <Heart size={20} />
              </div>
            </div>

            <div className="border border-gray-300 mt-5">
              <div className="flex items-center gap-5 p-4 border-b border-b-gray-300">
                <div>
                  <Truck size={32} />
                </div>
                <div className="flex flex-col text-start gap-2">
                  <span className="text-sm font-medium">Free Delivery</span>
                  <span className="text-xs">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 p-4">
                <div>
                  <RefreshCcw size={32} />
                </div>
                <div className="flex flex-col text-start gap-2">
                  <span className="text-sm font-medium">Return Delivery</span>
                  <span className="text-xs">
                    Free 30 Days Delivery Returns.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-3">
          <div className="w-3 h-7 bg-red-500 rounded-sm"></div>
          <h2 className="text-base font-semibold text-red-500">
            Related Products
          </h2>
        </div>

        {/* products */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
