import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../../hooks/tanstack";

const Product = () => {
  let limit = 100;
  // const [skiped, setskiped] = useState(0);
  // const { data, isPending } = tanstack(limit, skiped);
  // if (isPending) return "Loading...";
  // console.log(skiped);

  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProduct(limit);
  if (isPending) return "Loading...";

  let allProduct = data.pages.flatMap((val) => val.products);
  console.log(allProduct);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProduct?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        disabled={!hasNextPage}
        className=" cursor-pointer disabled:cursor-not-allowed"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading.."
          : hasNextPage
            ? "All data load"
            : "Load more"}
      </button>
    </div>
  );
};

export default Product;
