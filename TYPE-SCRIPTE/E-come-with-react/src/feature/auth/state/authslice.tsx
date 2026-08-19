import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authMe } from "./authAction";

export interface userData {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
export interface AuthState {
  user: userData | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userData>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
  extraReducers: (bundler) => {
    bundler
      .addCase(authMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authMe.fulfilled, (state, action: PayloadAction<userData>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(authMe.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
