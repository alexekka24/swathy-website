import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const SeeMoreWork = () => {
  const links = [
    {
      label: "Instagram",
      to: "/instagram",
      image: "/assets/images/image1.jpg",
    },
    { label: "Movies", to: "/movies", image: "/assets/images/image1.jpg" },
    { label: "Fashion", to: "/fashion", image: "/assets/images/image1.jpg" },
  ];

  return (
    <section className="relative py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Wanna see more of my work?
          </h2>
          <p className="mt-3 text-white/60">
            Explore projects across films, fashion, and social content.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="group relative h-50 md:h-105 rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={link.image}
                alt={link.label}
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 lg:grayscale
                  group-hover:scale-105 group-hover:grayscale-0
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-wide">
                    {link.label}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    className="
                  text-white/70
                  group-hover:text-white
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  transition
                "
                  />
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};
