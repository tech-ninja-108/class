import { useNavigate } from "react-router";
import { sameProduct } from "../../hooks/singleProductqury";

const SimlerProduct = ({ category }) => {
  const { data, isPending } = sameProduct(category);
  const navigate = useNavigate();

  if (isPending)
    return (
      <div className="mt-16 flex justify-center items-center h-40 bg-gray-50 rounded-2xl">
        <span className="text-indigo-600 font-bold text-lg animate-pulse tracking-wider">
          Loading amazing deals...
        </span>
      </div>
    );

  const productsList = data?.products || [];
  if (productsList.length === 0) return null;

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Similar Products
        </h2>
        <span className="text-indigo-600 font-semibold text-sm cursor-pointer hover:text-indigo-800 transition-colors">
          View all deals →
        </span>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {productsList.map((item) => (
          <div
            onClick={() => {
              navigate(`/product/${item.id}`);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            key={item.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2 cursor-pointer flex flex-col"
          >
            {/* Image Section */}
            <div className="relative w-full h-56 bg-gray-50 flex justify-center items-center p-6 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional: Agar API me discount hai to badge dikhayein */}
              {item.discountPercentage && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-extrabold px-2 py-1 rounded-md shadow-sm tracking-wide">
                  {Math.round(item.discountPercentage)}% OFF
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-gray-900 font-bold truncate text-lg group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                  {category}
                </p>
              </div>

              {/* Price & Action Section */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-black text-gray-900">
                  ₹{item.price.toFixed(2)}
                </p>
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-indigo-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimlerProduct;
