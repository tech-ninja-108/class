import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Clothing",
      description: "Modern and comfortable fashion for men.",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Women's Clothing",
      description: "Explore stylish outfits for every occasion.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Electronics",
      description: "Latest gadgets and electronic accessories.",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Jewellery",
      description: "Elegant jewellery for your special moments.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-950 px-5 py-20 text-center text-white">
        <p className="font-semibold text-blue-400">Shop By Category</p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          Find What You Love
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Browse our selected categories and discover products matching your
          style and needs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[380px] overflow-hidden rounded-3xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h2 className="text-3xl font-bold">{category.name}</h2>

                <p className="mt-2 max-w-md text-gray-200">
                  {category.description}
                </p>

                <NavLink
                  to="/products"
                  className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 transition hover:bg-blue-600 hover:text-white"
                >
                  Explore Products
                  <FaArrowRightLong />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Categories;
