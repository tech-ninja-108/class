const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-100 p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />

        {/* Discount */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage}%
        </span>

        {/* Stock */}
        <span className="absolute right-3 top-3 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-sm text-gray-500">{product.brand}</p>

        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{product.rating}</span>
          <span className="text-sm text-gray-400">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2,
            )}
          </span>
        </div>

        {/* Extra information */}
        <div className="mb-4 flex justify-between text-xs text-gray-500">
          <span>Stock: {product.stock}</span>
          <span>Min order: {product.minimumOrderQuantity}</span>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
