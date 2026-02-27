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
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: "Swathy Deepak"},
      },
      {
        path: "/:category",
        element: <CategoryPage />,
        handle: { title: {}}
      },
    ],
  },
]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
