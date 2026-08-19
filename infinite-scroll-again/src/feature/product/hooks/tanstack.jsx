// import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { productData } from "../api/productData";

// export const tanstack = (limit, skip) => {
//   return useQuery({
//     queryKey: ["product", skip, limit],
//     queryFn: () => productData(limit, skip),
//   });
// };

export const useProduct = (limit) => {
  return useInfiniteQuery({
    queryKey: ["product", limit],
    queryFn: ({ pageParam }) => productData(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = allPage.length * limit;
      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });
};
