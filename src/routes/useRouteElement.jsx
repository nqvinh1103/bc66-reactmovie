import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import ContactPage from "../pages/Contactpage/ContactPage";
import PricingPage from "../pages/PricingPage/PricingPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import UserLayout from "../layouts/UserLayout/UserLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import NotFound from "../pages/NotFound/NotFound";

const useRouteElement = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <UserLayout />,
      children: [
        {
          index: true,
          path: "",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },

    { path: "/movie/:id", element: <MovieDetailsPage /> },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [{ path: "/auth/login", element: <LoginPage /> }],
    },
    { path: '*', element: <NotFound/> },
  ]);

  return routes;
};

export default useRouteElement;
