import { apiaxios } from "../../../config/api";

export const getProduct = async () => {
  try {
    let res = await apiaxios.get("/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const filter = async () => {
  try {
    const res = await apiaxios.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
