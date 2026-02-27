import { FaInstagram, FaYoutube, FaImdb } from "react-icons/fa";

export const NAVIGATION = {
  navItems: [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Movies",
      href: "/movies",
    },
    {
      id: 3,
      name: "Fashion",
      href: "/fashion",
    },
    {
      id: 4,
      name: "Instagram",
      href: "/instagram",
    },
    {
        id: 5,
        name: "Contact",
        href: "",
    }
  ],

  socials: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/",
        icon: FaYoutube,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
        icon: FaInstagram,
      },
      {
        name: "IMDb",
        url: "https://www.linkedin.com/company/",
        icon: FaImdb,
      },
    ],
};
