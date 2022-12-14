import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAside: null,
};

const asideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    showAside: (state, action) => {
      state.showAside = action.payload;
    },
  },
});

export const { showAside } = asideSlice.actions;
export default asideSlice.reducer;
