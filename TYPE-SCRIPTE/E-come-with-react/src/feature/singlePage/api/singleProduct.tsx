import { dataIntenst } from "../../../config/configApi";

export const singleProduct = async (id) => {
  const res = await dataIntenst.get(`/products/${id}`);
  return res.data;
};

export const simlerProduct = async (category: string) => {
  const res = await dataIntenst.get(`/products/category/${category}`);
  return res.data;
};
