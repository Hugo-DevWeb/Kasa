/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import About from "./pages/About/About";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Accomodation from "./pages/Accomodation/Accomodation";




const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement/:id",
    element: <Accomodation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />
  }
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);