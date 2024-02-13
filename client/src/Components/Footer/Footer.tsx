import {
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  SendHorizonal,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container pt-10 pb-5 md:pt-14 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-300">
                Exclusive
              </h2>
              <div className="flex flex-col items-start space-y-3 text-sm text-gray-500">
                <span className="text-base">Subscribe</span>
                <span>Get 10% off your first order</span>
                <div className="flex items-center gap-2 pr-2 border-2 border-gray-500 focus:ring-2 focus:ring-white rounded-md">
                  <input
                    className="bg-inherit border-none outline-none  p-2 w-full"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <SendHorizonal size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-base font-semibold mb-4 text-gray-300">
                Support
              </h2>
              <div className="flex flex-col items-start space-y-3 text-sm text-gray-500">
                <span>
                  111 Bijoy sarani, Dhaka, <br />
                  DH 1515, Bangladesh
                </span>
                <span>exclusive@gmail.com</span>
                <span>+91-6388889999</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-base font-semibold mb-4 text-gray-300">
                Account
              </h2>
              <div className="flex flex-col items-start space-y-3 text-sm text-gray-500">
                <span>My Account</span>
                <span>Login / Register</span>
                <span>Cart</span>
                <span>Wishlist</span>
                <span>Shop</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-base font-semibold mb-4 text-gray-300">
                Quick Link
              </h2>
              <div className="flex flex-col items-start space-y-3 text-sm text-gray-500">
                <span>Privacy Policy</span>
                <span>Terms Of Use</span>
                <span>FAQ</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div>
              <h2 className="text-base font-semibold mb-4 text-gray-300">
                Download App
              </h2>
              <div className="flex flex-col items-start space-y-3 text-sm text-gray-500">
                <span>Save $3 with APP New User Only</span>
                <div className="flex items-center gap-5 text-gray-500">
                  <div className="">
                    <FacebookIcon size={20} />
                  </div>
                  <div>
                    <TwitterIcon size={20} />
                  </div>
                  <div>
                    {" "}
                    <Instagram size={20} />
                  </div>
                  <div>
                    <LinkedinIcon size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
