import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Layout from "@/routes/layouts/layout";
import PageNotFound from "@/pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
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
