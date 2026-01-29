import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[url('/assets/images/image1.jpg')]
             bg-cover bg-center bg-no-repeat">
      {/* 🎥 Background Video */}
      {/* <video
        // ref={heroRef}
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/assets/videos/showReel.mp4"

        autoPlay
        loop
        muted
        playsInline
      /> */}
      <div className="bg-background url">

      </div>

      {/* 🌫 Overlay */}
      <div className="absolute inset-0 bg-black z-1 opacity-80" />

      {/* 📝 Hero Content */}
      <div className="relative z-30 flex h-full items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-[BBH+Bogle]">
            <span className="">Hi, I'm</span>
            <span className="text-primary"> Swathy</span>
            <span className="text-gradient ml-2">Deepak</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            impedit!
          </p>
        </div>
      </div>

      <div className="bottom-10 absolute animate-bounce z-30 flex flex-col items-center gap-2 text-white/70">
          <div className="text-sm text-white/70">Scroll Down</div>
          <ArrowDown className="group-hover:translate-x-1 transition z-100" size={24} />
      </div>
    </section>
  );
};
