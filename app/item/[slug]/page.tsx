"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
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
import data from "@/lib/components/testData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());

  return data.map((item: Item) => item.id);
}

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "",
  };
}

function Item({ params }: { params: { slug: string } }) {
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const item = data[~~params.slug];
  const favorites = useAppSelector((state) => state.favorites);
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  return (
    <main>
      <section className="flex small:flex-row small:items-start small:space-x-5 space-y-5 flex-col">
        <div className="small:w-[50vw] w-[80vw] min-w-[200px] shadow-lg">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {item.images.map((x, i) => (
              <SwiperSlide>
                <Image
                  src={x}
                  width={300}
                  height={300}
                  alt={`item${item.id}image${i}`}
                />
              </SwiperSlide>
            ))}
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
            {item.images.map((x, i) => (
              <SwiperSlide>
                <Image
                  src={x}
                  width={300}
                  height={300}
                  alt={`item${item.id}image${item.images.length + i}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[50vw] flex flex-col justify-start items-center space-y-5">
          {/* Name */}
          <h3>{item.name}</h3>
          {/* Description */}
          <p>{item.description}</p>
          {/* Price */}
          <h3>
            {item.price} {item.currency}.
          </h3>
          <div className="space-y-3">
            <TextField
              id="outlined-Login"
              label="Количество"
              variant="outlined"
              value={count}
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={(e) => setCount(~~e.target.value)}
              sx={{ width: "300px" }}
            />
            <div className="flex flex-row space-x-5">
              <div
                onClick={() => {
                  dispatch(likeItem(item));
                }}
              >
                {favorites.findIndex((x) => x.id === item.id) === -1 ? (
                  <FavoriteBorderIcon sx={{ fontSize: 30, color: "red" }} />
                ) : (
                  <FavoriteIcon sx={{ fontSize: 30, color: "red" }} />
                )}
              </div>

              <Button
                variant="outlined"
                className="w-full"
                onClick={() => {
                  dispatch(addItem({ item: item, amount: count }));
                }}
              >
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
