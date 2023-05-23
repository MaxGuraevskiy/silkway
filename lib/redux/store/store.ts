"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemSlice from "../slices/itemSlice";
import userSlice from "../slices/userSlice";
import favoritesSlice from "../slices/favoritesSlice";

const rootReducer = combineReducers({
  user: userSlice,
  items: itemSlice,
  favorites: favoritesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
