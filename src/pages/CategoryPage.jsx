import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/categories";
import { ProjectGrid } from "../components/ProjectGrid";
import { useState } from "react";
import { ProjectCarouselModal } from "../components/ProjectCarouselModal";

export const CategoryPage = () => {
  const { category } = useParams();
  const data = categories[category];
  console.log(data);
  console.log(category);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const [activeIndex, setActiveIndex] = useState(null);
  const closeModal = () => setActiveIndex(null);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Page Header / Intro */}
      <section className="relative flex items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-4xl text-center">
          <h1 className="max-sm:text-6xl md:text-9xl lg:text-[15rem] font-semibold tracking-tight text-shadow-md text-shadow-white/30 font-display font-[Rubik]">
            {data.title}
          </h1>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Divider (Optional but premium) */}
      <div className="h-px bg-white/10 mx-6 md:mx-20" />

      {/* Grid Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectGrid items={data.items} category={category} onItemClick={setActiveIndex} className="cursor-pointer" />
          {activeIndex !== null && (
            <ProjectCarouselModal
              items={data.items}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              onClose={closeModal}
            />
          )}
        </div>
      </section>
    </main>
  );
};
