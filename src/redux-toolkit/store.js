import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./Slices/HeaderSlice";

export const store = configureStore({
    reducer: {
      HeaderSlice
    },
  })