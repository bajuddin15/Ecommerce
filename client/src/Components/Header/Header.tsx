import { HeartIcon, Menu, Search, ShoppingCartIcon } from "lucide-react";
import { navMenus } from "./constants";
import TopNewsHeader from "../TopNewsHeader/TopNewsHeader";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getAvatarText } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import axios from "axios";
import { setLogout } from "@/store/slices/authSlice";
import toast from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("register already user --", user);

  const handleLogout = async () => {
    try {
      const { data } = await axios.post("/api/auth/logout");
      if (data && data.success) {
        dispatch(setLogout());
        toast.success(data?.message);
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

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
              <>
                {user && menu.href === "/signup" ? (
                  <></>
                ) : (
                  <Link
                    key={menu.href}
                    to={menu.href}
                    className="hover:underline"
                  >
                    {menu?.name}
                  </Link>
                )}
              </>
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
            <Link to={"/wishlist"}>
              <div className="relative cursor-pointer">
                <HeartIcon size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]">
                  4
                </span>
              </div>
            </Link>
            <div className="relative cursor-pointer">
              <ShoppingCartIcon size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]">
                1
              </span>
            </div>
            {/* profile avatar */}
            <div>
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="outline-none">
                      <AvatarImage src="https://github.com/shadcn.g" />
                      <AvatarFallback>
                        {getAvatarText(user?.name)}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://github.com/shadcn.png"
                          alt="avatar-img"
                          className="w-9 h-9 rounded-full"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm">{user?.name}</span>
                          <span className="text-xs font-normal">
                            {user?.email}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="py-2 mx-[2px]">
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="py-2 mx-[2px]"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
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
