import React from "react";
import {
  FaArrowRight,
  FaSearch,
  FaStar,
  FaShoppingCart,
  FaMobileAlt,
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaHeadphones,
  FaShoePrints,
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Mobiles",
      icon: <FaMobileAlt />,
      items: "120+ Products",
    },
    {
      id: 2,
      title: "Laptops",
      icon: <FaLaptop />,
      items: "80+ Products",
    },
    {
      id: 3,
      title: "Fashion",
      icon: <FaTshirt />,
      items: "200+ Products",
    },
    {
      id: 4,
      title: "Furniture",
      icon: <FaCouch />,
      items: "90+ Products",
    },
    {
      id: 5,
      title: "Headphones",
      icon: <FaHeadphones />,
      items: "70+ Products",
    },
    {
      id: 6,
      title: "Footwear",
      icon: <FaShoePrints />,
      items: "150+ Products",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      category: "Electronics",
      price: "2,499",
      oldPrice: "3,999",
      rating: 4.8,
      discount: "38% OFF",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Smart Watch Series 8",
      category: "Wearable",
      price: "3,299",
      oldPrice: "5,499",
      rating: 4.6,
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Nike Running Sneakers",
      category: "Footwear",
      price: "2,799",
      oldPrice: "4,299",
      rating: 4.7,
      discount: "35% OFF",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Classic Leather Backpack",
      category: "Fashion",
      price: "1,899",
      oldPrice: "2,999",
      rating: 4.5,
      discount: "37% OFF",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Professional Camera",
      category: "Electronics",
      price: "42,999",
      oldPrice: "49,999",
      rating: 4.9,
      discount: "14% OFF",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Modern Minimal Chair",
      category: "Furniture",
      price: "4,499",
      oldPrice: "6,999",
      rating: 4.4,
      discount: "36% OFF",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Apple MacBook Air",
      category: "Laptop",
      price: "79,999",
      oldPrice: "89,999",
      rating: 4.9,
      discount: "11% OFF",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Men Casual T-Shirt",
      category: "Fashion",
      price: "799",
      oldPrice: "1,299",
      rating: 4.3,
      discount: "38% OFF",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
    },
  ];

  const services = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "Free Delivery",
      description: "Free delivery on orders above ₹499",
    },
    {
      id: 2,
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      description: "7 days easy return and replacement",
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      description: "100% safe and secure payments",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Contact us anytime for assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero section */}
      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <span className="mb-5 w-fit rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
              New collection is live
            </span>

            <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Shop smarter.
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Live better.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Discover premium products, latest fashion and everyday essentials
              at prices you will love.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="flex items-center gap-3 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white transition hover:bg-purple-700"
              >
                Shop Now
                <FaArrowRight />
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/20"
              >
                Explore Offers
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white">10K+</h3>
                <p className="text-sm text-slate-400">Happy customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">500+</h3>
                <p className="text-sm text-slate-400">Premium products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">4.8</h3>
                <p className="text-sm text-slate-400">Average rating</p>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[500px] lg:block">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop"
              alt="Shopping collection"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/20 to-transparent" />

            <div className="absolute bottom-10 right-10 rounded-2xl border border-white/20 bg-white/15 p-5 text-white shadow-xl backdrop-blur-xl">
              <p className="text-sm text-slate-200">Special discount</p>
              <h3 className="mt-1 text-3xl font-black">Up to 50% OFF</h3>
              <p className="mt-1 text-sm text-slate-200">
                Limited time collection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60">
            <FaSearch className="ml-4 text-lg text-slate-400" />

            <input
              type="text"
              placeholder="Search for products, brands and categories..."
              className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-400 sm:text-base"
            />

            <button
              type="button"
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 sm:px-7"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="font-semibold text-purple-600">Shop by category</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Popular Categories
              </h2>
            </div>

            <button
              type="button"
              className="hidden items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 sm:flex"
            >
              View All
              <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                  {category.icon}
                </div>

                <h3 className="mt-4 font-bold text-slate-800">
                  {category.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">{category.items}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offer banner */}
      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-pink-600 px-7 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-widest text-orange-100">
              Weekend special offer
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Get extra 20% discount
            </h2>

            <p className="mt-3 max-w-xl text-orange-50">
              Use coupon code{" "}
              <span className="rounded bg-white/20 px-2 py-1 font-bold">
                SHOP20
              </span>{" "}
              during checkout.
            </p>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-pink-600 shadow-lg transition hover:scale-105"
          >
            Shop the Sale
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-semibold text-purple-600">
                Handpicked for you
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Featured Products
              </h2>
            </div>

            <button
              type="button"
              className="hidden items-center gap-2 font-semibold text-purple-600 hover:text-purple-700 sm:flex"
            >
              View All Products
              <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                    {product.discount}
                  </span>

                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-600 shadow-lg transition hover:bg-purple-600 hover:text-white"
                  >
                    <FaShoppingCart />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 line-clamp-1 text-lg font-bold text-slate-800">
                    {product.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1">
                    <FaStar className="text-amber-400" />
                    <span className="font-semibold text-slate-700">
                      {product.rating}
                    </span>
                    <span className="text-sm text-slate-400">
                      (120 reviews)
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xl font-black text-slate-900">
                      ₹{product.price}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 font-semibold text-white transition hover:bg-purple-600"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="mx-auto mt-8 flex items-center gap-2 font-semibold text-purple-600 sm:hidden"
          >
            View All Products
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                {service.icon}
              </div>

              <div>
                <h3 className="font-bold text-slate-800">{service.title}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-slate-900 px-7 py-12 text-white lg:flex-row lg:px-12">
          <div>
            <p className="font-semibold text-purple-400">Stay updated</p>

            <h2 className="mt-2 text-3xl font-bold">
              Subscribe to our newsletter
            </h2>

            <p className="mt-2 text-slate-400">
              Receive new product updates and exclusive discount offers.
            </p>
          </div>

          <div className="flex w-full max-w-lg rounded-xl bg-white p-2">
            <div className="flex flex-1 items-center">
              <FaEnvelope className="ml-3 text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent px-3 py-2 text-slate-900 outline-none"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 pb-8 pt-14 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black text-purple-400">ShopEase</h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Your trusted online shopping destination for quality products,
              great prices and fast delivery.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaYoutube />,
              ].map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition hover:bg-purple-600 hover:text-white"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <button className="w-fit hover:text-purple-400">Home</button>
              <button className="w-fit hover:text-purple-400">Products</button>
              <button className="w-fit hover:text-purple-400">
                New Arrivals
              </button>
              <button className="w-fit hover:text-purple-400">Offers</button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Customer Support</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <button className="w-fit hover:text-purple-400">
                Contact Us
              </button>
              <button className="w-fit hover:text-purple-400">
                Shipping Policy
              </button>
              <button className="w-fit hover:text-purple-400">
                Return Policy
              </button>
              <button className="w-fit hover:text-purple-400">
                Frequently Asked Questions
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Bhopal, Madhya Pradesh, India</p>
              <p>support@shopease.com</p>
              <p>+91 98765 43210</p>
              <p>Monday–Saturday, 9 AM–7 PM</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 ShopEase. All rights reserved.</p>
          <p>Privacy Policy · Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
