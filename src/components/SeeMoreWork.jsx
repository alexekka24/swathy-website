import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const SeeMoreWork = () => {
  const links = [
    {
      label: "Instagram",
      to: "/instagram",
      image: "/assets/images/image1.jpg",
      desc: "Social Stories",
    },
    {
      label: "Movies",
      to: "/movies",
      image: "/assets/images/image1.jpg",
      desc: "Cinematic Narratives",
    },
    {
      label: "Fashion",
      to: "/fashion",
      image: "/assets/images/image1.jpg",
      desc: "Visual Aesthetics",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background Texture */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-techno text-4xl md:text-7xl uppercase tracking-tighter leading-tight">
            Hungry for <span className="text-red-500 italic block md:inline underline underline-offset-8">More?</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white/60 font-cursive">
            Explore my full collection of cinematic works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className="group relative h-80 md:h-120 rounded-3xl overflow-hidden block border border-white/10"
              >
                {/* Image */}
                <img
                  src={link.image}
                  alt={link.label}
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-all duration-700 grayscale group-hover:grayscale-0
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-techno text-3xl md:text-4xl uppercase tracking-tighter group-hover:text-red-500 transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-widest">
                        {link.desc}
                      </p>
                    </div>
                    <div className="p-3 rounded-full border border-white/20 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                      <ArrowUpRight
                        size={24}
                        className="text-white group-hover:rotate-45 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

