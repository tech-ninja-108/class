import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const active = ({ isActive }) => {
    return isActive ? "text-amber-300 underline" : "";
  };
  return (
    <div className="flex items-center justify-between bg-amber-700 px-10 py-5 text-white">
      <h1>Logo</h1>
      <div className="flex gap-10">
        <NavLink
          className={({ isActive }) => active({ isActive })}
          to={"/main/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => active({ isActive })}
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => active({ isActive })}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-5">
        <NavLink>
          <FaCartPlus />
        </NavLink>
        <button className="cursor-pointer">
          <MdLogout />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
