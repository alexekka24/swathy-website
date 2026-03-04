import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 max-w-xl mx-auto md:mx-0 text-center md:text-left"
        >
          <h2 className="font-rose mt-3 text-4xl md:text-9xl tracking-tighter text-red-500/70">
            About Me
          </h2>
          <p className="mt-4 text-white/60 font-cursive text-3xl">
            Visual storytelling through motion, light, and emotion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-8xl text-red-500/70 font-rose tracking-wider">
              Cinematographer Visual Storyteller
            </h3>

            <p className="text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, doloribus! I craft cinematic visuals that elevate
              brands and tell compelling stories.
            </p>

            <p className="text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0 text-lg">
              From fashion films to commercial narratives, my work focuses on
              emotion, texture, and rhythm.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-3/4 w-full max-w-sm group">
              <video
                src="/assets/videos/about-me.mp4"
                alt="Swathy Deepak portrait"
                autoPlay
                muted
                loop
                className="
                h-full w-full object-cover
                grayscale transition-all duration-700
                group-hover:grayscale-0 group-hover:scale-105
              "
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

