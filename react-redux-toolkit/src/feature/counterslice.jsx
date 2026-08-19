import { createSlice } from "@reduxjs/toolkit";

const counterslices = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decerement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decerement } = counterslices.actions;

export default counterslices.reducer;
