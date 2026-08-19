import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">Join us to get started</p>
        </div>

        <form className="space-y-5">
          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <FaUser className="text-gray-400 transition-colors group-focus-within:text-purple-500" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <FaEnvelope className="text-gray-400 transition-colors group-focus-within:text-purple-500" />
            </div>
            <input
              type="username"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div className="group relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <FaLock className="text-gray-400 transition-colors group-focus-within:text-purple-500" />
            </div>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-gray-700 transition-all focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
            Create Account
          </button>
        </form>

        <div className="my-6 flex items-center text-gray-400">
          <div className="h-px flex-grow bg-gray-200"></div>
          <span className="px-4 text-sm font-medium">Or</span>
          <div className="h-px flex-grow bg-gray-200"></div>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm">
          <FaGoogle className="text-red-500" /> Sign up with Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-bold text-purple-600 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
