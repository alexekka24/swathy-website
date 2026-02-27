import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectCarouselModal } from "./ProjectCarouselModal";

export const SelectedWork = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeModal = () => setActiveIndex(null);

  return (
    <section className="relative bg-black py-24 md:py-32 text-white overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-techno uppercase tracking-tighter">Selected <span className="text-red-500 italic">Work</span></h2>
            <p className="text-white/60 font-cursive text-xl">A curated selection of my visual journeys.</p>
          </div>
          <NavLink
            to="/movies"
            className="text-sm font-techno uppercase tracking-widest border-b border-white/20 hover:border-red-500 hover:text-red-500 transition-all pb-1"
          >
            View All Projects →
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ProjectGrid
            items={items}
            onItemClick={setActiveIndex}
            className="cursor-pointer"
          />
        </motion.div>

        {activeIndex !== null && (
          <ProjectCarouselModal
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

