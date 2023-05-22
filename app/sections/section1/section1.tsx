"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./section1.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <section className="bg-customRed px-[20px] rounded-2xl">
      <Swiper
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          600: {
            slidesPerView: 2
          },
          1000: {
            slidesPerView: 3
          }

        }}
        // breakpoints={{
        //   // when window width is >= 320px
        //   320: {
        //     slidesPerView: 2,
        //     // spaceBetween: 20,
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 3,
        //     // spaceBetween: 30,
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        // }}
      >
        <SwiperSlide>Реклама 1</SwiperSlide>
        <SwiperSlide>Реклама 2</SwiperSlide>
        <SwiperSlide>Реклама 3</SwiperSlide>
        <SwiperSlide>Реклама 4</SwiperSlide>
        <SwiperSlide>Реклама 5</SwiperSlide>
        <SwiperSlide>Реклама 6</SwiperSlide>
        <SwiperSlide>Реклама 7</SwiperSlide>
        <SwiperSlide>Реклама 8</SwiperSlide>
        <SwiperSlide>Реклама 9</SwiperSlide>
      </Swiper>
    </section>
  );
}
