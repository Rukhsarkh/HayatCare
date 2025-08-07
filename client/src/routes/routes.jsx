import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Layout from "@/routes/layouts/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <div className="mt-20">This is onboarding page</div>,
      },
    ],
  },
]);
