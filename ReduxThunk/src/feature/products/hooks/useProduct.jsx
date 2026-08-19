import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/Productapi";

export const useAllProduct = () => {
  const { data, isPending } = useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
  });
  return {
    data,
    isPending,
  };
};
