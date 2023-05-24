import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "./itemSlice";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as Item[],
  reducers: {
    likeItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },

    unlikeItem: (state, action: PayloadAction<Item>) => {
      return state.filter((x) => !(x.id === action.payload.id));
    },

    deleteAllItems: (state) => {
      return [];
    },
  },
});

export const { likeItem, unlikeItem, deleteAllItems } = favoritesSlice.actions;
export default favoritesSlice.reducer;
