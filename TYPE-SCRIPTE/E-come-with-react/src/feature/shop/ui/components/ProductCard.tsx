import React from "react";
import SortFilter from "./SortFilter";
import type { product } from "../pages/shop";
import { useNavigate } from "react-router";

interface productRes {
  allProduct: product[];
  ref: string;
}
const ProductCard: React.FC<productRes> = ({ allProduct, ref }) => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <main className="w-full md:w-3/4">
        <SortFilter />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {allProduct?.map((product) => {
            const discountedPrice = product.discountPercentage
              ? (
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)
              : product.price;

            return (
              <div
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("button")) {
                    console.log("Button");
                    console.log(product.id);
                    return;
                  } else if (e.currentTarget) {
                    console.log("div");
                    console.log(product.id);
                    navigate(`/product/${product.id}`);
                    return;
                  }
                }}
                key={product.id}
                className="bg-white cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100 overflow-hidden"
              >
                {/* Image Container - Aspect ratio aur padding add ki taaki image proper dikhe */}
                <div className="overflow-hidden relative bg-gray-50 aspect-[4/3] flex items-center justify-center p-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Modern Category Badge (Glassmorphism look) */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>

                  {/* Discount Badge (Agar available ho) */}
                  {product.discountPercentage && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title - line-clamp-2 use kiya taaki lambe naam design na tode */}
                  <h2
                    className="text-gray-800 font-semibold text-lg leading-tight line-clamp-2 mb-1"
                    title={product.title}
                  >
                    {product.title}
                  </h2>

                  {/* Rating Stars (DummyJSON me rating aati hai) */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-400 text-sm">★★★★★</span>
                      <span className="text-xs text-gray-500 font-medium">
                        ({product.rating})
                      </span>
                    </div>
                  )}

                  {/* Yeh spacer chote/bade titles wale cards ki height same rakhega */}
                  <div className="flex-grow"></div>

                  {/* Price & Action Button */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      {/* Original Price */}
                      <p className="text-gray-400 text-xs line-through mb-0.5">
                        ₹{product.price}
                      </p>
                      {/* Discounted Price */}
                      <p className="text-indigo-600 font-extrabold text-xl">
                        ₹{discountedPrice}
                      </p>
                    </div>

                    {/* Modern Icon Cart Button */}
                    <button
                      className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white p-3 rounded-xl transition-colors duration-300 shadow-sm"
                      title="Add to Cart"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <div ref={ref}></div>
    </>
  );
};

export default ProductCard;
