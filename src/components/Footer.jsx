import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socials = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const navLinks = ["Home", "Movies", "Fashion", "Instagram"];

  return (
    <footer className="relative bg-black pt-20 pb-10 px-6 overflow-hidden">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      {/* Background grain */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-10" />

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Big name / brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 text-center"
        >
          <h2 className="font-rose text-[clamp(3rem,10vw,7rem)] text-white/90 leading-none tracking-tight">
            Swathy{" "}
            <span className="text-red-500">Deepak</span>
          </h2>
          <p className="mt-3 font-techno text-xs tracking-[0.3em] text-white/30 uppercase">
            Director of Photography · Visual Storyteller
          </p>
        </motion.div>

        {/* Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/5"
        >
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="font-techno text-xs uppercase tracking-[0.25em] text-white/40">
              About
            </h4>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Capturing the soul of motion through light and lens. Available for
              global collaborations.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <MapPin size={12} className="text-red-500/70" />
              <span className="uppercase tracking-widest">Mumbai · Worldwide</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="font-techno text-xs uppercase tracking-[0.25em] text-white/40">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <NavLink
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="group flex items-center gap-2 text-white/50 hover:text-red-400 transition-colors text-sm"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-red-500 group-hover:w-6 transition-all duration-300" />
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="font-techno text-xs uppercase tracking-[0.25em] text-white/40">
              Get in Touch
            </h4>
            <a
              href="mailto:swathydeepak@gmail.com"
              className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-red-500/50 transition-colors">
                <Mail size={14} className="text-red-500" />
              </span>
              <span className="text-sm">swathydeepak@gmail.com</span>
            </a>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:border-red-500/50 hover:text-red-400 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col md:flex-row justify-between items-center gap-3"
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
