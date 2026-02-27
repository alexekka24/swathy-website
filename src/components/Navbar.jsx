import { useState, useEffect } from "react";
import { cn } from "../utils/utils";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ContactSheet } from "./ContactSheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Instagram", href: "/instagram" },
  { name: "Movies", href: "/movies" },
  { name: "Fashion", href: "/fashion" },
  { name: "Contact", action: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactOpen = () => {
    setContactOpen(true);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || contactOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen, contactOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 text-white h-24 flex items-center",
          isScrolled ? "bg-black/80 backdrop-blur-md h-20" : "bg-transparent",
        )}
      >
        <div className="container flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl md:text-3xl text-primary flex items-center transition-opacity hover:opacity-70"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-cursive">Swathy Deepak</span>
          </NavLink>

          <button
            className="group relative z-[60] flex items-center gap-3 text-red-500 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="overflow-hidden h-14 md:h-20 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="menu-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex flex-col font-techno text-xl md:text-3xl leading-none tracking-tighter text-right"
                  >
                    <span>ME</span>
                    <span>NU.</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="close-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="font-techno text-xl md:text-3xl tracking-widest"
                  >
                    CLOSE
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-1.5 justify-center items-end w-8 h-8">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-red-500 block transition-transform"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-red-500 block"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8, width: "2rem" } : { rotate: 0, y: 0, width: "1.25rem" }}
                className="h-0.5 bg-red-500 block transition-all"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-black flex flex-col items-center justify-center"
          >
            {/* Close Button in Overlay */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors cursor-pointer group"
            >
              <X size={40} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Background Texture */}
            <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

            <nav className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
              {navItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  {item.href ? (
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => cn(
                        "text-5xl md:text-8xl font-techno uppercase transition-all duration-300 hover:text-red-500 hover:scale-105 inline-block",
                        isActive ? "text-red-500" : "text-white"
                      )}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <button
                      onClick={handleContactOpen}
                      className="text-5xl md:text-8xl font-techno uppercase text-green-500 hover:text-green-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-12 flex gap-8 text-white/40 text-sm tracking-widest font-light"
            >
              <span>INSTAGRAM</span>
              <span>YOUTUBE</span>
              <span>VIMEO</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactSheet
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

