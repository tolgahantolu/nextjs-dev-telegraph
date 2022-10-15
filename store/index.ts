import { configureStore } from "@reduxjs/toolkit";
import asideSlice from "./asideSlice";

const store = configureStore({
  reducer: {
    aside: asideSlice,
  },
});

export default store;
