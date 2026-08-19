import { useState } from "react";
import { NavLink } from "react-router";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-black">
          Shop<span className="text-blue-600">Nest</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/main/home" className={activeLink}>
            Home
          </NavLink>

          <NavLink to="/products" className={activeLink}>
            Products
          </NavLink>

          <NavLink to="/categories" className={activeLink}>
            Categories
          </NavLink>

          <NavLink to="about" className={activeLink}>
            About
          </NavLink>

          <NavLink to="/contact" className={activeLink}>
            Contact
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100">
            <FiSearch size={20} />
          </button>

          <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100">
            <FiHeart size={20} />
          </button>

          <NavLink
            to="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <FiShoppingCart size={22} />

            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </NavLink>

          <NavLink
            to="/login"
            className="hidden lg:flex items-center gap-2 border px-4 py-2 rounded-full hover:border-blue-600 hover:text-blue-600"
          >
            <FiUser />
            Login
          </NavLink>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 flex flex-col p-4 gap-3">
          <NavLink to="/home" className={activeLink}>
            Home
          </NavLink>

          <NavLink to="/products" className={activeLink}>
            Products
          </NavLink>

          <NavLink to="/categories" className={activeLink}>
            Categories
          </NavLink>

          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>

          <NavLink to="/contact" className={activeLink}>
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className="bg-blue-600 text-white rounded-lg text-center py-2"
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
