/* eslint-disable react/prop-types */
// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // Import styles for fade effect (optional)
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavBar from "./NavBar";

const SliderBanner = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-10">
      <NavBar></NavBar>
      <Swiper
        className="w-11/12 mx-auto lg:h-[800px] mt-10"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 3000, // Time in ms before the next slide
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        loop={true} // Enable looping
        spaceBetween={20}
        slidesPerView={1}
        effect="fade" // Apply the fade effect
        speed={1200} // Transition speed in milliseconds
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => {
        //   console.log("current slide", e);
        // }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="relative ">
          <img className="rounded-xl" src={data[0]?.image} alt="" />
          <div className=" hidden lg:flex absolute  top-36 left-16 backdrop-blur-sm bg-white/40 p-4 rounded-2xl ">
            <div className="card backdrop-blur-lg bg-white/20 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title ">{data[0]?.title}</h2>
                <p className="text-lg font-semibold mt-6">
                  Eco Friendly Features:
                </p>
                {data[0]?.ecoFriendlyFeatures.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}
                <p className="text-lg font-semibold mt-6">
                  Special Instructions:
                </p>
                {data[0]?.specialInstructions.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}

                {/* <div className="card-actions ">
                  <button className="btn bg-[#F9A51A]">Explore Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="rounded-xl" src={data[1]?.image} alt="" />
          <div className="hidden lg:flex absolute  top-36 left-16 backdrop-blur-sm bg-white/40 p-4 rounded-2xl ">
            <div className="card backdrop-blur-lg bg-white/20 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title ">{data[1]?.title}</h2>
                <p className="text-lg font-semibold mt-6">
                  Eco Friendly Features:
                </p>
                {data[1]?.ecoFriendlyFeatures.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}
                <p className="text-lg font-semibold mt-6">
                  Special Instructions:
                </p>
                {data[1]?.specialInstructions.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}

                {/* <div className="card-actions ">
                  <button className="btn bg-[#F9A51A]">Explore Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="rounded-xl" src={data[2]?.image} alt="" />
          <div className="hidden lg:flex absolute  top-36 left-16 backdrop-blur-sm bg-white/40 p-4 rounded-2xl ">
            <div className="card backdrop-blur-lg bg-white/20 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title ">{data[2]?.title}</h2>
                <p className="text-lg font-semibold mt-6">
                  Eco Friendly Features:
                </p>
                {data[2]?.ecoFriendlyFeatures.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}
                <p className="text-lg font-semibold mt-6">
                  Special Instructions:
                </p>
                {data[2]?.specialInstructions.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}

                {/* <div className="card-actions ">
                  <button className="btn bg-[#F9A51A]">Explore Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="rounded-xl" src={data[3]?.image} alt="" />
          <div className="hidden lg:flex absolute  top-36 left-16 backdrop-blur-sm bg-white/40 p-4 rounded-2xl ">
            <div className="card backdrop-blur-lg bg-white/20 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title ">{data[3]?.title}</h2>
                <p className="text-lg font-semibold mt-6">
                  Eco Friendly Features:
                </p>
                {data[3]?.ecoFriendlyFeatures.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}
                <p className="text-lg font-semibold mt-6">
                  Special Instructions:
                </p>
                {data[3]?.specialInstructions.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}

                {/* <div className="card-actions ">
                  <button className="btn bg-[#F9A51A]">Explore Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="rounded-xl" src={data[4]?.image} alt="" />
          <div className="hidden lg:flex absolute  top-36 left-16 backdrop-blur-sm bg-white/40 p-4 rounded-2xl ">
            <div className="card backdrop-blur-lg bg-white/20 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title ">{data[4]?.title}</h2>
                <p className="text-lg font-semibold mt-6">
                  Eco Friendly Features:
                </p>
                {data[4]?.ecoFriendlyFeatures.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}
                <p className="text-lg font-semibold mt-6">
                  Special Instructions:
                </p>
                {data[4]?.specialInstructions.map((ecoFeature, idx) => (
                  <p key={idx}>- {ecoFeature}</p>
                ))}

                {/* <div className="card-actions ">
                  <button className="btn bg-[#F9A51A]">Explore Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
