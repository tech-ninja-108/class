import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Online Shopping Website",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Travel Booking Platform",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Education Dashboard",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Finance Dashboard",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Fitness Application",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      {/* Header */}

      <section className="px-5 py-20 text-center md:px-10">
        <p className="font-semibold text-[#6657f5]">Our recent work</p>

        <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Projects we are proud of
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
          Explore some of our recent website and application design projects.
        </p>
      </section>

      {/* Filter Buttons */}

      <section className="px-5 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          <button className="rounded-full bg-[#6657f5] px-6 py-3 font-semibold text-white">
            All Projects
          </button>

          <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-600 shadow-sm">
            Websites
          </button>

          <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-600 shadow-sm">
            Applications
          </button>

          <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-600 shadow-sm">
            UI Design
          </button>
        </div>
      </section>

      {/* Projects Grid */}

      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition group-hover:bg-slate-900/40">
                    <button className="flex h-14 w-14 scale-0 items-center justify-center rounded-full bg-white text-[#6657f5] transition group-hover:scale-100">
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-[#6657f5]">
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <button className="mt-5 flex items-center gap-2 font-semibold text-slate-700">
                    View Project
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="rounded-xl bg-[#6657f5] px-8 py-4 font-semibold text-white transition hover:bg-[#5546e8]">
            View All Projects
          </button>
        </div>
      </section>
    </main>
  );
};

export default Projects;
