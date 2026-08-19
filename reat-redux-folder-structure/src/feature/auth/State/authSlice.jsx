import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLogined: false,
    isLoding: true,
  },
  reducers: {
    addUser: (state, action) => {
      ((state.user = action.payload),
        (state.isLogined = true),
        (state.isLoding = false));
    },
    removeUser: (state) => {
      ((state.user = null),
        (state.isLogined = false),
        (state.isLoding = false));
    },
    stopLoading: (state) => {
      state.isLoding = false;
    },
  },
});

export const { addUser, removeUser, stopLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
