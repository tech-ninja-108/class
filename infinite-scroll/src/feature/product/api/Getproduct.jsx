import { productData } from "../../../config/configApi";

export const productApiData = async (limit, skiped) => {
  try {
    let res = await productData(`/products?limit=${limit}&skip=${skiped}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
