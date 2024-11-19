import "animate.css";
import { Helmet } from "react-helmet";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";

const Error = () => {
  return (
    <>
      {/* Snowfall effect */}
      <Snowfall snowflakeCount={150} />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Error - Page Not Found</title>
        <link rel="canonical" href="http://mysite.com/error" />
      </Helmet>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-green-800 to-teal-700 text-white">
        {/* Frosted Glass Container */}
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-xl shadow-lg text-center animate__animated animate__fadeInDown animate__slow">
          <h1 className="text-9xl text-orange-500 font-bold mb-8 animate__animated animate__tada animate__slower animate__infinite">
            404
          </h1>
          <h2 className="text-2xl text-gray-800 font-medium">
            Oops! The page you’re looking for doesn’t exist.
          </h2>
          <p className="text-gray-800 mt-2">
            You might have followed a broken link or mistyped the URL.
          </p>

          {/* Redirect Button */}
          <Link
            to="/"
            className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white flex items-center mt-8 px-6 py-3 text-lg font-semibold rounded-lg shadow-md border-none animate__animated animate__fadeInUp animate__delay-2s"
          >
            <FaHome className="mr-2" /> Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
