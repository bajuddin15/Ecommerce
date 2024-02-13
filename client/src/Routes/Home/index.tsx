import ProductCategory from "../../Components/Categories/ProductCategory";
import TitleWrapper from "../../Components/Organism/TitleWrapper";
import ProductCard from "../../Components/Products/ProductCard";
import { ourFeatures, productCategories } from "./constants";

const Home = () => {
  return (
    <div className="my-10">
      <TitleWrapper title="Categories" subTitle="Browse By Category">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6 lg:gap-8 my-4">
          {productCategories?.map((cat) => {
            return <ProductCategory category={cat} />;
          })}
        </div>
      </TitleWrapper>
      <TitleWrapper title="This Month" subTitle="Best Selling Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <button className="bg-red-500 text-white px-14 py-3 text-sm rounded-md">
            View All Products
          </button>
        </div>
      </TitleWrapper>
      <TitleWrapper title="Our Products" subTitle="Explore Our Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <button className="bg-red-500 text-white px-14 py-3 text-sm rounded-md">
            View All Products
          </button>
        </div>
      </TitleWrapper>

      {/* our featues or qualties */}
      <div className="container my-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
          {ourFeatures?.map((item) => {
            const IconComponent = item?.icon;
            return (
              <div className="flex flex-col gap-5 items-center justify-center">
                <div className="bg-gray-400 p-2 rounded-full">
                  <div className="bg-black p-3 rounded-full">
                    <IconComponent size={28} color="white" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold uppercase text-center">
                    {item?.title}
                  </span>
                  <span className="text-xs text-center">{item?.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
