"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

function SwiperPortfolio() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="w-[90%] max-w-[1600px] mx-auto"
    >
      {[1, 2, 3, 4, 5].map((num) => (
        <SwiperSlide key={num}>
          <div className="relative max-h-[500px] flex-shrink-0 mb-5 rounded-xl overflow-hidden shadow-lg pb-5">
            <Image
              src={`/images/large/web-template-${num}.jpg`}
              alt={`Web Template ${num}`}
              width={250}
              height={250}
              className="w-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperPortfolio;
