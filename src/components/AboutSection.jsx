export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-black text-white border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-white/50">
            Get to know me
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            About Me
          </h2>
          <p className="mt-4 text-white/60">
            Visual storytelling through motion, light, and emotion.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Cinematographer & Visual Storyteller
            </h3>

            <p className="text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, doloribus! I craft cinematic visuals that elevate
              brands and tell compelling stories.
            </p>

            <p className="text-white/70 leading-relaxed max-w-xl mx-auto md:mx-0">
              From fashion films to commercial narratives, my work focuses on
              emotion, texture, and rhythm.
            </p>

            {/* CTA */}
            <div className="pt-6 flex justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="flex justify-center md:justify-end">
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] w-full max-w-sm group">
              <img
                src="/assets/images/image1.jpg"
                alt="Swathy Deepak portrait"
                className="
              h-full w-full object-cover
              grayscale transition-all duration-700
              group-hover:grayscale-0 group-hover:scale-105
            "
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
