import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import components
import Root from "./components/Root";

// import pages
import NotFoundPage from "./pages/NotFoundPage";
import Main from "./pages/Main";
import SearchResults from "./pages/SearchResults";
import Interior from "./pages/Interior";
import Garden from "./pages/Garden";
import Materials from "./pages/Materials";
import Plumbing from "./pages/Plumbing";
import CountryHouse from "./pages/CountryHouse";
import Education from "./pages/Education";
import GardenArticle from "./pages/GardenArticle";
import InteriorArticle from "./pages/InteriorArticle";
import MaterialsArticle from "./pages/MaterialsArticle";
import PlumbingArticle from "./pages/PlumbingArticle";
import CountryHouseArticle from "./pages/CountryHouseArticle";
import EducationArticle from "./pages/EducationArticle";

// import search context provider
import SearchContextProvider from "./contexts/SearchContext";

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
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "interior",
        element: <Interior />,
      },
      {
        path: "interior/:id",
        element: <InteriorArticle />,
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
        path: "materials/:id",
        element: <MaterialsArticle />,
      },
      {
        path: "plumbing",
        element: <Plumbing />,
      },
      {
        path: "plumbing/:id",
        element: <PlumbingArticle />,
      },
      {
        path: "country",
        element: <CountryHouse />,
      },
      {
        path: "country/:id",
        element: <CountryHouseArticle />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "education/:id",
        element: <EducationArticle />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </React.StrictMode>
);
