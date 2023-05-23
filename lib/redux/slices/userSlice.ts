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
    addItem: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },

    deleteItem: (state) => {
      state = { login: "", password: "", token: "" };
    },
  },
});

export const { addItem, deleteItem } = userSlice.actions;
export default userSlice.reducer;
