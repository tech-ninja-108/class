import { config } from "../../../config/config";

export const productData = async (limit, skip) => {
  try {
    let res = await config.get(`/products?limit=${limit}&skip=${skip}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
