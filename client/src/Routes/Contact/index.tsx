import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="container my-20">
      {/* page route */}
      <div className="text-base">
        <span className="text-gray-500">Home / </span>
        <span className="font-semibold">Contact</span>
      </div>
      {/* contact form */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
        <div className="p-5 text-sm shadow-sm border border-gray-200 flex flex-col gap-5 rounded-md">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-3 rounded-full">
                <Phone size={18} color="white" />
              </div>
              <span className="text-lg font-semibold">Call To Us</span>
            </div>
            <span>We are available 24/7, 7 day a weak.</span>
            <span>
              <b>Phone:</b> +917818035708
            </span>
          </div>
          <hr />
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-3 rounded-full">
                <Mail size={18} color="white" />
              </div>
              <span className="text-lg font-semibold">Write To Us</span>
            </div>
            <span>
              Fill out our form and we will contact <br /> you within 24 hours.
            </span>
            <span>
              <b>Email:</b> customer@exclusive.com
            </span>
            <span>
              <b>Email:</b> support@exclusive.com
            </span>
          </div>
        </div>
        <div className="sm:col-span-2 p-5 text-sm shadow-sm border border-gray-200 rounded-md">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <input
                className="border-none outline-none py-3 px-3 bg-gray-100 rounded-md"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="border-none outline-none py-3 px-3 bg-gray-100 rounded-md"
                type="text"
                placeholder="Your Email *"
              />
              <input
                className="border-none outline-none py-3 px-3 bg-gray-100 rounded-md"
                type="text"
                placeholder="Your Phone *"
              />
            </div>
            <div className="mt-5">
              <textarea
                className="w-full border-none outline-none py-3 px-3 bg-gray-100 rounded-md"
                name="message"
                id="message"
                placeholder="Your Message"
                rows={6}
              ></textarea>
            </div>
          </form>
          <div className="mt-5">
            <button className="bg-red-500 text-white py-3 px-10 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
