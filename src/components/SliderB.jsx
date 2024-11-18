/* eslint-disable react/prop-types */
import {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  import "swiper/css";
  import "swiper/css/autoplay";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";

const SliderB = ({ data }) => {
  return (
    <div className="mb-10">
      <Swiper
        className="w-11/12 mx-auto lg:h-[800px] mt-10"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide className="relative" key={index}>
            <img
              className="rounded-xl w-full h-full object-cover"
              src={item.image}
              alt={item.title}
            />
            {/* Badge */}
            <span className="absolute top-10 right-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold px-4 py-1 rounded-full shadow-lg">
              Eco Adventure
            </span>
            {/* Content Overlay */}
            <div className="hidden lg:flex absolute top-1/3 left-16 p-6 rounded-xl backdrop-blur-lg bg-gradient-to-b from-white/50 to-white/35 shadow-2xl">
              <div className="w-96">
                <h2 className="text-4xl font-extrabold text-gray-900">
                  {item.title}
                </h2>
                <p className="text-lg font-semibold text-gray-800 mt-6">
                  Eco Friendly Features:
                </p>
                {item.ecoFriendlyFeatures?.map((feature, idx) => (
                  <p key={idx} className="text-gray-800 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span> {feature}
                  </p>
                ))}
                <p className="text-lg font-semibold text-gray-800 mt-6">
                  Special Instructions:
                </p>
                {item.specialInstructions?.map((instruction, idx) => (
                  <p key={idx} className="text-gray-800 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span> {instruction}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderB;
