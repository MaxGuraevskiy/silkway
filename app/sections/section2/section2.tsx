"use client";
import Pagination from "@mui/material/Pagination";
import React from "react";
import ItemCard from "./itemCard";

function section2() {
  return (
    <section>
      <div className="flex flex-row flex-wrap space-x-10">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <Pagination count={10} />
    </section>
  );
}

export default section2;
