import axios from "axios";

export const dataIntenst = axios.create({
  baseURL: "https://dummyjson.com",
});
