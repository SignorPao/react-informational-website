import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import components
import Root from "./components/Root";

// import pages
import NotFoundPage from "./pages/NotFoundPage";
import Main from "./pages/Main";
import Interior from "./pages/Interior";
import Garden from "./pages/Garden";
import Materials from "./pages/Materials";
import Plumbing from "./pages/Plumbing";
import CountryHouse from "./pages/CountryHouse";
import Education from "./pages/Education";
import GardenArticle from "./pages/GardenArticle";

// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "interior",
        element: <Interior />,
      },
      {
        path: "garden",
        element: <Garden />,
      },
      {
        path: "garden/:id",
        element: <GardenArticle />,
      },
      {
        path: "materials",
        element: <Materials />,
      },
      {
        path: "plumbing",
        element: <Plumbing />,
      },
      {
        path: "country",
        element: <CountryHouse />,
      },
      {
        path: "education",
        element: <Education />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
