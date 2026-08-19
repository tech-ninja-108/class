import React from "react";
import { FaHome, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { removeUser } from "../../feature/auth/State/authSlice";

const Navbar = () => {
  const dishpatch = useDispatch();
  const navigate = useNavigate();
  const activeClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-purple-400"
      : "flex items-center gap-2 text-gray-300 hover:text-white transition";

  return (
    <nav className="flex items-center justify-between bg-slate-950 px-8 py-4 text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-400">ShopEase</h1>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <NavLink to="/main" end className={activeClass}>
          <FaHome />
          Home
        </NavLink>

        <NavLink to="/main/cart" className={activeClass}>
          <FaShoppingCart />
          Cart
        </NavLink>

        <NavLink to="/main/profile" className={activeClass}>
          <FaUser />
          Profile
        </NavLink>

        {/* Logout UI */}
        <button
          onClick={() => {
            dishpatch(removeUser());
            localStorage.removeItem("accessToken");
            navigate("/login", { replace: true });
          }}
          className="flex items-center gap-2 rounded-xl border border-red-500 bg-red-500/10 px-5 py-2 font-medium text-red-400 transition duration-300 hover:bg-red-500 hover:text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
