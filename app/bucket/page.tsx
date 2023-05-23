"use client";
import React from "react";
import Image from "next/image";
import chipsPath from "@/public/chips.jpg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type RowType = {
  photo: any;
  description: any;
  count: any;
  price: any;
  deleteItem: any;
};

const BucketRow = ({
  photo,
  description,
  count,
  price,
  deleteItem,
}: RowType) => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[20%] h-28 flex justify-center items-center">
        {photo}
      </div>
      <div className="w-[50%] h-28 flex justify-center items-center">
        {description}
      </div>
      <div className="w-[10%] h-28 flex justify-center items-center">
        {count}
      </div>
      <div className="w-[10%] h-28 flex justify-center items-center">
        {price}
      </div>
      <div className="w-[10%] h-28 flex justify-center items-center">
        {deleteItem}
      </div>
    </div>
  );
};

function Bucket() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-10">
      <BucketRow
        photo={<h2>Фото</h2>}
        description={<h2>Описание</h2>}
        count={<h2>Кол-во</h2>}
        price={<h2>Стоимость</h2>}
        deleteItem={<h2>Удалить</h2>}
      />
      <BucketRow
        photo={<Image src={chipsPath} alt="" className="w-40 h-40" />}
        description={<h3 className="">Чипы</h3>}
        count={<h3>1</h3>}
        price={<h3>1000руб</h3>}
        deleteItem={
          <div onClick={() => {}} className="cursor-pointer">
            <DeleteForeverIcon sx={{ fontSize: 30, color: "red" }} />
          </div>
        }
      />
    </main>
  );
}

export default Bucket;
