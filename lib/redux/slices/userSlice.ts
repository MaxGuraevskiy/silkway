import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  email: string;
  password: string;
  token: string;
  username: string;
  firstName: string;
  secondName: string;
  url: string
};

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.url = action.payload.url;
    },

    logout: (state) => {
      state.email = "";
      state.password = "";
      state.token = "";
      state.username = "";
      state.firstName = "";
      state.secondName = "";
      state.url = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
