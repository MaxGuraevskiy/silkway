import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Item = {
  id: string;
  price: number;
  currency: string;
  name: string;
  description: string;
  images: string[];
  minQuota: number;
  maxAbility: number;
  category: string;
};

export type BucketItem = {
  item: Item;
  amount: number;
};

const itemSlice = createSlice({
  name: "bucket",
  initialState: [] as BucketItem[],
  reducers: {
    addItem: (state, action: PayloadAction<BucketItem>) => {
      const index = state.findIndex(
        (x) => x.item.id === action.payload.item.id
      );
      if (index !== -1 && state[index].amount > 0) {
        state[index].amount += action.payload.amount;
      } else {
        state.push(action.payload);
      }
    },

    deleteItem: (state, action: PayloadAction<BucketItem>) => {
      return state.filter(({ item }) => !(item.id === action.payload.item.id));
    },

    deleteAllItems: (state) => {
      return [];
    },

    plusItemAmount: (state, action: PayloadAction<BucketItem>) => {
      const index = state.findIndex(
        (x) => x.item.id === action.payload.item.id
      );

      if (index !== -1 && state[index].amount > 0) state[index].amount++;
    },

    minusItemAmount: (state, action: PayloadAction<BucketItem>) => {
      const index = state.findIndex(
        (x) => x.item.id === action.payload.item.id
      );

      if (index !== -1 && state[index].amount > 0) state[index].amount--;
    },
  },
});

export const {
  addItem,
  deleteItem,
  deleteAllItems,
  minusItemAmount,
  plusItemAmount,
} = itemSlice.actions;
export default itemSlice.reducer;
