import { HeartIcon, Menu, Search, ShoppingCartIcon } from "lucide-react";
import { navMenus } from "./constants";
import TopNewsHeader from "../TopNewsHeader/TopNewsHeader";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-gray-300">
      <TopNewsHeader />
      <div className="container flex items-center justify-between h-16">
        {/* brand name or logo */}
        <span className="text-xl font-semibold">Exclusive</span>
        {/* manues */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navMenus?.map((menu) => {
            return (
              <Link to={menu.href} className="hover:underline">
                {menu?.name}
              </Link>
            );
          })}
        </div>

        {/* actions and searchbar */}
        <div className="flex items-center gap-8">
          {/* searchbar */}
          <div className="hidden lg:flex items-center space-x-5 bg-gray-100 px-4 py-2 rounded-md">
            <input
              className="border-none outline-none bg-inherit placeholder:text-gray-500 text-sm"
              type="text"
              placeholder="what are you looking for?"
            />
            <Search size={20} color="gray" />
          </div>
          <div className="flex items-center gap-8">
            <div className="block lg:hidden">
              <Search size={20} color="gray" />
            </div>
            <div>
              <HeartIcon size={20} />
            </div>
            <div>
              <ShoppingCartIcon size={20} />
            </div>
            <div className="block md:hidden">
              <Menu size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
