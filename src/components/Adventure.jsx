/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Adventure = ({ card }) => {
  const {
    title,
    image,
    categoryName,
    ecoFriendlyFeatures,
    bookingAvailability,
  } = card;

  // <Link to={`/experience/${card.id}`} className="btn bg-[#F9A51A]">
  //           Explore Now
  //         </Link>
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {bookingAvailability && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 text-xs rounded-full">
            Booking Open
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{categoryName}</h2>

        {/* Features */}
        <div className="mt-3">
          <h3 className="text-sm font-medium text-gray-600">
            Eco-Friendly Features:
          </h3>
          <ul className="mt-1 text-gray-600 text-sm list-disc list-inside">
            {ecoFriendlyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-4 mb-2">
          <Link
            to={`/experience/${card.id}`}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
