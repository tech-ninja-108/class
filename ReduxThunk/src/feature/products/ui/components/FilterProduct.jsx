import React from "react";
import { FiSearch } from "react-icons/fi";

const FilterProduct = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
        />
      </div>

      {/* Select */}
      <select
        defaultValue=""
        className="min-w-44 cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
      >
        <option value="" disabled>
          Sort by
        </option>

        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
        <option value="discount">Best Discount</option>
      </select>
    </div>
  );
};

export default FilterProduct;
