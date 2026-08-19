import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { productData } from "../api/ProductData";

export const dataQuiry = (limit, searchqury, categoryqury, price) => {
  return useInfiniteQuery({
    queryKey: ["product", limit, searchqury, categoryqury, price],
    queryFn: ({ pageParam }) =>
      productData(limit, searchqury, categoryqury, price, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      const totalLoadData = allPage.length * limit;

      if (totalLoadData < lastPage.total) return totalLoadData;
      return undefined;
    },
  });
};
