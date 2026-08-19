import { NavLink } from "react-router";
import { FiUser, FiMail, FiLock, FiEye } from "react-icons/fi";
import { Auth } from "../hooks/AuthHooks";

const Register = () => {
  const { register, registerSubmit, handleSubmit } = Auth();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-purple-600 to-blue-800 p-12 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl font-black">
              Shop<span className="text-purple-200">Nest</span>
            </h1>

            <h2 className="mt-20 text-4xl font-black leading-tight">
              Create Your Account
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-purple-100">
              Join ShopNest and discover trending products at affordable prices.
            </p>
          </div>

          <p className="text-sm text-purple-200">
            Start your shopping journey today.
          </p>
        </div>

        <div className="p-7 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-md">
            <p className="font-semibold text-blue-600">Create Account</p>

            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Register with ShopNest
            </h2>

            <p className="mt-3 text-gray-500">
              Fill in your details to create a new account.
            </p>

            <form
              onSubmit={handleSubmit(registerSubmit)}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
                  <FiUser className="text-gray-400" />

                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
                  <FiMail className="text-gray-400" />

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
                  <FiLock className="text-gray-400" />

                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-transparent py-3 outline-none"
                  />

                  <FiEye className="cursor-pointer text-gray-400" />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Confirm Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 focus-within:border-blue-600">
                  <FiLock className="text-gray-400" />

                  <input
                    {...register("conformpassword")}
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-transparent py-3 outline-none"
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span>
                  I agree to the{" "}
                  <button type="button" className="font-semibold text-blue-600">
                    Terms and Conditions
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Create Account
              </button>
            </form>

            <p className="mt-7 text-center text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
