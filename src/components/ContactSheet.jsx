import { X, Instagram, Youtube, Linkedin, Check, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const EMAIL = "swathydeepak@gmail.com";

export const ContactSheet = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const sheetRef = useRef(null);

  // Parallax mouse tracking for orbs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleMouseMove = (e) => {
    const rect = sheetRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 30);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 30);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const socials = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-8 md:bottom-8 z-50 md:w-[420px]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={sheetRef}
              onMouseMove={handleMouseMove}
              className="relative overflow-hidden rounded-3xl bg-neutral-950 border border-white/8 text-white shadow-2xl"
            >
              {/* === ANIMATED BACKGROUND === */}
              {/* Large moving red orb (mouse-tracked) */}
              <motion.div
                className="absolute w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
                  x: springX,
                  y: springY,
                  top: "-60px",
                  left: "50%",
                  translateX: "-50%",
                }}
              />

              {/* Bottom-left ambient glow */}
              <motion.div
                className="absolute w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)",
                  bottom: "-30px",
                  left: "-30px",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Top-right subtle glow */}
              <motion.div
                className="absolute w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)",
                  top: "20px",
                  right: "20px",
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Red gradient top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent z-20" />

              {/* Animated scan line */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none z-10"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Grain texture */}
              <div className="absolute inset-0 film-grain pointer-events-none opacity-10" />

              {/* === CONTENT === */}
              <div className="relative z-10 p-8 md:p-10 space-y-7">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-red-500/50 transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>

                {/* Header */}
                <div className="space-y-1 pr-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-red-500/70 font-techno">
                    Open for work
                  </p>
                  <h2 className="font-techno text-2xl md:text-3xl uppercase tracking-tighter leading-tight">
                    Let's create{" "}
                    <span className="text-red-500 italic">Together.</span>
                  </h2>
                  <p className="font-cursive text-white/40 text-lg">
                    Visual storytelling through motion.
                  </p>
                </div>

                {/* Email (copyable) */}
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                    Direct Email
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="group relative flex items-center gap-3 w-full p-4 rounded-2xl bg-white/4 border border-white/8 hover:border-red-500/40 transition-all cursor-pointer overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20">
                      <Mail size={14} className="text-red-500" />
                    </span>
                    <span className="font-techno text-sm tracking-tight text-white/70 group-hover:text-white transition-colors truncate">
                      {EMAIL}
                    </span>
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="ml-auto flex-shrink-0 flex items-center gap-1 text-[10px] uppercase tracking-widest text-green-400 font-techno"
                        >
                          <Check size={11} /> Copied
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-auto flex-shrink-0 text-[10px] uppercase tracking-widest text-white/20 font-techno group-hover:text-white/50 transition-colors"
                        >
                          Copy
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/5">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Location
                    </p>
                    <p className="text-sm text-white/60">Mumbai · Worldwide</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Availability
                    </p>
                    <p className="text-sm text-green-400/80 flex items-center justify-end gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                      Q2 2026 Open
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2">
                  {["Brand Films", "Commercials", "Fashion", "Social"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-techno uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/8 text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {socials.map(({ Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        aria-label={label}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:border-red-500/50 hover:text-red-400 transition-colors"
                      >
                        <Icon size={15} />
                      </motion.a>
                    ))}
                  </div>

                  <motion.a
                    href="https://wa.me/919XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-techno uppercase tracking-widest text-xs py-3 rounded-full transition-all shadow-lg shadow-red-500/20"
                  >
                    <MessageSquare size={14} />
                    WhatsApp
                    <ArrowUpRight size={12} className="opacity-70" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
