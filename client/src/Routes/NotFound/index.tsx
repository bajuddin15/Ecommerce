import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container my-20">
      {/* page route */}
      <div className="text-base">
        <span className="text-gray-500">Home / </span>
        <span className="font-semibold">404 Error</span>
      </div>
      {/* content */}
      <div className="mt-20">
        <div className="flex flex-col items-center gap-10">
          <span className="text-7xl font-semibold tracking-wide">
            404 Not Found
          </span>
          <span className="text-base">
            Your visited page not found. You may go home page.
          </span>
          <Link to={"/"}>
            <button className="text-base bg-red-500 text-white px-10 py-3 rounded-md hover:bg-red-600">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
