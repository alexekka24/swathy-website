export const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen overflow-hidden bg-black">
        {/* VIDEO BACKGROUND */}
        <video
          id="hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/videos/showReel.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* CONTENT */}
        <div
          id="hero-content"
          className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white"
        >
          <p className="text-xl md:text-2xl tracking-wide ">
            Swathy Deepak
          </p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-techno uppercase mb-4">
            <div>
              Director
              </div> 
              <div>
              of
              </div> 
              <div>
              Photography
              </div> 
          </h1>
        </div>
      </section>
    </>
  );
};
