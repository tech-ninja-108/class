import { FiAward, FiHeart, FiShoppingBag, FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <main className="bg-white">
      {/* Heading */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 px-5 py-20 text-center text-white">
        <p className="font-semibold text-blue-100">About ShopNest</p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          Shopping Made Simple
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
          We provide quality products, fair pricing and a simple shopping
          experience for customers everywhere.
        </p>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
            alt="About ShopNest"
            className="h-[480px] w-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-blue-600">Our Story</p>

          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Helping You Find Better Products
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            ShopNest was created to make online shopping easy, secure and
            enjoyable. We bring products from different categories into one
            simple platform.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Our goal is to provide affordable products, trusted service and fast
            customer support.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-blue-50 p-5">
              <h3 className="text-3xl font-black text-blue-600">10K+</h3>
              <p className="mt-1 text-gray-600">Customers</p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <h3 className="text-3xl font-black text-purple-600">500+</h3>
              <p className="mt-1 text-gray-600">Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-semibold text-blue-600">Our Values</p>

            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Why Choose Us
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<FiShoppingBag />}
              title="Quality Products"
              description="We carefully select useful and quality products."
            />

            <ValueCard
              icon={<FiUsers />}
              title="Customer First"
              description="Customer satisfaction is our first priority."
            />

            <ValueCard
              icon={<FiHeart />}
              title="Trusted Service"
              description="We focus on honest and reliable service."
            />

            <ValueCard
              icon={<FiAward />}
              title="Best Experience"
              description="A simple and smooth shopping experience."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
};

export default About;
