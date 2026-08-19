import { dataIntenst } from "../../../config/configApi";

export const productData = async (
  limit: number,
  searchqury: string,
  categoryqury: string,
  price: string,
  skip: number,
) => {
  const categoryaary = categoryqury.split(",");
  try {
    if (categoryaary.length > 0 && categoryaary[0] === "") {
      const res = await dataIntenst.get(
        `/products/search?q=${searchqury}&limit=${limit}&skip=${skip}`,
      );

      return res.data;
    } else {
      const res = categoryaary.map(
        async (val) => await dataIntenst.get(`/products/category/${val}`),
      );
      const allData = await Promise.all(res);
      const flatdata = allData.flatMap((val) => val.data.products);
      const priceData = flatdata.filter((vel) => {
        return vel.price < price;
      });
      console.log(priceData);

      return priceData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const category = async () => {
  try {
    const res = await dataIntenst.get("/products/category-list");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
