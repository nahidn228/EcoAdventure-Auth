import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  //   const navigate = useNavigate();

  return (
    <div
      className="relative w-full bg-cover bg-center h-96 flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/tYB210N/Amazon-Rainforest-Expedition.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6 animate__animated animate__fadeIn animate__delay-1s ">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-6">
          Welcome to Echo-Adventure
        </h1>
        <p className="text-lg sm:text-xl my-6">
          Embark on unforgettable journeys around the world with guided
          eco-friendly adventures.
        </p>
        <Link to='/place' className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300">
          Explore Adventures
         
        </Link>
      </div>
    </div>
  );
};

export default Banner;
