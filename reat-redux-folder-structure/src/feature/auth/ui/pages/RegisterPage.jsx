import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthHooks } from "../../Hooks/AuthHooks";

const RegisterPage = () => {
  const {
    showConfirmPassword,
    setShowConfirmPassword,
    showPassword,
    setShowPassword,
    navigate,
  } = AuthHooks();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
        <div className="rounded-2xl bg-slate-950/70 p-6 sm:p-8">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg shadow-purple-500/30">
              <FaUser />
            </div>

            <h1 className="text-3xl font-bold text-white">Create Account</h1>

            <p className="mt-2 text-sm text-gray-400">
              Register to create your new account
            </p>
          </div>

          <form className="space-y-5">
            {/* Full name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <FaUser className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <FaEnvelope className="text-gray-500" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <FaLock className="text-gray-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 transition hover:text-white"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Confirm Password
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <FaLock className="text-gray-500" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 transition hover:text-white"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg shadow-purple-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-600/40"
            >
              Create Account
              <FaArrowRight />
            </button>
          </form>

          {/* Login link */}
          <p className="mt-7 text-center text-sm text-gray-400">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="ml-2 font-semibold text-purple-400 transition hover:text-purple-300"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
