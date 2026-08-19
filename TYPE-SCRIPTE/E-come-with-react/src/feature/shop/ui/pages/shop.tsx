import { dataQuiry } from "../../hooks/dataquriye";
import { useInView } from "react-intersection-observer";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";
import EmptyState from "../components/EmptyState";

export interface product {
  thumbnail: string;
  rating?: number;
  price: number;
  title: string;
  tags: string[];
  id: number;
  category: string;
  discountPercentage?: number;
}

export interface resProduct {
  products: product[];
  limit?: number;
  skip?: number;
  total?: number;
  length?: number;
}
const Shop = () => {
  const limit: number = 20;
  const [searchParams, setsearchParams] = useSearchParams();
  const searchqury = searchParams.get("search") || "";
  const categoryqury = searchParams.get("category") || "";
  const price = searchParams.get("price") || "";

  const {
    data,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
  } = dataQuiry(limit, searchqury, categoryqury, price);
  const { ref } = useInView({
    rootMargin: "100px",
    onChange: (InView) => {
      if (InView && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
  });

  if (isPending) return "Loading...";
  const allProduct: product[] =
    data?.pages.flatMap((val: resProduct) => {
      if (val.products) {
        return val.products;
      } else {
        return val;
      }
    }) || [];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      {!allProduct.length ? (
        <EmptyState />
      ) : (
        <>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <Filter />
            {/* Product Grid */}
            <ProductCard allProduct={allProduct} ref={ref} />
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
