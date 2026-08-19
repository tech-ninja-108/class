import { NavLink } from "react-router";
import { FiMail, FiLock, FiEye } from "react-icons/fi";
import { Auth } from "../hooks/AuthHooks";

const Login = () => {
  const { loginSubmit, handleSubmit, register } = Auth();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-blue-600 to-indigo-800 p-12 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl font-black">
              Shop<span className="text-blue-200">Nest</span>
            </h1>

            <h2 className="mt-20 text-4xl font-black leading-tight">
              Welcome Back
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-blue-100">
              Login to explore products, manage your cart and continue your
              shopping journey.
            </p>
          </div>

          <p className="text-sm text-blue-200">
            Simple. Secure. Fast Shopping.
          </p>
        </div>

        <div className="p-7 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-md">
            <p className="font-semibold text-blue-600">Welcome Back</p>

            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Login to your account
            </h2>

            <p className="mt-3 text-gray-500">
              Enter your email and password to continue.
            </p>

            <form
              onSubmit={handleSubmit(loginSubmit)}
              className="mt-8 space-y-5"
            >
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
                    placeholder="Enter your password"
                    className="w-full bg-transparent py-3 outline-none"
                  />

                  <FiEye className="cursor-pointer text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </button>
            </form>

            <p className="mt-7 text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <NavLink
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
