import React from "react";

const Home = () => {
  // DummyJSON jaisa fake data UI check karne ke liye
  const offerProducts = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 15,
      discountPercentage: 15.5,
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro",
      price: 1099,
      discountPercentage: 10.5,
      thumbnail: "https://placehold.co/400x400?text=iPhone+15",
    },
    {
      id: 3,
      title: "Sony Noise Cancelling Headphones",
      price: 299,
      discountPercentage: 20.0,
      thumbnail: "https://placehold.co/400x400?text=Sony+Headphones",
    },
    {
      id: 4,
      title: "Nike Air Max Sneakers",
      price: 120,
      discountPercentage: 25.0,
      thumbnail: "https://placehold.co/400x400?text=Nike+Air+Max",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Super Sale is Live!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Get up to 50% OFF on top brands. Limited time offer.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
          Shop Offers Now
        </button>
      </div>

      {/* Offers Grid Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-3">
          🔥 Deals of the Day
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offerProducts.map((product) => {
            // Discounted price nikalne ka formula
            const discountedPrice = (
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discountPercentage}% OFF
                </div>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover bg-gray-100"
                />

                <div className="p-4">
                  <h3
                    className="font-semibold text-lg text-gray-800 truncate"
                    title={product.title}
                  >
                    {product.title}
                  </h3>

                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-600">
                      ${discountedPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.price}
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
