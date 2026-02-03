// CinematicSvgBackground.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicSvgBackground() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    // subtle camera push
    gsap.to(svg, {
      y: -120,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    // depth on each path
    gsap.utils.toArray(svg.querySelectorAll("path")).forEach((path, i) => {
      gsap.to(path, {
        y: -40 * i,
        ease: "none",
        scrollTrigger: {
          scrub: 1
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="cinematic-svg"
    >
      <path
        d="M0 260 Q360 220 720 260 T1440 260"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />
      <path
        d="M0 420 Q360 470 720 420 T1440 420"
        fill="none"
        stroke="rgba(255,255,255,0.045)"
        strokeWidth="1"
      />
      <path
        d="M0 580 Q360 540 720 580 T1440 580"
        fill="none"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="1"
      />
    </svg>
  );
}
