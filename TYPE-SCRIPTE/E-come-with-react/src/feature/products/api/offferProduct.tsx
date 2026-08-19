import { dataIntenst } from "../../../config/configApi";

export const offferProduct = async () => {
  try {
    const res = await dataIntenst.get("/products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default offferProduct;
