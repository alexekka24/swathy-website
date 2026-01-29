// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export const ProjectCarouselModal = ({
  items,
  activeIndex,
  setActiveIndex,
  onClose,
}) => {
  const item = items[activeIndex];

  const prev = () =>
    setActiveIndex((activeIndex - 1 + items.length) % items.length);

  const next = () => setActiveIndex((activeIndex + 1) % items.length);

  // 🔒 Lock background scroll & interaction
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 rounded-full text-white cursor-pointer hover:bg-white/10"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full text-white cursor-pointer hover:bg-white/10"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full text-white cursor-pointer hover:bg-white/10"
          >
            <ChevronRight size={36} />
          </button>

          {/* CONTENT */}
          <motion.div
            key={item.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
            }}
            className="
            w-full max-w-400
            px-4 lg:px-20
            flex flex-col justify-between items-center gap-4
            lg:grid 
            lg:grid-cols-[3fr_1fr]
            lg:gap-12
            
          "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* VIDEO */}
            <div className="w-full mt-16 lg:mt-0 flex items-center justify-center">
              <div className="w-full max-w-[80vw] lg:max-w-none aspect-video rounded-3xl overflow-hidden bg-black">
                {item.youtubeId && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=1&playsinline=1`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* METADATA */}
            <div className="w-full text-white space-y-4 lg:space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                {item.title}
              </h2>
              <p>Brand</p>
              <p>
                Description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ex, eius?
              </p>
              {item.brand && (
                <p className="text-white/70">Brand: {item.brand}</p>
              )}

              {item.description && (
                <p className="text-white/80 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
