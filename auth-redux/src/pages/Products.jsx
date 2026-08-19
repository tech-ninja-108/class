import { useEffect, useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Products fetch error:", error);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Heading */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-16 text-center text-white">
        <p className="font-semibold text-blue-100">Explore Our Collection</p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">All Products</h1>

        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Find products from electronics, fashion, jewellery and more.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {/* Search */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Products
            </h2>

            <p className="mt-1 text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

          <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-gray-300 bg-white px-4">
            <FiSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center rounded-xl bg-gray-50 p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="pt-5">
                <p className="text-sm font-medium capitalize text-blue-600">
                  {product.category}
                </p>

                <h3 className="mt-2 line-clamp-2 min-h-12 font-bold text-gray-900">
                  {product.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-black text-gray-900">
                    ${product.price}
                  </p>

                  <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700">
                    <FiShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
