import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";

const Home = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              New Collection 2026
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Discover Products
              <span className="block text-blue-600">Made For You</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore trending fashion, electronics, jewellery and everyday
              essentials at affordable prices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/products"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Shop Now
                <FaArrowRightLong />
              </NavLink>

              <NavLink
                to="/categories"
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600"
              >
                View Categories
              </NavLink>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-500">Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
                <p className="text-sm text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg rounded-[40px] bg-blue-100 p-7">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
                alt="Shopping"
                className="h-[460px] w-full rounded-[32px] object-cover"
              />

              <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 shadow-xl">
                <p className="text-sm text-gray-500">Starting from</p>
                <h3 className="text-xl font-bold text-blue-600">$19.99</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <Feature
          icon={<FiTruck />}
          title="Free Delivery"
          description="Free delivery on orders above $50"
        />

        <Feature
          icon={<FiShield />}
          title="Secure Payment"
          description="Your payment information is safe"
        />

        <Feature
          icon={<FiRefreshCw />}
          title="Easy Returns"
          description="Return products within 7 days"
        />

        <Feature
          icon={<FiHeadphones />}
          title="24/7 Support"
          description="Customer support whenever needed"
        />
      </section>
    </main>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Home;
