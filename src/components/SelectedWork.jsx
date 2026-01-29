// src/components/SelectedWork.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectCarouselModal } from "./ProjectCarouselModal";

export const SelectedWork = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeModal = () => setActiveIndex(null);

  return (
    <>
      <section className="bg-black py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-semibold">Selected Work</h2>
            <NavLink
              to="/movies"
              className="text-sm border-b border-white/40 hover:border-white transition"
            >
              View All →
            </NavLink>
          </div>

          <ProjectGrid
            items={items}
            onItemClick={setActiveIndex}
            className="cursor-pointer"
          />
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
    </>
  );
};
