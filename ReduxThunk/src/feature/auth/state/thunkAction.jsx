import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiaxios } from "../../../config/api";

export const loginAction = createAsyncThunk(
  "/auth/login",
  async (crendical, thunkApi) => {
    try {
      const respons = await apiaxios.post("/auth/login", crendical);
      localStorage.setItem("accessToken", respons.data.accessToken);

      console.log(respons);

      return respons.data;
    } catch (e) {
      return thunkApi.rejectWithValue("login Failled", e);
    }
  },
);

export const hydred = createAsyncThunk("/auth/me", async (_, thunkApi) => {
  const token = localStorage.getItem("accessToken");
  try {
    const hydreds = await apiaxios.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return hydreds.data;
  } catch (e) {
    return thunkApi.rejectWithValue("untheize", e);
  }
});
