import { useQuery } from "@tanstack/react-query";
import { simlerProduct, singleProduct } from "../api/singleProduct";

export const singalData = (id: number) => {
  return useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => singleProduct(id),
  });
};

export const sameProduct = (category: string) => {
  return useQuery({
    queryKey: ["singleProduct"],
    queryFn: () => simlerProduct(category),
  });
};
