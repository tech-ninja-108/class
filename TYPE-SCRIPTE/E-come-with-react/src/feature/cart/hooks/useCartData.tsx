import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem, getCartData } from "../api/cartData";

// 1. Get cart data ke liye useQuery bilkul theek hai
export const useCartData = (userId: number) => {
  return useQuery({
    queryKey: ["cartItem", userId],
    queryFn: () => getCartData(userId),
  });
};

// 2. Delete karne ke liye useMutation ka use karein
export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteItem(id),
    onSuccess: () => {
      // Delete hone ke baad cart data ko wapas fetch (invalidate) kar lega taki UI update ho jaye
      queryClient.invalidateQueries({ queryKey: ["cartItem"] });
    },
  });
};
