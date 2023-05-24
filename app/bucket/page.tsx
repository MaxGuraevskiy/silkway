"use client";
import React from "react";
import Image from "next/image";
import chipsPath from "@/public/chips.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import {
  addItem,
  deleteItem,
  plusItemAmount,
  minusItemAmount,
} from "@/lib/redux/slices/itemSlice";

import type { Item, BucketItem } from "@/lib/redux/slices/itemSlice";

import "./page.css";

const asd: Item = {
  id: "1",
  price: 123,
  currency: "",
  name: "qwe",
  description: "",
  images: [],
};

const qwe: BucketItem = {
  item: asd,
  amount: 1,
};

function Bucket() {
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  const BucketRow = ({ item, amount }: BucketItem) => {
    return (
      <div className="w-full flex flex-row ">
        <div className="w-[20%] row">
          <Image src={chipsPath} alt="" className="w-60 h-60" />
        </div>
        <div className="w-[40%] row">
          <h3>{item.name}</h3>
        </div>
        <div className="w-[10%] row">
          <h3>{amount}</h3>
        </div>
        <div className="w-[20%] row">
          <h3>{item.price}</h3>
        </div>
        <div className="w-[10%] row">
          <div
            onClick={() => {
              dispatch(deleteItem({ item, amount }));
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
          <div className="w-[40%] h-28 row">
            <h2>Описание</h2>
          </div>
          <div className="w-[10%] h-28 row">
            <h2>Кол-во</h2>
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
              <BucketRow item={x.item} amount={x.amount} />
              <div className="w-full border-solid border-black border-[1px]"></div>
            </>
          ))}
        </div>

        <button
          onClick={() => {
            dispatch(addItem(qwe));
          }}
          className="w-40 h-40"
        />
      </section>
    </main>
  );
}

export default Bucket;
