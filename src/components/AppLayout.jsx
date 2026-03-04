import { Outlet, useLocation, useNavigation, useMatches } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import { useSEO } from "../utils/useSEO";

// JSON-LD Structured Data — Person schema for Swathy Deepak
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swathy Deepak",
  jobTitle: "Director of Photography",
  url: "https://swathydeepak.com",
  sameAs: [
    "https://www.instagram.com/swathydeepak",
    "https://www.youtube.com/@swathydeepak",
    "https://www.linkedin.com/in/swathydeepak",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Cinematography",
    "Director of Photography",
    "Fashion Film",
    "Brand Film",
    "Short Films",
    "Visual Storytelling",
  ],
};

export const AppLayout = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const matches = useMatches();

  // Get SEO data from current route handle
  const lastMatch = matches[matches.length - 1];
  const handle = lastMatch?.handle ?? {};

  useSEO({
    title: handle.title,
    description: handle.description,
    url: handle.url || location.pathname,
    ogImage: handle.ogImage,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};
