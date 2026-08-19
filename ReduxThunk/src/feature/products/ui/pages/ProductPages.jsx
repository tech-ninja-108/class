import ProductCard from "../components/ProductCard";
import { useAllProduct } from "../../hooks/useProduct";
import Loading from "../../../../shared/ui/pages/Loading";
import FilterProduct from "../components/FilterProduct";

const ProductPages = () => {
  const { data, isPending } = useAllProduct();

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <FilterProduct />
      {data?.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPages;
