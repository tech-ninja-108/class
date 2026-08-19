import React, { useContext, useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaCode,
  FaGear,
  FaRightFromBracket,
  FaUser,
} from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { Mycontext } from "../context/Mycontex";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  const navigate = useNavigate();

  const { isLogined, setIsLogined } = useContext(Mycontext);

  const activeClass = ({ isActive }) => {
    return isActive
      ? "font-semibold text-[#6657f5]"
      : "font-medium text-slate-600 transition hover:text-[#6657f5]";
  };

  const toggleProfile = () => {
    setProfileOpen((previousValue) => !previousValue);
  };

  const logoutHandler = () => {
    setIsLogined(null);

    localStorage.removeItem("login");

    setProfileOpen(false);

    navigate("/login");
  };

  useEffect(() => {
    const closeProfile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", closeProfile);

    return () => {
      document.removeEventListener("mousedown", closeProfile);
    };
  }, []);

  const userName =
    isLogined?.name || isLogined?.fullName || isLogined?.username || "User";

  const userEmail = isLogined?.email || "user@email.com";

  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <nav className="relative flex h-20 w-full items-center justify-between border-b border-slate-200 bg-white px-5 md:px-10 lg:px-20">
      {/* Logo */}

      <NavLink to="/main" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6657f5] text-xl text-white">
          <FaCode />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          Code<span className="text-[#6657f5]">Wave</span>
        </h1>
      </NavLink>

      {/* Navigation Links */}

      <div className="hidden items-center gap-8 md:flex">
        <NavLink to="/main" end className={activeClass}>
          Home
        </NavLink>

        <NavLink to="/main/services" className={activeClass}>
          Services
        </NavLink>

        <NavLink to="/main/project" className={activeClass}>
          Projects
        </NavLink>

        <NavLink to="/main/about" className={activeClass}>
          About
        </NavLink>

        <NavLink to="/main/contact" className={activeClass}>
          Contact
        </NavLink>
      </div>

      {/* User Profile */}

      <div ref={profileRef} className="relative hidden md:block">
        <button
          type="button"
          onClick={toggleProfile}
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-slate-100"
        >
          {/* User Avatar */}

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6657f5] text-lg font-bold text-white">
            {firstLetter}
          </div>

          {/* User Details */}

          <div className="max-w-36">
            <h3 className="truncate text-sm font-bold text-slate-900">
              {userName}
            </h3>

            <p className="truncate text-xs text-slate-500">{userEmail}</p>
          </div>

          <FaChevronDown
            className={`ml-1 text-xs text-slate-500 transition-transform duration-300 ${
              profileOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Profile Dropdown */}

        {profileOpen && (
          <div className="absolute right-0 top-[62px] z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            {/* Profile Header */}

            <div className="bg-gradient-to-r from-[#6657f5] to-[#8b6df6] p-5 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-xl font-bold">
                  {firstLetter}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold">{userName}</h3>

                  <p className="mt-1 truncate text-xs text-white/75">
                    {userEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Information */}

            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Account
              </p>

              <p className="mt-2 text-sm font-medium text-slate-700">
                Frontend Developer
              </p>

              <p className="mt-1 text-xs text-slate-500">Welcome to CodeWave</p>
            </div>

            {/* Profile Links */}

            <div className="p-2">
              <NavLink
                to="/main/profile"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-[#6657f5]/10 hover:text-[#6657f5]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <FaUser />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">My Profile</h4>

                  <p className="text-xs text-slate-400">
                    View personal information
                  </p>
                </div>
              </NavLink>

              <NavLink
                to="/main/settings"
                onClick={() => setProfileOpen(false)}
                className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-[#6657f5]/10 hover:text-[#6657f5]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <FaGear />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">Account Settings</h4>

                  <p className="text-xs text-slate-400">
                    Manage your preferences
                  </p>
                </div>
              </NavLink>
            </div>

            {/* Logout */}

            <div className="border-t border-slate-100 p-2">
              <button
                type="button"
                onClick={logoutHandler}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-500 transition hover:bg-red-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <FaRightFromBracket />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">Logout</h4>

                  <p className="text-xs text-red-300">
                    Sign out from your account
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}

      <button type="button" className="text-2xl text-slate-800 md:hidden">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
