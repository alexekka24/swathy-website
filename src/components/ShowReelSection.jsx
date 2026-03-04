import { useState, useEffect } from "react";

export const ShowReelSection = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation(); // initial check
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);
  return (
    <section className="relative h-screen flex justify-center items-center bg-black z-99999">
      {/* <video
        className="w-[70%] object-contain z-0"
        src="/assets/videos/showReel.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <iframe
        src={`https://www.youtube.com/embed/${isPortrait ? "hfsD4ZT5mAw" : "vgXhHNy95RI"}?autoplay=1&mute=1&playsinline=1&controls=1&loop=1&playlist=${isPortrait ? "hfsD4ZT5mAw" : "vgXhHNy95RI"}`}
        className="h-screen w-[80%] object-contain z-999"
        allowFullScreen
      />
    </section>
  );
}