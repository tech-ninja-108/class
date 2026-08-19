import React from "react";
import { FaArrowRight, FaPlay, FaStar } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-20 lg:py-24">
      {/* Background Shapes */}

      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-200 opacity-40 blur-3xl"></div>

      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-200 opacity-40 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6657f5]/20 bg-[#6657f5]/10 px-4 py-2">
            <FaStar className="text-[#6657f5]" />

            <p className="text-sm font-semibold text-[#6657f5]">
              Trusted by 10,000+ customers
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build your digital
            <span className="text-[#6657f5]"> future </span>
            with us.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We create modern, fast and responsive websites that help your
            business grow and connect with more customers.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 rounded-xl bg-[#6657f5] px-7 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#5546e8]">
              Start a Project
              <FaArrowRight />
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-[#6657f5] hover:text-[#6657f5]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6657f5] text-sm text-white">
                <FaPlay />
              </span>
              Watch Video
            </button>
          </div>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">250+</h3>
              <p className="mt-1 text-sm text-slate-500">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">98%</h3>
              <p className="mt-1 text-sm text-slate-500">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">5+</h3>
              <p className="mt-1 text-sm text-slate-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-[35px] bg-gradient-to-br from-[#6657f5] to-[#9b6df8] p-5 shadow-2xl shadow-purple-200">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
              alt="Team working"
              className="h-[360px] w-full rounded-[27px] object-cover sm:h-[460px]"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-7 left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                  🚀
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">Fast Development</h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Modern and scalable code
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Card */}

            <div className="absolute -right-3 top-8 rounded-2xl bg-white p-4 shadow-xl sm:-right-10">
              <div className="flex items-center gap-2 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                4.9 Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
