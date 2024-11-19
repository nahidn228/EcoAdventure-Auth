import "animate.css";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./../provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  //   const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <div
      className="relative bg-cover bg-center h-96 flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/tYB210N/Amazon-Rainforest-Expedition.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6 animate__animated animate__fadeIn animate__delay-1s w-full md:w-5/6 mx-auto ">
        {/* {path == "/login" || path == "/signUp" ? (
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-6">
            Join the Eco-Adventure Journey
          </h1>
        ) : (
          ""
        )} */}
        {path == "/contact" ? (
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-6">
            Get in Touch with Eco-Adventure
          </h1>
        ) : (
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-6">
            {path == "/place"
              ? "Explore our exciting Eco-Adventure packages today!"
              : `Welcome
        ${
          path == "/myProfile"
            ? `${user?.displayName} ! 🎉`
            : "to Echo-Adventure"
        }`}
          </h1>
        )}

        <p
          className={`text-lg sm:text-xl ${
            path == "/place" ? "my-0" : "my-6"
          }  `}
        >
          Embark on unforgettable journeys around the world with guided
          eco-friendly adventures.
        </p>
        {path == "/place" ? (
          <p className="text-lg sm:text-xl">
            where every step you take leaves a positive impact on the planet.
          </p>
        ) : (
          <Link
            to="/place"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Explore Adventures
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;
