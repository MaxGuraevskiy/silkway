"use client";
import Autocomplete from "@mui/material/Autocomplete";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import React from "react";
import Image from "next/image";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import {
  addItem,
  deleteItem,
  plusItemAmount,
  minusItemAmount,
} from "@/lib/redux/slices/itemSlice";

import type { Item, BucketItem } from "@/lib/redux/slices/itemSlice";

import data from "@/lib/components/testData";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "1.4rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const category = [
  { id: "1", label: "Электроника", name: "Electronics" },
  { id: "2", label: "Хобби", name: "Hobby" },
  { id: "3", label: "Спорт", name: "Sport" },
  { id: "4", label: "Отдых", name: "Rest" },
  { id: "5", label: "Животные", name: "Animals" },
  { id: "6", label: "Оборудование", name: "Equipment" },
  { id: "7", label: "Красота", name: "Beauty" },
  { id: "8", label: "Игрушки", name: "Toys" },
  { id: "9", label: "Мебель", name: "Furniture" },
  { id: "10", label: "Для дома", name: "For Home" },
  { id: "11", label: "Автомобильная продукция", name: "Automotive products" },
  { id: "12", label: "Для ремонта", name: "For Repairs" },
  { id: "13", label: "Здоровье", name: "Health" },
  { id: "14", label: "Канцтовары", name: "Stationery" },
  { id: "15", label: "Товары для домашних животных", name: "Pet supplies" },
];

const sortingBy = [
  { id: "1", label: "По умолчанию", name: "Default" },
  { id: "2", label: "По возрастанию цены", name: "Ascending Prices" },
  { id: "3", label: "По убыванию цены", name: "Descending  Prices" },
];

const countOfItems = [
  { id: "1", label: "30" },
  { id: "2", label: "60" },
  { id: "3", label: "90" },
];

const ItemCard = (item: Item) => {
  return (
    <Link
      href={`/item/${item.id}`}
      className="w-[100%] tel:w-[48%] wide:w-[30%] p-5 m-2 border-solid border-customRed rounded-lg hover:border-customDarkRed hover:animate-pulse"
    >
      <div className="flex flex-col items-center h-full justify-between">
        <div className="flex flex-col items-center">
          <Image
            src={item.images[0]}
            alt={`item${item.id}image${0}`}
            width={300}
            height={300}
            className="w-full object-scale-down rounded-lg filter-none mb-2"
          />
          <h3 className="font-sans text-3xl text-black mb-2">{item.name}</h3>
        </div>

        <h3 className="font-serif text-3xl text-black self-end">
          {item.price} {item.currency}.
        </h3>
      </div>
    </Link>
  );
};

const Section2 = () => {
  return (
    <section className="space-y-10">
      <div className="w-full flex small:flex-row flex-col justify-center items-center">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={category}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Категория" />}
          className="m-3"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={sortingBy}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Сортировать" />
          )}
          className="m-3"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={countOfItems}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Количество" />}
          className="m-3"
        />
      </div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ fontSize: 20, color: "red" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div className="flex flex-row justify-between flex-wrap">
        {data.map((x, i) => (
          <ItemCard
            key={`item-card-${i}-${x.name}`}
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
        ))}
      </div>
      <Pagination count={10} size="large" />
    </section>
  );
};

export default Section2;
