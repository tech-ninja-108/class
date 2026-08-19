import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosapi } from "../../../../config/axiosintels";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (data, apiThunk) => {
    try {
      const res = await axiosapi.post("/auth/login", data);
      return res.data;
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  },
);

export const currentuser = createAsyncThunk("auth/me", async (_, thunkApi) => {
  try {
    const res = await axiosapi.get("/auth/me");
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
