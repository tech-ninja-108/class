import axios from "axios";
export const productData = axios.create({
  baseURL: "https://dummyjson.com",
});
