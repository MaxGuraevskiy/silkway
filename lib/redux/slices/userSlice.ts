import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  login: string;
  password: string;
  token: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },

    logout: (state) => {
      state = { login: "", password: "", token: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
