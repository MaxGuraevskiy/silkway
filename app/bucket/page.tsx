"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import {
  addItem,
  deleteItem,
  plusItemAmount,
  minusItemAmount,
} from "@/lib/redux/slices/itemSlice";

import type { Item, BucketItem } from "@/lib/redux/slices/itemSlice";

import data from "@/lib/components/testData";

import "./page.css";

function Bucket() {
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const BucketRow = (bucketItem: BucketItem) => {
    return (
      <div className="row space-x-2">
        <div className=" cell">
          <Image
            src={bucketItem.item.images[0]}
            alt=""
            width={240}
            height={240}
            className="w-60 h-60 rounded-2xl"
          />
        </div>
        <div className="cell">
          <h3>{bucketItem.item.name}</h3>
        </div>
        <div className=" cell space-x-5 small:space-x-10 ">
          <h3>{bucketItem.amount}шт.</h3>
          <h3>
            {bucketItem.item.price} {bucketItem.item.currency}.
          </h3>
          <div
            id={`deleteItem${bucketItem.item.id}`}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteItem(bucketItem));
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
            <h3>Ваша корзина пуста</h3>
          ) : (
            <div className="flex flex-col w-full space-y-5 ">
              {items.map((x) => (
                <div
                  key={`item-key-${x.item.id}`}
                  id={`itemLink${x.item.id}`}
                  className="text-black hover:animate-pulse hover:border-solid rounded-2xl"
                  onClick={(event) => {
                    router.push(`/item/${x.item.id}`);
                  }}
                >
                  <BucketRow item={x.item} amount={x.amount} />
                  <div className="w-full border-solid border-black border-[1px]"></div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => {
              dispatch(
                addItem({
                  item: data[Math.floor(Math.random() * 21)],
                  amount: 1,
                })
              );
            }}
            className="w-40 h-40"
          />
        </div>
      </section>
    </main>
  );
}

export default Bucket;
