import { useEffect, useState } from "react";
import { FaClock, FaMapMarkerAlt, FaTree, FaUsers } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const [experience, setExperience] = useState(data);
  useEffect(() => {
    const singleData = [...data].find((item) => item.id === parseInt(id));
    setExperience(singleData);
  }, [data, id]);
  console.log(experience);
  const {
    title,
    image,
    categoryName,
    shortDescription,
    adventureCost,
    location,
    duration,
    adventureLevel,
    specialInstructions,
    maxGroupSize,
    includedItems,
    ecoFriendlyFeatures,
    bookingAvailability,
  } = experience;

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="my-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeIn">
          {/* Image */}
          <div className="relative">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
            <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              {categoryName}
            </div>
            {bookingAvailability && (
              <div className="absolute bottom-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Booking Open
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

            {/* Location and Duration */}
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 text-gray-600 my-3 ">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-green-500" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="text-green-500" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaTree className="text-green-500" />
                <span>{adventureLevel}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers className="text-green-500" />
                <span>{maxGroupSize} people max</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600">{shortDescription}</p>

            {/* Features */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">
                Eco-Friendly Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {ecoFriendlyFeatures?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Included Items */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Included:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {includedItems?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Special Instructions */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">
                Special Instructions:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {specialInstructions?.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            {/* Cost */}
            <div className="mt-5 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                ${adventureCost}
              </span>
              <button className="btn btn-primary rounded-full px-6 py-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CardDetails;
