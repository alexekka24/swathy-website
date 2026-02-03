// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const ShowReelSection = () => {
//   const sectionRef = useRef(null);
//   const maskRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         maskRef.current,
//         {
//           clipPath: "circle(0% at 50% 50%)",
//         },
//         {
//           clipPath: "circle(80% at 50% 50%)",
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "+=150%",
//             scrub: true,
//             pin: true,
//             // markers: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
//     >
//       {/* 🕳️ Pinhole Mask */}
//       <div
//         ref={maskRef}
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           clipPath: "circle(0% at 50% 50%)",
//         }}
//       >
//         {/* 🎥 Your existing video */}
//         <video
//           className="w-[70%] object-contain"
//           src="/assets/videos/showReel.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>
//     </section>
//   );
// };
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
    <section className="relative h-screen flex justify-center items-center bg-black">
      {/* <video
        className="w-[70%] object-contain z-0"
        src="/assets/videos/showReel.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <iframe
            src={`https://www.youtube.com/embed/${isPortrait ? "hfsD4ZT5mAw" : "vgXhHNy95RI"}?autoplay=1&mute=1&playsinline=1`}
            className="h-screen w-[80%] object-contain z-999"
            allowFullScreen
          />
    </section>
  );
}