const ProductSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      {/* =========================================
          TOP SECTION: SINGLE PRODUCT SKELETON
          ========================================= */}
      <div className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-2xl shadow-sm">
        {/* Left: Image Gallery Skeleton */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Main Image Box */}
          <div className="w-full h-[400px] bg-gray-200 rounded-xl"></div>
          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto w-full">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"
              ></div>
            ))}
          </div>
        </div>

        {/* Right: Product Info Skeleton */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Category */}
          <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
          {/* Title (2 lines) */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-1/2 mb-6"></div>
          {/* Rating */}
          <div className="h-8 bg-gray-200 rounded-full w-20 mb-8"></div>
          {/* Description */}
          <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-10"></div>
          {/* Price */}
          <div className="h-12 bg-gray-200 rounded w-1/3 mb-8"></div>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="flex-1 h-14 bg-gray-200 rounded-xl"></div>
            <div className="flex-1 h-14 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM SECTION: SIMILAR PRODUCTS SKELETON
          ========================================= */}
      <div className="mt-16">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-sm p-4 border border-gray-100"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
