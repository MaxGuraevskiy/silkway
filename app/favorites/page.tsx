"use client";
import React from "react";
import Image from "next/image";
import chipsPath from "@/public/chips.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { likeItem, unlikeItem } from "@/lib/redux/slices/favoritesSlice";

import type { Item } from "@/lib/redux/slices/itemSlice";

import "../bucket/page.css";

const asd: Item = {
  id: "1",
  price: 123,
  currency: "",
  name: "qwe",
  description: "asd",
  images: [],
};

function Bucket() {
  const items = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const BucketRow = ({
    id,
    price,
    currency,
    name,
    description,
    images,
  }: Item) => {
    return (
      <div className="w-full flex flex-row ">
        <div className="w-[20%] row">
          <Image src={chipsPath} alt="" className="w-60 h-60" />
        </div>
        <div className="w-[50%] row flex flex-col">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="w-[20%] row">
          <h3>{price}</h3>
        </div>
        <div className="w-[10%] row">
          <div
            onClick={() => {
              dispatch(
                unlikeItem({
                  id,
                  price,
                  currency,
                  name,
                  description,
                  images,
                })
              );
            }}
            className="cursor-pointer"
          >
            <DeleteForeverIcon sx={{ fontSize: 40, color: "red" }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-10">
      <section>
        {/* Оглавление таблицы корзины */}
        <div className="w-full flex flex-row ">
          <div className="w-[20%] h-28 row">
            <h2>Фото</h2>
          </div>
          <div className="w-[50%] h-28 row">
            <h2>Описание</h2>
          </div>
          <div className="w-[20%] h-28 row">
            <h2>Стоимость</h2>
          </div>
          <div className="w-[10%] h-28 row">
            <h2>Удалить</h2>
          </div>
        </div>

        <div className="flex flex-col w-full space-y-5 ">
          {items.map((x) => (
            <>
              <BucketRow
                id={x.id}
                price={x.price}
                currency={x.currency}
                name={x.name}
                description={x.description}
                images={x.images}
              />
              <div className="w-full border-solid border-black border-[1px]"></div>
            </>
          ))}
        </div>

        <button
          onClick={() => {
            dispatch(likeItem(asd));
          }}
          className="w-40 h-40"
        />
      </section>
    </main>
  );
}

export default Bucket;
