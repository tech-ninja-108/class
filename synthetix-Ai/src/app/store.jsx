import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../feature/auth/state/auth/authslice";

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});
