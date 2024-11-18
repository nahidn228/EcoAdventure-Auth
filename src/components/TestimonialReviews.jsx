import "animate.css";
import { useLoaderData } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestimonialReviews = () => {
  const allData = useLoaderData();
  console.log(allData);
  //bg-emerald-100

  return (
    <div className="bg-emerald-100 ">
      <div className="p-6  py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Testimonials & Reviews
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {allData?.map((item, index) => (
            <SwiperSlide key={`${item.category}-${index}`}>
              <div className="card bg-white shadow-xl h-96 overflow-hidden animate__animated animate__fadeInUp flex flex-col relative">
                {/* Badge */}
                <div className="badge badge-primary absolute top-4 left-4">
                  EcoAdventure
                </div>
                <div className="p-4">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary"
                  />
                  <h2 className="text-xl font-semibold text-center">
                    {item.name}
                  </h2>
                  {item?.category === "Reviews" && (
                    <p className="text-sm text-gray-600 text-center">
                      {item.title}
                    </p>
                  )}
                </div>
                <div className="card-body">
                  <p className="text-gray-800 text-sm italic">
                    {item.category === "Testimonials"
                      ? item.quote
                      : item.review}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="rating rating-sm">
                      {Array.from(
                        { length: Math.floor(item.rating) },
                        (_, i) => (
                          <input
                            key={i}
                            type="radio"
                            name={`rating-${index}`}
                            className="mask mask-star-2 bg-orange-400"
                            checked
                            readOnly
                          />
                        )
                      )}
                      {item.rating % 1 > 0 && (
                        <input
                          type="radio"
                          name={`rating-${index}`}
                          className="mask mask-star-2 bg-orange-400"
                          checked
                          readOnly
                        />
                      )}
                    </div>
                    <span className="text-gray-500 text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialReviews;
