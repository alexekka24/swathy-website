import { useState, useEffect } from "react";
import { cn } from "../utils/utils";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ContactSheet } from "./ContactSheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Instagram", href: "/instagram" },
  { name: "Movies", href: "/movies" },
  { name: "Fashion", href: "/fashion" },
  { name: "Contact", action: "contact" }, // ✅ NO href
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
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 text-white h-20 flex items-center border-b border-white/10",
          isScrolled ? "backdrop-blur-md shdow-xs h-15 bg-black" : ""
        )}
      >
        <div className="container flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="text-white">Swathy Deepak</span>
            </span>
          </NavLink>

          {/* {DESKTOP NAV} */}
          <div className="hidden md:flex space-x-8 md:items-center">
            {navItems.map((item, key) =>
              item.href ? (
                <NavLink
                  key={key}
                  to={item.href}
                  className="text-white hover:scale-115 border-b border-b-transparent transition duration-300 hover:border-b hover:border-b-white cursor-pointer"
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  key={key}
                  onClick={handleContactOpen}
                  className="text-white duration-300 transition cursor-pointer rounded-3xl border px-3 py-1 border-transparent hover:border-white hover:bg-white/10 hover:scale-115"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* MOBILE NAV */}

          <button
            className="md:hidden p-2 text-white z-50 cursor-pointer rounded-full hover:bg-white/10 transition"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {" "}
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          <div
            className={cn(
              "fixed top-0 left-0 w-screen h-dvh bg-black z-4",
              "flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div
              className="flex flex-col space-y-8 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {navItems.map((item, key) =>
                item.href ? (
                  <NavLink
                    key={key}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-white/50 transition"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <button
                    key={key}
                    onClick={handleContactOpen}
                    className="text-green-700 hover:text-green cursor-pointer border border-green-700 rounded-3xl px-4 py-1 transition active:scale-95 active:bg-green-500 active:text-white"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Contact */}
      <ContactSheet
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};
