"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { login, logout } from "@/lib/redux/slices/userSlice";

import type { User } from "@/lib/redux/slices/userSlice";
import Link from "next/link";
import Autocomplete from "@mui/material/Autocomplete";

var classNames = require("classnames");

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

function Profile() {
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center p-3 pt-[63px] space-y-10">
      {user.token === "" || user.token === undefined ? (
        <>
          <div
            className={classNames(
              "flex flex-col justify-center items-center w-full space-y-5 pt-10"
            )}
          >
            <div className="flex flex-col justify-center items-center space-y-5 p-10 rounded-lg shadow-lg">
              <TextField
                id="outlined-Login"
                label="Login"
                // variant="outlined-controlled"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                sx={{ width: "300px" }}
              />
              <TextField
                id="outlined-Password"
                label="Password"
                variant="outlined"
                type="password"
                sx={{ width: "300px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outlined"
                className="w-[300px]"
                onClick={() => {
                  if (
                    (loginName === "maximguraevskiy@gmail.com" ||
                      loginName === "user") &&
                    password === "test123"
                  ) {
                    dispatch(
                      login({
                        email: "maximguraevskiy@gmail.com",
                        password: "test123",
                        token: "IUweSufspwH1Sdi38SAj8",
                        username: "user",
                        firstName: "Максим",
                        secondName: "Гураевский",
                        url: "https://guraevskiy.ru/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme_main.4c0d9d3c.jpg&w=1920&q=75",
                      })
                    );
                  }
                }}
              >
                Войти
              </Button>
            </div>
          </div>

          <div
            className={classNames(
              "flex flex-col justify-center items-center w-full pt-10"
              // { "hidden ": user.login }
            )}
          >
            <div className="flex flex-col justify-center items-center space-y-5 shadow-lg p-7 rounded-lg">
              <TextField
                id="outlined-Username"
                label="Username"
                variant="outlined"
                sx={{ width: "300px" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                id="outlined-Email"
                label="Email"
                variant="outlined"
                type="email"
                sx={{ width: "300px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-RegistrationPassword"
                label="Password"
                variant="outlined"
                type="password"
                sx={{ width: "300px" }}
                value={registrationPassword}
                onChange={(e) => setRegistrationPassword(e.target.value)}
              />
              <TextField
                id="outlined-First"
                label="First Name"
                variant="outlined"
                sx={{ width: "300px" }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="outlined-Second"
                label="Second Name"
                variant="outlined"
                sx={{ width: "300px" }}
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="max-w-[300px]"
              />
              <Button variant="outlined" className="w-[300px]">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </>
      ) : (
        <section className="flex flex-col w-full pt-[63px]">
          {/* Avatar, Name, etc */}

          <div className="w-full p-1 mobile:p-12">
            <div className="w-full flex flex-col mobile:flex-row items-center shadow-lg justify-between p-5 rounded-lg">
              <Image
                src={user.url}
                width={300}
                height={300}
                alt={`${user.username} image`}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="">Токен: {user.token}</h1>
                <h2 className="">Никнейм: {user.username}</h2>
              </div>
              <div className="flex flex-col ">
                <h1 className="">Имя: {user.firstName}</h1>
                <h2 className="">Фамилия: {user.secondName}</h2>
                <h3 className="">{user.email}</h3>
              </div>
            </div>
          </div>

          {/* Client and Moder menu */}
          <div className="flex flex-row w-full rounded-lg space-x-10 p-1 mobile:p-12">
            {/* Client menu */}
            <div className="w-1/2 flex flex-col shadow-lg space-y-10 p-5 rounded-lg">
              <div className="flex flex-row w-full space-x-5">
                <TextField
                  id="outlined-NewPassword"
                  label="Новый пароль"
                  variant="outlined"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  fullWidth={true}
                />
                <Button variant="contained">Изменить</Button>
              </div>
              <Link href="/favorites" className="w-full">
                <Button
                  color="secondary"
                  variant="contained"
                  className="w-full h-20"
                >
                  Избранное
                </Button>
              </Link>
            </div>

            {/* Moder menu */}
            <div className="w-1/2 flex flex-col shadow-lg space-y-10 p-5 rounded-lg">
              <h1 className="">Создание новой позиции</h1>
              <TextField
                id="outlined-Name"
                label="Название"
                variant="outlined"
                fullWidth={true}
              />
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="max-w-[300px]"
                multiple
              />
              <TextareaAutosize />
              <TextField
                id="outlined-Price"
                label="Стоимость"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                id="outlined-Currency"
                label="Валюта"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                id="outlined-minQuota"
                label="Минимальная квота"
                variant="outlined"
                fullWidth={true}
              />
              <TextField
                id="outlined-maxAbility"
                label="Максимальное количество"
                variant="outlined"
                fullWidth={true}
              />
              <Autocomplete
                disablePortal
                id="combo-box-category"
                options={category}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Категория" />
                )}
              />
              <Button
                color="success"
                variant="contained"
                className="w-full h-20"
              >
                Добавить
              </Button>
            </div>
          </div>
          <Button
            variant="outlined"
            className="w-[300px]"
            onClick={() => {
              dispatch(logout());
            }}
            color="warning"
          >
            Выйти
          </Button>
        </section>
      )}
    </main>
  );
}

export default Profile;
