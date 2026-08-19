import { createSlice } from "@reduxjs/toolkit";
import { currentuser, loginEmployee } from "./actionRedux";

const authslice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeuser: (state) => {
      ((state.user = null), (state.isLoading = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isLoading = false));
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(currentuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentuser.fulfilled, (state, action) => {
        ((state.user = action.payload), (state.isLoading = false));
      })
      .addCase(currentuser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeuser } = authslice.actions;
export default authslice.reducer;
