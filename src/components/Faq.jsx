import "animate.css";
import {
  FaGlobe,
  FaLeaf,
  FaQuestionCircle,
  FaUserFriends,
} from "react-icons/fa";

const Faq = () => {
  //     <section className="max-w-4xl mx-auto py-16 px-4">
  // <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
  //   Frequently Asked Questions
  // </h2>
  // {/* Faq - 01 */}
  // <div className="collapse collapse-arrow bg-base-200">
  //   <input type="radio" name="my-accordion-2" defaultChecked />
  //   <div className=" collapse-title flex justify-between items-center text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 rounded-t-lg">
  //     What is Echo-Adventure?
  //   </div>
  //   <div className="collapse-content bg-gray-100 p-4 rounded-b-lg animate__animated animate__fadeIn pt-4">
  //     <p>
  //       Echo-Adventure offers eco-friendly guided trips, focusing on
  //       sustainability and creating unforgettable experiences around the
  //       world.
  //     </p>
  //   </div>
  // </div>

  // {/* Faq - 02 */}
  // <div className="collapse collapse-arrow bg-base-200">
  //   <input type="radio" name="my-accordion-2" defaultChecked />
  //   <div className=" collapse-title flex justify-between items-center text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 rounded-t-lg">
  //     How do I book a trip?
  //   </div>
  //   <div className="collapse-content bg-gray-100 p-4 rounded-b-lg animate__animated animate__fadeIn pt-4">
  //     <p>
  //       Booking a trip with Echo-Adventure is simple! Just visit our
  //       website, choose your destination, and book your trip online. We
  //       offer various payment methods to make it easy for you to secure
  //       your adventure.
  //     </p>
  //   </div>
  // </div>

  // {/* Faq - 03 */}
  // <div className="collapse collapse-arrow bg-base-200 ">
  //   <input type="radio" name="my-accordion-2" defaultChecked />
  //   <div className=" collapse-title flex justify-between items-center text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 rounded-t-lg">
  //     What makes Echo-Adventure unique?
  //   </div>
  //   <div className="collapse-content bg-gray-100 p-4 rounded-b-lg animate__animated animate__fadeIn pt-4">
  //     <p>
  //       We focus on eco-tourism and provide guided experiences that are
  //       respectful to the environment. Our adventures are curated for
  //       those looking to explore nature sustainably, and we partner with
  //       local communities to create authentic experiences.
  //     </p>
  //   </div>
  // </div>

  // {/* Faq - 04 */}
  // <div className="collapse collapse-arrow bg-base-200 ">
  //   <input type="radio" name="my-accordion-2" defaultChecked />
  //   <div className=" collapse-title flex justify-between items-center text-xl font-medium text-white bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 rounded-t-lg">
  //     What should I bring on the trip?
  //   </div>
  //   <div className="collapse-content bg-gray-100 p-4 rounded-b-lg animate__animated animate__fadeIn pt-4">
  //     <p>
  //       Make sure to bring comfortable clothing for outdoor activities,
  //       sunscreen, a reusable water bottle, and your camera to capture the
  //       memories. We also recommend packing eco-friendly travel essentials
  //       to help us reduce our environmental impact.
  //     </p>
  //   </div>
  // </div>
  // </section>

  return (
    <>
      <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* FAQ Section */}
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* First FAQ */}
            <div className="flex items-start space-x-4">
              <FaQuestionCircle className="text-3xl text-teal-500 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-gray-700">
                  What is Echo-Adventure?
                </h3>
                <p className="text-gray-600 mt-2">
                  Echo-Adventure is a platform offering guided eco-friendly
                  adventures, connecting travelers to sustainable travel
                  options.
                </p>
              </div>
            </div>

            {/* Second FAQ */}
            <div className="flex items-start space-x-4">
              <FaLeaf className="text-3xl text-green-500 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-gray-700">
                  Are your trips environmentally friendly?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes! We partner with local communities and ensure minimal
                  environmental impact by promoting sustainable practices.
                </p>
              </div>
            </div>

            {/* Third FAQ */}
            <div className="flex items-start space-x-4">
              <FaGlobe className="text-3xl text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-gray-700">
                  Can I choose international destinations?
                </h3>
                <p className="text-gray-600 mt-2">
                  Absolutely! Echo-Adventure offers curated trips to unique
                  destinations worldwide.
                </p>
              </div>
            </div>

            {/* Fourth FAQ */}
            <div className="flex items-start space-x-4">
              <FaUserFriends className="text-3xl text-indigo-500 mt-1" />
              <div>
                <h3 className="text-xl font-medium text-gray-700">
                  Can I travel with a group?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes! We provide group packages and private tours for an
                  unforgettable experience with friends or family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center animate__animated animate__fadeInRight">
          <div className="relative rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/CQ7h5tx/Alaskan-Glacier-Hiking.jpg"
              alt="Adventure Illustration"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">Plan Your Adventure</h3>
              <p className="text-sm mt-2">
                Discover eco-friendly trips that you'll never forget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
