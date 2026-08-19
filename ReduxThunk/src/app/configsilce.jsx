import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../feature/auth/state/authSlice";

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});
