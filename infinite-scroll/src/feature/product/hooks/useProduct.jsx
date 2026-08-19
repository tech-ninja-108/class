// import { useQuery } from "@tanstack/react-query";
import { productApiData } from "../api/Getproduct";

// export const useProduct = (limit, skiped) => {
//   return useQuery({
//     queryKey: ["product", skiped],
//     queryFn: () => productApiData(limit, skiped),
//   });
// };

import { useInfiniteQuery } from "@tanstack/react-query";

export const infinit = (limit) => {
  return useInfiniteQuery({
    queryKey: ["product"],
    queryFn: ({ pageParam }) => {
      return productApiData(limit, pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      let loadedData = allPages.length * limit;
      if (loadedData < lastPage.total) return loadedData;
      return undefined;
    },
  });
};
