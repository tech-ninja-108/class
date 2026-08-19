import { IoIosPerson, IoIosMail, IoIosLock, IoIosEye } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Mycontext } from "../context/Mycontex";
import { sumbitData } from "../components/sumbit";

const Register = () => {
  const { register, registerForm, navigate, handleSubmit } = sumbitData();
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-4 py-10">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Register Form */}

        <div className="flex w-full items-center justify-center p-7 sm:p-12 md:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold text-[#6546f5]">
                Get started
              </p>

              <h2 className="text-4xl font-bold text-slate-900">
                Create your account
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Fill in your details to create a new account.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(registerForm)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-[#6546f5] focus-within:ring-2 focus-within:ring-[#6546f5]/15">
                  <IoIosPerson className="text-2xl text-slate-400" />

                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-3 py-4 text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-[#6546f5] focus-within:ring-2 focus-within:ring-[#6546f5]/15">
                  <IoIosMail className="text-2xl text-slate-400" />

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-[#6546f5] focus-within:ring-2 focus-within:ring-[#6546f5]/15">
                  <IoIosLock className="text-2xl text-slate-400" />

                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-transparent px-3 py-4 text-sm text-slate-800 outline-none"
                  />

                  <IoIosEye className="cursor-pointer text-2xl text-slate-400" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-[#6546f5] focus-within:ring-2 focus-within:ring-[#6546f5]/15">
                  <IoIosLock className="text-2xl text-slate-400" />

                  <input
                    {...register("conformpassword")}
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full bg-transparent px-3 py-4 text-sm text-slate-800 outline-none"
                  />

                  <IoIosEye className="cursor-pointer text-2xl text-slate-400" />
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[#6546f5]"
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#6546f5]"
                  >
                    Terms and Conditions
                  </button>
                </span>
              </label>

              <button
                type="submit"
                className="mt-1 cursor-pointer flex items-center justify-center gap-3 rounded-xl bg-[#6546f5] px-5 py-4 font-semibold text-white transition hover:bg-[#5438e8]"
              >
                Create Account
                <FaArrowRightLong />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-bold text-[#6546f5]"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Right Section */}

        <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-[#6546f5] to-[#8c5cff] p-12 text-white md:flex">
          <div>
            <h1 className="text-3xl font-bold">ShopNest</h1>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-white/70">
              Join Us
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Start your shopping journey today.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/80">
              Create an account to save products, manage your orders and get
              exclusive offers.
            </p>
          </div>

          <p className="text-sm text-white/60">
            © 2026 ShopNest. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
