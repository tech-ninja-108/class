import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: null,
    isLogined: false,
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload;
      state.isLogined = true;
    },
    remveUsers: (state) => {
      ((state.users = null), (state.isLogined = false));
    },
  },
});

export const { addUsers, remveUsers } = userSlice.actions;

export default userSlice.reducer;
