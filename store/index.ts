import { configureStore } from "@reduxjs/toolkit";
import asideSlice from "./asideSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    aside: asideSlice,
    auth: authSlice,
  },
});

export default store;
