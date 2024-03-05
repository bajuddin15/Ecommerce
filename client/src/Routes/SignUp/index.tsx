import React from "react";
import { ZodSchema, z } from "zod";
import { Eye } from "lucide-react";
import authImg from "../../assets/images/authImg.png";
import google_logo from "../../assets/images/googleLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
};

const schema: ZodSchema<FormData> = z.object({
  name: z.string().min(3, "Name must should be at least 3 characters long"),
  email: z.string().email(),
  password: z.string().min(8, "Password should at least 8 characters long"),
});

const SignUp = () => {
  const [formData, setFormData] = React.useState<FormData>(initialFormData);
  const [errors, setErrors] = React.useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    try {
      schema.parse(formData); // Validate form data against schema
      setErrors({});
      // Handle form submission logic here
      const { data } = await axios.post("/api/auth/signup", formData);
      if (data && data?.success) {
        toast.success(data?.message);
      }
      console.log("data--", data);
      // console.log("Form submitted with data:", formData);
    } catch (error: any) {
      const errResp = error?.response?.data;
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else if (error && error?.response?.data) {
        toast.error(errResp?.message);
      }
    }
  };

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
        <form onSubmit={handleSubmit} className="w-3/4">
          <h2 className="text-xl font-semibold">Create an account</h2>
          <span className="text-sm">Enter your details below</span>
          <div className="flex flex-col text-sm space-y-6 my-6">
            <div className="flex flex-col gap-1">
              <div className="bg-slate-200 border-b-2 border-b-slate-500">
                <input
                  className="border-none outline-none p-3 bg-inherit"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.name && (
                <span className="text-xs text-red-500 font-normal">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-slate-200 border-b-2 border-b-slate-500">
                <input
                  className="border-none outline-none p-3 bg-inherit"
                  type="email"
                  placeholder="Email or Phone Number"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-500 font-normal">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="bg-slate-200 border-b-2 border-b-slate-500 flex items-center justify-between px-3">
                <input
                  className="border-none outline-none py-3 bg-inherit"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <div>
                  <Eye size={20} color="gray" />
                </div>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500 font-normal">
                  {errors.password}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <button
              type="submit"
              className="bg-red-500 w-full px-8 py-2 text-white hover:bg-red-600 rounded-md"
            >
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
