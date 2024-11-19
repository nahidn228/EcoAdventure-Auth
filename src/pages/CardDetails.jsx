import "animate.css";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaTimes,
  FaTree,
  FaUsers,
} from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "./../components/NavBar";
import { Helmet } from "react-helmet";
import { Snowfall } from "react-snowfall";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const [experience, setExperience] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // If current time is between 10:00 AM (10) and 8:00 PM (20)
    if (currentHour >= 10 && currentHour < 20) {
      // Open Google Meet in a new tab
      window.open("https://meet.google.com/msp-xdbq-ifb", "_blank");
    } else {
      // Show modal if outside working hours
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
       <Snowfall snowflakeCount={100} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${categoryName} - Eco-Adventure`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="my-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeIn">
          {/* Image */}
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
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
              <button
                onClick={handleButtonExpert}
                className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105"
              >
                Talk with Expert
              </button>
            </div>
          </div>
        </div>

        {/* Show Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div
              className="modal modal-open animate__animated animate__zoomIn animate__faster"
              style={{ maxWidth: "500px", width: "100%" }}
            >
              <div className="modal-box relative bg-white p-8 rounded-lg shadow-lg">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
                >
                  <FaTimes />
                </button>

                {/* Modal Content */}
                <h2 className="text-3xl font-semibold text-center mb-4 text-blue-500">
                  Expert Consultation Time
                </h2>
                <div className="flex justify-center items-center mb-4">
                  <FaCheckCircle className="text-green-500 text-5xl animate__animated animate__fadeIn animate__delay-1s" />
                </div>
                <p className="text-lg text-center mb-6 text-gray-700">
                  Our expert consultations are available from{" "}
                  <strong>10:00 AM to 8:00 PM</strong>. Please book your slot
                  during these hours to speak with our expert.
                </p>
                <div className="modal-action justify-center">
                  <button
                    onClick={closeModal}
                    className="btn btn-success text-white p-4 rounded-full w-1/2 shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {modalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
            <div className="modal modal-open">
              <div className="modal-box">
                <h2 className="text-xl font-semibold">Consultation Time</h2>
                <p>Our expert is available from 10:00 AM to 8:00 PM.</p>
                <div className="modal-action">
                  <button onClick={closeModal} className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 shadow-lg transform transition-transform hover:scale-105">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CardDetails;
