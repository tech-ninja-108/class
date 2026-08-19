import { createSlice } from "@reduxjs/toolkit";
import { hydred, loginAction } from "./thunkAction";

const AuthSlice = createSlice({
  name: "auth",

  initialState: {
    users: null,
    isLoading: false,
    isLogind: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.isLogind = true;
    },

    removeUser: (state) => {
      state.users = null;
      state.isLoading = false;
      state.isLogind = false;
    },
  },
  extraReducers: (bilder) => {
    bilder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        ((state.users = action.payload),
          (state.isLoading = false),
          (state.isLogind = true));
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoading = false;
        state.isLogind = false;
      })
      .addCase(hydred.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hydred.fulfilled, (state, action) => {
        ((state.users = action.payload),
          (state.isLoading = false),
          (state.isLogind = true));
      })
      .addCase(hydred.rejected, (state) => {
        state.isLoading = false;
        state.isLogind = false;
      });
  },
});

export const { addUser, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
