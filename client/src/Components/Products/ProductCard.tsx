import React, { useState } from "react";
import { Eye, Heart } from "lucide-react";
import cameraImg from "../../assets/images/camera.png";

const ProductCard = () => {
  const [showCartBtn, setShowCartBtn] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col space-y-3 relative"
      onMouseEnter={() => setShowCartBtn(true)}
      onMouseLeave={() => setShowCartBtn(false)}
    >
      <div className="bg-gray-200 h-60 p-10 md:p-14 relative">
        <img
          src={cameraImg}
          alt="camera-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <Heart size={16} />
          </div>
          <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <Eye size={16} />
          </div>
        </div>
        <button
          className={`absolute bottom-0 left-0 w-full py-2 text-center bg-black text-white text-sm ${
            showCartBtn ? "block" : "hidden"
          }`}
        >
          Add To Cart
        </button>
      </div>
      {/* product info */}
      <div className="flex flex-col gap-1">
        <h4>CANON EOS DSLR Camera</h4>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-red-500">$100</span>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span>(35)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
