import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaShoppingCart,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Fast, responsive and modern websites built with the latest technologies.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "App Development",
    description:
      "User-friendly mobile applications designed for Android and iOS devices.",
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Clean and attractive interfaces that provide a smooth user experience.",
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    title: "E-commerce",
    description:
      "Complete online shopping websites with cart, products and checkout UI.",
  },
  {
    id: 5,
    icon: <FaSearch />,
    title: "SEO Optimization",
    description:
      "Improve your website visibility and reach more customers through search.",
  },
  {
    id: 6,
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Secure and scalable server-side applications and REST API development.",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      {/* Hero */}

      <section className="bg-gradient-to-br from-[#6657f5] to-[#8f6df8] px-5 py-20 text-center text-white md:px-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-white/70">
          What we provide
        </p>

        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Our Professional Services
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
          We provide complete digital solutions to help businesses build a
          strong and successful online presence.
        </p>
      </section>

      {/* Service Cards */}

      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#6657f5]/30 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6657f5]/10 text-2xl text-[#6657f5] transition group-hover:bg-[#6657f5] group-hover:text-white">
                  {service.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-500">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-[#6657f5]">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}

      <section className="bg-white px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold text-[#6657f5]">Our process</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              How we complete your project
            </h2>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discussion",
                text: "We understand your project idea and requirements.",
              },
              {
                number: "02",
                title: "Planning",
                text: "We create a clear plan and design structure.",
              },
              {
                number: "03",
                title: "Development",
                text: "We build your project using modern technologies.",
              },
              {
                number: "04",
                title: "Delivery",
                text: "We test and deliver the completed project.",
              },
            ].map((item) => {
              return (
                <div
                  key={item.number}
                  className="rounded-2xl bg-[#f8f9ff] p-7 text-center"
                >
                  <span className="text-5xl font-black text-[#6657f5]/20">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
