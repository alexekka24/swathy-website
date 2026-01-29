import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import {CategoryPage} from "./pages/CategoryPage";
import { Home } from "./pages/Home";

{navigation.state === "loading" && (
  <div className="fixed top-0 left-0 w-full h-1 bg-accent animate-pulse z-50" />
)}


export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:category",
        element: <CategoryPage />,
      },
    ],
  },
]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
