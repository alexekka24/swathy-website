import { FaWhatsapp, FaImdb } from "react-icons/fa";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919717981853";
const MESSAGE = "Hi! I came across your portfolio and would like to connect.";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE,
  )}`;

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8, x: 20 },
    animate: { opacity: 1, scale: 1, x: 0 },
    hover: { scale: 1.1, x: -5 },
    tap: { scale: 0.9 }
  };

  return (
    <div className="flex flex-col fixed bottom-6 right-6 gap-4 z-[100]">
      {/* IMDB Button */}
      <motion.a
        href="https://www.imdb.com/name/nm9696928/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit IMDB Profile"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="
          group relative flex items-center justify-center
          rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
          shadow-2xl shadow-black/50 overflow-hidden
          w-14 h-14 md:w-16 md:h-16
        "
      >
        <div className="absolute inset-0 bg-[#E2B616] opacity-0 group-hover:opacity-10 transition-opacity" />
        <FaImdb size={32} className="text-[#E2B616] drop-shadow-[0_0_8px_rgba(226,182,22,0.3)] transition-transform group-hover:scale-110" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0.1 }}
        className="
          group relative flex items-center justify-center
          rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
          shadow-2xl shadow-black/50 overflow-hidden
          w-14 h-14 md:w-16 md:h-16
        "
      >
        <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-10 transition-opacity" />
        <FaWhatsapp size={32} className="text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.3)] transition-transform group-hover:scale-110" />
      </motion.a>
    </div>
  );
}

