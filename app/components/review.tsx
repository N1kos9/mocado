"use client";

import React from "react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import review1 from "../../public/review-1.jpg";
import review2 from "../../public/review-2.jpg";
import review3 from "../../public/review-3.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Image from "next/image";
const review = () => {
  return (
    <section
      className="review max-w-[550px] justify-center flex-col flex m-auto w-full container"
      id="review"
    >
      <div className="flex flex-col justify-center items-center text-center mt-[2rem]">
        <h2>Customer's Reviews</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="swiper-slide flex items-center justify-center h-full">
            <div className="review-box flex flex-col items-center text-center mb-[3.5rem] justify-center h-full">
              <Image
                src={review1}
                alt=""
                className="w-[100px] h-[100px] rounded-[50%] object-cover border object-center shadow-2xl border-[#fff8f7]"
              />
              <h2>some name</h2>
              <span>some description</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="review-box">
              <Image src={review2} alt="" />
              <h2>some name</h2>
              <span>some description</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div className="review-box">
              <Image src={review3} alt="" />
              <h2>some name</h2>
              <span>some description</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default review;
