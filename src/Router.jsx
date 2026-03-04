import {
  createBrowserRouter,
} from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { CategoryPage } from "./pages/CategoryPage";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          title: "Swathy Deepak | Director of Photography",
          description:
            "Swathy Deepak is a Director of Photography and visual storyteller based in Mumbai, crafting cinematic narratives for films, fashion, and brands worldwide.",
          url: "/",
        },
      },
      {
        path: "/movies",
        element: <CategoryPage />,
        handle: {
          title: "Movies | Swathy Deepak",
          description:
            "Cinematography work for films and short films by Swathy Deepak — stories crafted for the big screen.",
          url: "/movies",
        },
      },
      {
        path: "/fashion",
        element: <CategoryPage />,
        handle: {
          title: "Fashion Films | Swathy Deepak",
          description:
            "Style-driven visual narratives and fashion film cinematography by Swathy Deepak.",
          url: "/fashion",
        },
      },
      {
        path: "/instagram",
        element: <CategoryPage />,
        handle: {
          title: "Instagram | Swathy Deepak",
          description:
            "Short-form social content and Instagram reels by Swathy Deepak — visual storytelling for social platforms.",
          url: "/instagram",
        },
      },
      {
        path: "/:category",
        element: <CategoryPage />,
        handle: {
          title: "Swathy Deepak",
          description:
            "Visual storytelling and cinematography by Swathy Deepak.",
          url: "/",
        },
      },
    ],
  },
]);
