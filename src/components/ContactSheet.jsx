import { X, Instagram, Youtube, Linkedin, Check } from "lucide-react";
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
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.y > 120 || info.velocity.y > 800) {
                onClose();
              }
            }}
          >
            <div className="rounded-t-3xl bg-black text-white px-6 py-10 shadow-2xl">
              {/* Handle */}
              <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-white/20" />

              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Let’s create something together
                </h2>
                <button
                  onClick={onClose}
                  className="hidden lg:block text-white/60 hover:text-white transition cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Email (copyable) */}
              <button
                onClick={handleCopyEmail}
                className="mt-10 mx-auto flex items-center justify-center gap-3 text-center text-xl font-medium hover:text-red-600 transition cursor-pointer"
              >
                {EMAIL}
                {copied && (
                  <span className="flex items-center gap-1 text-sm text-green-400">
                    <Check size={16} /> Copied
                  </span>
                )}
              </button>

              {/* Meta */}
              <p className="mt-4 text-white/60">Working worldwide</p>

              <p className="mt-2 text-white/60">
                Brand Films · Commercials · Fashion · Social Content
              </p>

              {/* Socials */}
              <div className="mt-8 flex justify-center gap-8">
                <a
                  href="#"
                  className="hover:text-red-600 transition cursor-pointer"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 transition cursor-pointer"
                >
                  <Youtube />
                </a>
                <a
                  href="#"
                  className="hover:text-red-600 transition cursor-pointer"
                >
                  <Linkedin />
                </a>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block w-full rounded-full border border-white/20 py-3 text-center hover:bg-white hover:text-black transition"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
