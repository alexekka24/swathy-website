import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="relative bg-black pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-cursive text-primary">Swathy Deepak</h3>
            <p className="text-white/40 max-w-xs text-sm leading-relaxed">
              Capturing the soul of motion through light and lens. Available for
              global collaborations.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#EF4444" }}
                  className="text-white/40 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-techno text-sm uppercase tracking-[0.2em] text-white/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Movies", "Fashion", "Instagram"].map((link) => (
                <li key={link}>
                  <NavLink
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-white/60 hover:text-red-500 transition-colors text-sm"
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-techno text-sm uppercase tracking-[0.2em] text-white/50">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:swathydeepak@gmail.com"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-red-500" />
                <span className="text-sm">swathydeepak@gmail.com</span>
              </a>
              <p className="text-white/30 text-xs uppercase tracking-widest">
                Based in Mumbai · Working Worldwide
              </p>
            </div>
          </motion.div>

          {/* Follow */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-techno text-sm uppercase tracking-[0.2em] text-white/50">
              Follow Journey
            </h4>
            <p className="text-white/40 text-sm">
              Stay updated with the latest visual stories.
            </p>
            <button className="font-techno text-xs uppercase tracking-widest px-6 py-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              Connect
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} Swathy Deepak. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
            Built by{" "}
            <a
              href="https://alexekka.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-red-500 transition-colors"
            >
              Alex Ekka
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

