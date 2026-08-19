import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const [search, setsearch] = useState("");
  //   console.log(search);
  const navigate = useNavigate();

  const searchs = (e) => {
    e.preventDefault();
    if (search.trim() == "") {
      navigate("/products");
      return;
    }

    navigate(`/products?search=${search}`);
    console.log(search);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-indigo-600 tracking-wide"
            >
              LootDeals
            </NavLink>
          </div>

          {/* Search Bar (Hidden on smaller screens) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={(e) => searchs(e)} className="relative w-full">
              <input
                type="text"
                value={search}
                className="w-full border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                placeholder="Search for electronics, clothes, and more..."
                onChange={(e) => setsearch(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 px-5 rounded-tr-md rounded-br-md cursor-pointer bg-blue-700 h-full"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg> */}
                Search
              </button>
            </form>
          </div>

          {/* Navigation Links & Icons */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/products"
              className="text-gray-600 hover:text-indigo-600 font-medium hidden sm:block"
            >
              Shop
            </NavLink>

            {/* Cart Icon with Badge */}
            <NavLink
              to="/cart"
              className="relative text-gray-600 hover:text-indigo-600 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* Dynamic Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </NavLink>

            {/* User Profile / Login Route */}
            <NavLink
              to="/profile"
              className="text-gray-600 hover:text-indigo-600 font-medium flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="hidden sm:block">Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
