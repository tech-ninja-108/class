// Login.tsx
import { FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { useHooks } from "../../hooks/useHooks";
import { BiUser } from "react-icons/bi";

export default function Login() {
  const { register, handleSubmit, loginSumbit, navigate } = useHooks();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(loginSumbit)} className="space-y-5">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <BiUser className="text-gray-400 transition-colors group-focus-within:text-purple-500" />
            </div>
            <input
              {...register("username")}
              type="text"
              placeholder="Enter Username"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <FaLock className="text-gray-400 transition-colors group-focus-within:text-purple-500" />
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="font-semibold text-purple-600 hover:text-purple-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center text-gray-400">
          <div className="h-px flex-grow bg-gray-200"></div>
          <span className="px-4 text-sm font-medium">Or continue with</span>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm">
            <FaGithub className="text-gray-900" /> GitHub
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-bold text-purple-600 hover:underline"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}
