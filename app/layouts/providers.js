"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store/store";
import CssBaseline from "@mui/material/CssBaseline";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
