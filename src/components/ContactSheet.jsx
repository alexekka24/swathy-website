import { X, Instagram, Youtube, Linkedin, Check, Mail, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "swathydeepak@gmail.com";

export const ContactSheet = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-8 md:bottom-8 z-50 md:w-[450px]"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 text-white p-8 md:p-10 shadow-3xl">
              {/* Background Texture */}
              <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="font-techno text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                    Let’s create <span className="text-red-500 italic block">Together.</span>
                  </h2>
                  <p className="font-cursive text-white/50 text-lg">Visual storytelling through motion.</p>
                </div>

                {/* Email (copyable) */}
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Direct Email</p>
                  <button
                    onClick={handleCopyEmail}
                    className="group relative flex items-center gap-4 w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Mail size={18} className="text-red-500" />
                    <span className="font-techno text-lg md:text-xl tracking-tight text-white/80 group-hover:text-white transition-colors">
                      {EMAIL}
                    </span>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto flex items-center gap-1 text-[10px] uppercase tracking-widest text-green-400 font-techno"
                      >
                        <Check size={12} /> Copied
                      </motion.span>
                    )}
                  </button>
                </div>

                {/* Meta & Services */}
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Location</p>
                    <p className="text-sm text-white/70">Mumbai · Worldwide</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Availability</p>
                    <p className="text-sm text-green-500/80">Q2 2026 Open</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 text-center">Projects</p>
                  <p className="text-sm text-white/50 text-center leading-relaxed italic">
                    Brand Films · Commercials · Fashion · Social
                  </p>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex gap-4">
                    {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="p-3 rounded-full bg-white/5 border border-white/5 hover:text-red-500 hover:border-red-500/30 transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/919XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-techno uppercase tracking-widest text-xs py-4 rounded-full transition-all shadow-lg shadow-red-500/20"
                  >
                    <MessageSquare size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

