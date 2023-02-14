import React, { useEffect } from "react";

// import components
import Header from "../components/Header";
import MainInterior from "../components/MainInterior";
import MainGarden from "../components/MainGarden";
import MainMaterials from "../components/MainMaterials";
import MainPlumbing from "../components/MainPlumbing";
import MainCountryHouse from "../components/MainCountryHouse";
import MainEducation from "../components/MainEducation";
import MainContact from "../components/MainContact";

const Main = () => {
  // title of the document
  useEffect(() => {
    document.title = "Главная || Mark Powell";
  }, []);

  return (
    <>
      <Header />
      <MainInterior />
      <MainGarden />
      <MainMaterials />
      <MainPlumbing />
      <MainCountryHouse />
      <MainEducation />
      <MainContact />
    </>
  );
};

export default Main;
