import { Trash2 } from "lucide-react";
import cameraImg from "../../assets/images/camera.png";

const WishlistProduct = () => {
  return (
    <div className="flex flex-col space-y-3 relative">
      <div className="bg-gray-200 h-60 p-10 md:p-14 relative rounded-tl-sm rounded-tr-sm">
        <img
          src={cameraImg}
          alt="camera-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <Trash2 size={16} />
          </div>
        </div>
        {/* discound */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <span className="bg-red-500 text-white px-3 py-1 text-xs rounded-sm">
            -35%
          </span>
        </div>

        <button
          className={`absolute bottom-0 left-0 w-full py-2 text-center bg-black text-white text-sm rounded-bl-sm rounded-br-sm`}
        >
          Add To Cart
        </button>
      </div>
      {/* product info */}
      <div className="flex flex-col gap-1">
        <h4>CANON EOS DSLR Camera</h4>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-red-500">$100</span>
          <span className="line-through text-gray-500">$400</span>
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
