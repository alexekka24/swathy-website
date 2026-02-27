import { Outlet, useLocation, useNavigation, useMatches } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import CinematicSvgBackground from "./CinematicSvgBackground";

export const AppLayout = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const matches = useMatches();

  useEffect(() => {
      const lastMatch = matches[matches.length - 1];
      const title = lastMatch?.handle?.title;
  
      if (title) document.title = title;
    }, [matches]);
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  {
    navigation.state === "loading" && (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
    );
  }

  return (
    <div className="min-h-screen">
      {/* <CinematicSvgBackground /> */}
      <Navbar />

      {/* 🔥 Animated Routes */}
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
