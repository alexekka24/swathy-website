// src/components/ProjectLightbox.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectLightbox = ({
  isOpen,
  items,
  initialIndex = 0,
  onClose,
}) => {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setIndex(initialIndex);
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const project = items[index];

  const videoSrc =
    project.type === "vimeo"
      ? `https://player.vimeo.com/video/${project.videoId}?autoplay=1&muted=1`
      : `https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white/70 hover:text-white"
        >
          <X size={28} />
        </button>

        <div className="flex h-full flex-col md:flex-row">
          <div className="flex-1 bg-black">
            <iframe
              src={videoSrc}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="h-full w-full"
            />
          </div>

          <div className="w-full md:w-105 px-8 py-10 text-white">
            <h2 className="text-3xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-white/70">{project.subtitle}</p>

            <div className="mt-6 space-y-2 text-sm">
              <p><span className="text-white/40">Brand</span> — {project.brand}</p>
              <p><span className="text-white/40">Production</span> — {project.company}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIndex((index - 1 + items.length) % items.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          onClick={() => setIndex((index + 1) % items.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        >
          <ChevronRight size={36} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
