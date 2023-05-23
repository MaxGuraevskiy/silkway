import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./itemSlice";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },

    deleteItem: (state, action: PayloadAction<Item>) => {
      return state.filter((x) => !(x.id === action.payload.id));
    },

    deleteAllItems: (state) => {
      return [];
    },
  },
});

export const { addItem, deleteItem, deleteAllItems } = favoritesSlice.actions;
export default favoritesSlice.reducer;
