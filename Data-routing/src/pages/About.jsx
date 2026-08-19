import { FaAward, FaCheckCircle, FaLightbulb, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* About Hero */}

      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-[35px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
                alt="Our team"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-4 rounded-2xl bg-[#6657f5] p-6 text-white shadow-xl sm:right-10">
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="mt-1 text-sm text-white/80">Years of experience</p>
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="font-semibold text-[#6657f5]">About our company</p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              We create digital solutions that grow businesses.
            </h1>

            <p className="mt-6 leading-8 text-slate-500">
              CodeWave is a digital development company focused on creating
              modern websites, applications and user-friendly digital
              experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-500">
              Our team combines creativity, modern technology and smart planning
              to deliver high-quality projects.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Professional team",
                "Modern technologies",
                "Fast project delivery",
                "Customer support",
              ].map((item) => {
                return (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-semibold text-slate-700"
                  >
                    <FaCheckCircle className="text-[#6657f5]" />
                    {item}
                  </div>
                );
              })}
            </div>

            <button className="mt-9 rounded-xl bg-[#6657f5] px-7 py-4 font-semibold text-white">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Values */}

      <section className="bg-[#f8f9ff] px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-[#6657f5]">Why choose us</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Values that make us different
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-[#6657f5]">
                <FaLightbulb />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Creative Ideas
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                We create unique and modern solutions for every business.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-[#6657f5]">
                <FaUsers />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Expert Team
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Our team works together to deliver reliable quality.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-[#6657f5]">
                <FaAward />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Quality Work
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                We focus on performance, design and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}

      <section className="bg-[#6657f5] px-5 py-16 text-white md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-4xl font-black">250+</h3>
            <p className="mt-2 text-white/70">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-black">150+</h3>
            <p className="mt-2 text-white/70">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-black">20+</h3>
            <p className="mt-2 text-white/70">Team Members</p>
          </div>

          <div>
            <h3 className="text-4xl font-black">98%</h3>
            <p className="mt-2 text-white/70">Client Satisfaction</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
