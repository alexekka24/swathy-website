import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShowReelSection } from "./ShowReelSection";

gsap.registerPlugin(ScrollTrigger);

export const HeroToShowreel = () => {
  const sectionRef = useRef(null);
  const pinholeRef = useRef(null);
  const overlayRef = useRef(null);

  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation(); // initial check
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      gsap.from("#hero-name-swathy", {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
      gsap.from("#hero-name-deepak", {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      // Hero push + darken
      tl.to("#hero-video", { scale: 1.5, ease: "none" });
      tl.to(overlayRef.current, { opacity: 1, ease: "none" }, "<");

      // Fade out hero text BEFORE pinhole
      tl.to("#hero-text", {
        opacity: 0,
        y: -40,
        ease: "none",
      });

      // Swathy Deepak move apart on scroll
      tl.to("#hero-name-swathy", { x: -300, ease: "none" }, "<");
      tl.to("#hero-name-deepak", { x: 300, ease: "none" }, "<");

      // Pinhole opens
      // tl.to("#pinhole-mask", {

      //   clipPath: "circle(70vw at 50% 50%)",
      //   ease: "none",
      // });
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // DESKTOP ONLY
        tl.to("#pinhole-mask", {
          // clipPath: "circle(70vw at 50% 50%)",
          clipPath: "none",
          backgroundColor: "#000",
          opacity: 1,
          ease: "power2.out",
        });
      });

      mm.add("(max-width: 767px)", () => {
        // MOBILE ONLY
        gsap.set("#pinhole-mask", {
          clipPath: "none",
          backgroundColor: "#000",
          opacity: 0,
        });
        tl.to("#pinhole-mask", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // SHOWREEL title
      tl.to("#showreel-title", { opacity: 1, ease: "none" });
      tl.to("#showreel-title", { opacity: 0, y: -120, ease: "none" });

      // Showreel video
      tl.to("#showreel-video", { opacity: 1, ease: "none" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* HERO VIDEO */}
      <video
        id="hero-video"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        // src="/assets/videos/showReel.mp4"
        src={
          isPortrait
            ? "/assets/videos/background-portrait.mp4"
            : "/assets/videos/showReel.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgb(0, 0, 0, 0.8) 40%, rgb(0, 0, 0) 100%)",
        }}
      />

      {/* 📝 HERO TEXT */}
      <div
        id="hero-text"
        className="pointer-events-none relative z-30 h-full flex flex-col items-center justify-center text-center text-white"
      >
        <p className="absolute text-4xl md:text-8xl tracking-wide flex gap-10 md:gap-25 text-red-500 font-rose">
          <span id="hero-name-swathy">Swathy</span>
          <span id="hero-name-deepak">Deepak</span>
        </p>
        <h1 className="text-[clamp(2rem,6vw,6rem)] font-techno uppercase mb-4">
          <div>Director</div>
          <div>of</div>
          <div>Photography</div>
        </h1>
      </div>

      {/* 🕳️ PINHOLE — TOP MOST */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div
          id="pinhole-mask"
          className="absolute inset-0 bg-black overflow-hidden"
          style={{
            clipPath: "circle(0vw at 50% 50%)",
          }}
        >
          <div
            id="showreel-title"
            className="absolute inset-0 flex items-center justify-center text-white opacity-0"
          >
            <h2 className="font-techno text-[clamp(2rem,12vw,10rem)] text-red-400">
              SHOWREEL
            </h2>
          </div>

          <div id="showreel-video" className="absolute inset-0 opacity-0 pointer-events-auto">
            <ShowReelSection />
          </div>
        </div>
      </div>
    </section>
  );
};

// text-[clamp(4rem,12vw,10rem)]
