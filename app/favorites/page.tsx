"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { likeItem, unlikeItem } from "@/lib/redux/slices/favoritesSlice";

import type { Item } from "@/lib/redux/slices/itemSlice";

import data from "@/lib/components/testData";

import "../bucket/page.css";
import Link from "next/link";

function Favorites() {
  const items = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const FavoritesRow = (item: Item) => {
    return (
      <div className="row space-x-2">
        <div className=" cell">
          <Image
            src={item.images[0]}
            alt=""
            width={240}
            height={240}
            className="w-60 h-60 rounded-2xl"
          />
        </div>
        <div className=" cell flex flex-col">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className=" cell">
          <h3>
            {item.price} {item.currency}.
          </h3>
        </div>
        <div className=" cell">
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(unlikeItem(item));
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
    <main className="flex min-h-screen flex-col items-center space-y-10">
      <section>
        <div className="w-full flex flex-col items-center">
          {items.length === 0 ? (
            <h3>Товаров в избранном нет</h3>
          ) : (
            <div className="flex flex-col w-full space-y-5 ">
              {items.map((x) => (
                <div
                  key={`item-key-${x.id}`}
                  className="text-black hover:animate-pulse hover:border-solid rounded-2xl py-5 px-3 flex flex-col justify-between shadow-lg"
                  onClick={(event) => {
                    router.push(`/item/${x.id}`);
                  }}
                >
                  <FavoritesRow
                    id={x.id}
                    price={x.price}
                    currency={x.currency}
                    name={x.name}
                    description={x.description}
                    images={x.images}
                    minQuota={x.minQuota}
                    maxAbility={x.maxAbility}
                    category={x.category}
                  />
                  {/* <div className="w-full border-solid border-black border-[1px]"></div> */}
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => {
              dispatch(likeItem(data[Math.floor(Math.random() * 21)]));
            }}
            className="w-40 h-40"
          />
        </div>
      </section>
    </main>
  );
}

export default Favorites;
