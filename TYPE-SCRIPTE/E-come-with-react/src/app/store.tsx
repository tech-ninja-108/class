import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../feature/auth/state/authslice";

export const store = configureStore({
  reducer: {
    auth: authreducer,
  },
});

// TypeScript ko automatically store ka pura structure samajh aane ke liye:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
