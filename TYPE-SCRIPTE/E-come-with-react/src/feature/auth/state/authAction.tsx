import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Login } from "../Types/AuthTypes";
import { dataIntenst } from "../../../config/configApi";

export const authAction = createAsyncThunk(
  "auth/login",
  async (data: Login, apiThunk) => {
    try {
      const res = await dataIntenst.post("/auth/login", data);
      return res.data;
    } catch (error) {
      return apiThunk.rejectWithValue(error);
    }
  },
);

export const authMe = createAsyncThunk("/auth/me", async (_, apiThunk) => {
  try {
    const token = localStorage.getItem("access_token");
    const res = await dataIntenst.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    return apiThunk.rejectWithValue(error);
  }
});
