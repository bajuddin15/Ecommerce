import React from "react";

interface Category {
  name: string;
  icon: React.ComponentType<any>; // Use React.ComponentType<any> for the icon
}

interface IProps {
  category: Category;
}

const ProductCategory: React.FC<IProps> = ({ category }) => {
  const IconComponent = category.icon; // Store the icon component in a variable

  return (
    <div className="border border-gray-300 h-32 flex items-center justify-center rounded-md cursor-pointer hover:bg-red-500 hover:text-white">
      <div className="flex flex-col gap-5 items-center">
        <div>
          <IconComponent size={28} /> {/* Render the icon component */}
        </div>
        <span className="text-sm">{category.name}</span>
      </div>
    </div>
  );
};

export default ProductCategory;
