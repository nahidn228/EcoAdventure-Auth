import "animate.css";
import { FaEdit, FaUser } from "react-icons/fa";

import { useContext } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="container mx-auto p-4 mt-10">
        <div className="text-center mb-8">
          {/* Welcome Title */}
          <h1 className="text-4xl font-semibold text-gray-700 animate__animated animate__fadeInUp">
            {user && user?.displayName ? (
              <p>
                {user?.displayName}, <br /> Your Eco-Adventure Profile ! 🎉
              </p>
            ) : (
              ""
            )}
          </h1>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 animate__animated animate__fadeIn animate__delay-1s">
          {/* Profile Information */}
          <div className="flex flex-col items-center">
            {/* Profile Image */}

            <div className="mb-4">
              <div className="relative">
                {/* Use a fallback icon if no photoURL */}
                <img
                  src={user.photoURL || "https://via.placeholder.com/150"}
                  alt="User"
                  className="object-cover w-32 h-32 rounded-full border-4 border-blue-500 animate__animated animate__zoomIn"
                />
                {/* User icon as fallback if no image */}
                {!user.photoURL && (
                  <FaUser className="absolute top-0 left-0 w-32 h-32 text-gray-500" />
                )}
              </div>
            </div>

            {/* Email */}
            <p className="text-xl font-medium text-gray-600 mb-4">
              Email: {user.email}
            </p>

            {/* Display Name */}
            <p className="text-lg text-gray-500 mb-4">
              Name: {user.displayName || "Not provided"}
            </p>
            {/* Verified */}
            <p className="text-lg text-gray-500 mb-4">
              Verification: {user.emailVerified === true ? "Yes" : "No"}
            </p>

            {/* Update Button */}
            <Link
              to="/updateInfo"
              className="btn btn-primary p-4 rounded-full shadow-lg mt-4 animate__animated animate__fadeIn animate__delay-2s"
            >
              <FaEdit className="mr-2" />
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
