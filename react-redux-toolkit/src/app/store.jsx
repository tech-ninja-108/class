import { configureStore } from "@reduxjs/toolkit";
import reducess from "../feature/counterslice";

export const store = configureStore({
  reducer: {
    counter: reducess,
  },
});
