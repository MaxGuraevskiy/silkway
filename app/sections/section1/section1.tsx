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
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
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
