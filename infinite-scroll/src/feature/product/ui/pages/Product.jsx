// import { useState } from "react";
import { infinit } from "../../hooks/useProduct";
import ProductCard from "../components/ProductCard";

const Product = () => {
  let limit = 100;
  // const [skiped, setskiped] = useState(0);
  // const [page, setpage] = useState(1);
  // const { data, isPending } = useProduct(limit, skiped);
  // if (isPending) return "Loading...";
  // console.log(skiped);

  const { data, isPending, hasNextPage, fetchNextPage, isFetchingNextPage } =
    infinit(limit);
  if (isPending) return "Loading...";
  let allProduct = data?.pages.flatMap((val) => val.products) || [];

  return (
    <div className="flex  w-full items-center  flex-col">
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProduct?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button
        disabled={!hasNextPage}
        className="bg-red-400 px-5 py-2 mb-10 cursor-pointer disabled:cursor-not-allowed"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
            ? "Load more"
            : "All load"}
      </button>

      {/* <div className="flex items-center gap-5 p-10">
        <button
          disabled={skiped === 0}
          onClick={() => {
            setskiped(skiped - limit);
            setpage(page - 1);
          }}
          className="bg-red-600 px-5 py-2 rounded-2xl disabled:cursor-not-allowed text-white cursor-pointer"
        >
          prev
        </button>
        <p>
          page {page} of {Math.ceil(data.total / limit)}
        </p>
        <button
          disabled={page >= Math.ceil(data.total / limit)}
          onClick={() => {
            setskiped(skiped + limit);
            setpage(page + 1);
          }}
          className="bg-red-600 px-5 py-2 rounded-2xl text-white cursor-pointer"
        >
          next
        </button>
      </div> */}
    </div>
  );
};

export default Product;
