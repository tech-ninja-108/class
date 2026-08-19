import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Authhooks } from "../../hooks/Authhooks";

const Register = () => {
  const { navigate, register, handleSubmit } = Authhooks();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 p-8 shadow-2xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-400">Join us today</p>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-gray-300">Full Name</label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <FaUser className="text-gray-500" />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-gray-300">Email</label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <FaEnvelope className="text-gray-500" />

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-gray-300">Password</label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <FaLock className="text-gray-500" />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-gray-300">Confirm Password</label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <FaLock className="text-gray-500" />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent px-4 py-4 text-white outline-none"
              />
            </div>
          </div>

          <button className="w-full rounded-xl bg-purple-600 py-4 font-semibold text-white hover:bg-purple-700">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer text-purple-400"
          >
            {" "}
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
