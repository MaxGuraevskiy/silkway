"use client";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { login, logout } from "@/lib/redux/slices/userSlice";

import type { User } from "@/lib/redux/slices/userSlice";

var classNames = require("classnames");

function Profile() {
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-10">
      <div
        className={classNames(
          "flex flex-col justify-center items-center w-full space-y-5 pt-10"
        )}
      >
        <TextField
          id="outlined-Login"
          label="Login"
          variant="outlined"
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
            dispatch(
              login({
                login: "qwe",
                password: "qwe",
                token: "qwe",
              })
            );
          }}
        >
          Войти
        </Button>
      </div>

      <div
        className={classNames(
          "flex flex-col justify-center items-center w-full space-y-5 pt-10"
          // { "hidden ": user.login }
        )}
      >
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
          id="outlined-Password"
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
        <Button variant="outlined" className="w-[300px]">
          Зарегистрироваться
        </Button>
      </div>
    </main>
  );
}

export default Profile;
