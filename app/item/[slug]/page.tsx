"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { likeItem, unlikeItem } from "@/lib/redux/slices/favoritesSlice";
import {
  addItem,
  deleteItem,
  minusItemAmount,
  plusItemAmount,
} from "@/lib/redux/slices/itemSlice";

import type { Item, BucketItem } from "@/lib/redux/slices/itemSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Item({ params }: { params: { slug: string } }) {
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const favorites = useAppSelector((state) => state.favorites);
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  return (
    <main>
      <section className="flex small:flex-row small:items-start small:space-x-5 space-y-5 flex-col">
        <div className="small:w-[50vw] w-[80vw] min-w-[200px]">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="6"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper as any}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="8"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="10"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="11"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="12"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[50vw] flex flex-col justify-start items-center space-y-5">
          {/* Name */}
          <h3>Nike</h3>
          {/* Description */}
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus repudiandae voluptatum hic animi incidunt quae est
            deserunt nostrum inventore natus distinctio, quos perspiciatis,
            aliquam esse similique, minima quisquam dolorum ullam?
          </h3>
          {/* Price */}
          <h3>1000руб</h3>
          <div className="space-y-3">
            <TextField
              id="outlined-Login"
              label="Count"
              variant="outlined"
              value={count}
              type="number"
              onChange={(e) => setCount(~~e.target.value)}
              sx={{ width: "300px" }}
            />
            <div className="flex flex-row space-x-5">
              <div onClick={() => {}}>
                <FavoriteBorderIcon sx={{ fontSize: 30, color: "red" }} />
              </div>

              <Button variant="outlined" className="w-full" onClick={() => {}}>
                Купить
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Item;
