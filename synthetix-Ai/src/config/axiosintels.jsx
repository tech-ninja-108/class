import axios from "axios";
export const axiosapi = axios.create({
  //   baseURL: "https://api.team-sync.space/api",
  baseURL: "https://dummyjson.com",
  withCredentials: true,
});
