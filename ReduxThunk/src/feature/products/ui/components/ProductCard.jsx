const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.discountPercentage}% OFF
        </span>

        <span className="absolute right-3 top-3 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-sm font-medium text-purple-600">
          {product.brand}
        </p>

        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
          </div>

          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>

            <p className="text-xs text-gray-500">
              {product.shippingInformation}
            </p>
          </div>

          <span className="rounded-lg bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            {product.category}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <button className="flex-1 rounded-xl border border-purple-600 px-4 py-2.5 font-medium text-purple-600 transition hover:bg-purple-50">
            View Details
          </button>

          <button className="flex-1 rounded-xl bg-purple-600 px-4 py-2.5 font-medium text-white transition hover:bg-purple-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
