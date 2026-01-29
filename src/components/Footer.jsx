import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t-2 border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="md:flex-col items-center justify-center">
          <h3 className="text-xl font-semibold tracking-wide">Swathy Deepak</h3>
          <p className="mt-3 text-sm text-white/70 max-w-xs ">
            Crafting visual stories across film, fashion, and digital culture.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/60">
            Navigation
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-red-600">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/fashion" className="hover:text-red-600">
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/instagram" className="hover:text-red-600">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-white/60">
            Follow
          </h4>
          <div className="mt-4 flex space-x-5">
            <a href="#" className="hover:text-red-600" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-600" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-red-600" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Swathy Deepak. All rights reserved.
        <br />
        Built by Alex Ekka
      </div>
    </footer>
  );
};
