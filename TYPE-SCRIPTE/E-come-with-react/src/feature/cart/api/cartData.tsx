import { dataIntenst } from "../../../config/configApi";

export const getCartData = async (userId: number) => {
  try {
    let res = await dataIntenst.get(`/carts/user/${userId}`);
    // console.log(res.data.carts[0].products);
    return res.data.carts;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id: number) => {
  try {
    const res = await dataIntenst.delete(`/carts/${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
