import { Eye } from "lucide-react";
import authImg from "../../assets/images/authImg.png";
import google_logo from "../../assets/images/googleLogo.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="sm:col-span-2 flex flex-col items-center justify-center bg-gray-100">
        <img
          src={authImg}
          alt="auth-image"
          style={{ width: "60%", objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center py-5">
        <form className="w-3/4">
          <h2 className="text-xl font-semibold">Create an account</h2>
          <span className="text-sm">Enter your details below</span>
          <div className="flex flex-col text-sm space-y-6 my-6">
            <div className="bg-slate-200 border-b-2 border-b-slate-500">
              <input
                className="border-none outline-none p-3 bg-inherit"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="bg-slate-200 border-b-2 border-b-slate-500">
              <input
                className="border-none outline-none p-3 bg-inherit"
                type="email"
                placeholder="Email or Phone Number"
              />
            </div>
            <div className="bg-slate-200 border-b-2 border-b-slate-500 flex items-center justify-between px-3">
              <input
                className="border-none outline-none py-3 bg-inherit"
                type="password"
                placeholder="Password"
              />
              <div>
                <Eye size={20} color="gray" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <button className="bg-red-500 w-full px-8 py-2 text-white hover:bg-red-600 rounded-md">
              Create Account
            </button>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-[1px] bg-slate-700"></div>
              <span>or</span>
              <div className="flex-1 h-[1px] bg-slate-700"></div>
            </div>
            <button className="flex items-center justify-center border border-gray-300 gap-4 w-full px-8 py-2 bg-gray-50  hover:bg-gray-100 rounded-md">
              <img
                src={google_logo}
                alt="google-logo"
                className="w-6 h-6 object-cover"
              />
              <span className="text-sm">Sign up with Google</span>
            </button>
            <div className="text-sm flex items-center justify-center gap-2 my-2">
              <span>Already have account?</span>
              <Link to={"/login"} className="underline text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
