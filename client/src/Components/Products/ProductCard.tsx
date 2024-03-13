import React from "react";
import { Eye, Heart } from "lucide-react";

interface IProps {
  product: any;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const [showCartBtn, setShowCartBtn] = React.useState<boolean>(false);

  return (
    <div
      className="flex flex-col space-y-3 relative"
      onMouseEnter={() => setShowCartBtn(true)}
      onMouseLeave={() => setShowCartBtn(false)}
    >
      <div className="bg-gray-200 h-60 p-10 md:p-14 relative rounded-sm">
        <img
          src={product?.thumbnail_url}
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
        {/* discound */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-sm">
            -35%
          </span>
        </div>

        <button
          className={`absolute bottom-0 left-0 w-full py-2 text-center bg-black text-white text-sm rounded-bl-sm rounded-br-sm ${
            showCartBtn ? "block" : "hidden"
          }`}
        >
          Add To Cart
        </button>
      </div>
      {/* product info */}
      <div className="flex flex-col gap-1">
        <span>{product?.name}</span>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-red-500">${product?.price}</span>
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
