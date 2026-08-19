import { useEffect } from "react";
import ProductSkeleton from "../components/sclaton";
import EmptyState from "../../../shop/ui/components/EmptyState";
import SimlerProduct from "../components/SimlerProduct";
import BackButton from "../../../../shared/ui/components/BackButton";
import dataHandalHooks from "../../hooks/dataHandalHooks";

const ProductPageUI = () => {
  const { data, isPending, activeImg, setActiveImg } = dataHandalHooks();

  useEffect(() => {
    if (data && data.images && data.images.length > 0) {
      setActiveImg(data.images[0]);
      return;
    }
  }, [data]);

  if (isPending) return <ProductSkeleton />;
  if (!data) return <EmptyState />;
  console.log(data.category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BackButton />
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-2xl shadow-sm">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden flex justify-center items-center">
            <img
              src={activeImg || data?.thumbnail}
              alt="product"
              className="max-h-full object-contain"
            />
          </div>
          <div className="flex gap-4 mt-4 overflow-x-auto w-full">
            {data?.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImg(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  activeImg === img
                    ? "border-indigo-600 shadow-md"
                    : "border-gray-200"
                }`}
                alt="thumbnail"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2">
            {data.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {data.title}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
              ★ {data.rating}
            </span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {data.description}
          </p>
          <div className="text-4xl font-black text-gray-900 mb-8">
            ₹{data.price.toFixed(2)}
          </div>

          <div className="flex gap-4">
            <button className="flex-1 cursor-pointer bg-indigo-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Add to Cart
            </button>
            <button className="flex-1 cursor-pointer bg-gray-900 text-white text-lg font-bold py-4 rounded-xl hover:bg-black transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <SimlerProduct category={data.category} />
    </div>
  );
};

export default ProductPageUI;
