const SortFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
      <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
      <select className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white cursor-pointer">
        <option>Sort by: Recommended</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest Arrivals</option>
      </select>
    </div>
  );
};

export default SortFilter;
