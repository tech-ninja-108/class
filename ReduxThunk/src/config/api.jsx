import axios from "axios";
export const apiaxios = axios.create({
  baseURL: "https://dummyjson.com",
  withCredentials: true,
});
