import {
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

const LoginPage = () => {
  const {
    showPassword,
    setShowPassword,
    navigate,
    register,
    handleSubmit,
    LoginSumbit,
  } = AuthHooks();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
        <div className="rounded-2xl bg-slate-950/70 p-6 sm:p-8">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg shadow-purple-500/30">
              <FaLock />
            </div>

            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

            <p className="mt-2 text-sm text-gray-400">
              Login to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit(LoginSumbit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                UserName
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <FaEnvelope className="text-gray-500" />

                <input
                  {...register("username")}
                  type="text"
                  placeholder="Enter your username"
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
                  {...register("password")}
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

            {/* Remember and forgot password */}
            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                className="font-medium text-purple-400 transition hover:text-purple-300"
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-semibold text-white shadow-lg shadow-purple-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-600/40"
            >
              Login
              <FaArrowRight />
            </button>
          </form>

          {/* Register link */}
          <p className="mt-7 text-center text-sm text-gray-400">
            Don&apos;t have an account?
            <button
              onClick={() => navigate("/register")}
              className="ml-2 font-semibold text-purple-400 transition hover:text-purple-300"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
