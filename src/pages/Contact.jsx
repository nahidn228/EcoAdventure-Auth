import "animate.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Snowfall } from "react-snowfall";

const Contact = () => {
  return (
    <div>
       <Snowfall snowflakeCount={100} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Eco-Adventure</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Eco-Adventure
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to EcoAdventure! We are thrilled that you are interested in
          joining us on a journey of sustainability, adventure, and
          unforgettable experiences. Whether you are looking to explore the
          vibrant ecosystems of the Amazon, hike the glaciers of Alaska, or
          snorkel in the Great Barrier Reef, we are here to make sure every
          moment of your adventure is not only exciting but also eco-friendly.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions, need assistance, or want to learn more
          about our eco-conscious travel options, do not hesitate to reach out
          to us. We are committed to ensuring that your experience with
          EcoAdventure is seamless and memorable.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose EcoAdventure?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At EcoAdventure, we believe in providing transformative travel
          experiences that connect you to nature while minimizing our
          environmental impact. Our carefully curated eco-tours offer you the
          chance to explore some of the most beautiful and diverse ecosystems on
          the planet, from the lush rainforests of Brazil to the rugged beauty
          of Patagonia, all while supporting sustainable practices.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          With a wide range of adventures, including jungle treks, glacier
          hikes, water-based activities, desert camping, and wildlife
          exploration, there is something for everyone. Our team of passionate
          guides is committed to ensuring that each adventure is not only safe
          and fun but also aligned with our environmental values.
        </p>

        {/* Our Adventure Packages Section with Swiper */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s">
          Our Adventure Packages
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mb-12"
        >
          {/* Adventure Package 1 */}
          <SwiperSlide>
            <div className="bg-emerald-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-xl font-semibold text-gray-800">
                Amazon Rainforest Expedition
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Location:</strong> Amazon Basin, Brazil <br />
                <strong>Duration:</strong> 7 Days <br />
                <strong>Cost:</strong> $1500 <br />
                <strong>Category:</strong> Jungle Adventure <br />
                <strong>Adventure Level:</strong> Moderate <br />
                <strong>Max Group Size:</strong> 10
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Eco-Friendly Features:</strong> Solar-powered
                facilities, eco-friendly transportation, plastic-free packaging
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Included:</strong> Guided tours, eco-lodge
                accommodation, meals, binoculars
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Special Instructions:</strong> Pack lightweight
                clothing, carry insect repellent, follow safety instructions
              </p>
            </div>
          </SwiperSlide>

          {/* Adventure Package 2 */}
          <SwiperSlide>
            <div className="bg-emerald-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s ">
              <h3 className="text-xl font-semibold text-gray-800">
                Alaskan Glacier Hiking
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Location:</strong> Juneau, Alaska, USA <br />
                <strong>Duration:</strong> 5 Days <br />
                <strong>Cost:</strong> $1200 <br />
                <strong>Category:</strong> Mountain Adventure <br />
                <strong>Adventure Level:</strong> Challenging <br />
                <strong>Max Group Size:</strong> 8
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Eco-Friendly Features:</strong> Leave-no-trace policy,
                recyclable gear, support for local communities
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Included:</strong> Ice trekking gear, meals,
                professional guide
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Special Instructions:</strong> Wear sturdy hiking boots,
                bring a reusable water bottle
              </p>
            </div>
          </SwiperSlide>

          {/* Adventure Package 3 */}
          <SwiperSlide>
            <div className="bg-emerald-100 p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-xl font-semibold text-gray-800">
                Great Barrier Reef Snorkeling
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Location:</strong> Queensland, Australia <br />
                <strong>Duration:</strong> 3 Days <br />
                <strong>Cost:</strong> $800 <br />
                <strong>Category:</strong> Water Adventure <br />
                <strong>Adventure Level:</strong> Easy <br />
                <strong>Max Group Size:</strong> 15
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Eco-Friendly Features:</strong> Coral-safe sunscreen,
                eco-certified boats, marine conservation donations
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Included:</strong> Snorkeling gear, marine guide,
                underwater photography session
              </p>
              <p className="text-md text-gray-700 mt-4">
                <strong>Special Instructions:</strong> Avoid touching corals,
                apply sunscreen, follow the marine guide
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* What Our Guests Are Saying Section with Animate.css */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4 animate__animated animate__fadeIn animate__delay-4s">
          What Our Guests Are Saying
        </h2>
        <div className="space-y-8 animate__animated animate__fadeIn animate__delay-5s">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Emily Carter"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg">Emily Carter</p>
              <p className="text-sm text-gray-600">
                “This was hands down the best eco-adventure I’ve ever had! I
                feel so rejuvenated.” <br /> ⭐⭐⭐⭐⭐
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Ryan Garcia"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg">Ryan Garcia</p>
              <p className="text-sm text-gray-600">
                “A magical experience! The focus on sustainability was
                inspiring.” <br /> ⭐⭐⭐⭐⭐
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Sophia White"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg">Sophia White</p>
              <p className="text-sm text-gray-600">
                “Everything from the views to the activities exceeded my
                expectations. Highly recommend!” <br /> ⭐⭐⭐⭐
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Liam Brown"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg">Liam Brown</p>
              <p className="text-sm text-gray-600">
                “I loved the balance between adventure and relaxation. A
                must-try!” <br /> ⭐⭐⭐⭐
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We would love to hear from you! Whether you need help with booking an
          adventure, have questions about the sustainability initiatives we
          implement, or just want to share your excitement, our team is here for
          you.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Email:</strong> support@eco-adventure.com <br />
          <strong>Phone:</strong> (123) 456-7890 <br />
          <strong>Address:</strong> 123 EcoAdventure Lane, Green City, Earth
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Follow us on social media for the latest updates, stunning photos, and
          eco-friendly travel tips:
        </p>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.instagram.com/EcoAdventure"
              className="text-gray-700"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/EcoAdventureTravel"
              className="text-gray-700"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Eco_Adventure"
              className="text-gray-700"
            >
              Twitter
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
          Join the EcoAdventure Movement
        </h2>
        <p className="text-lg text-gray-700">
          EcoAdventure is more than just a travel company; it’s a movement.
          We’re dedicated to promoting sustainable tourism that benefits both
          the traveler and the planet. We invite you to join us in making a
          difference by choosing eco-friendly travel that leaves a positive
          impact on the world.
        </p>
        <p className="text-lg text-gray-700">
          Ready to embark on an adventure that’s good for you and the planet?{" "}
          <strong>Contact us today</strong> to book your next journey with
          EcoAdventure!
        </p>
      </div>
    </div>
  );
};

export default Contact;
