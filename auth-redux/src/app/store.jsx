import { configureStore } from "@reduxjs/toolkit";
import reducers from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    users: reducers,
  },
});
