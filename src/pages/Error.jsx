import "animate.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl text-red-600 font-semibold mb-14 animate__animated animate__flip animate__slower animate__infinite	infinite">
        404
      </h1>
      <h1 className=" text-2xl font-medium">
        This page does not exist
      </h1>
      <Link to="/" className="btn bg-[#F9A51A] mt-6">
        Go To Home
      </Link>
    </div>
  );
};

export default Error;
