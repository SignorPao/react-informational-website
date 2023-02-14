import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import component
import MainMaterialsSidebar from "./MainMaterialsSidebar";

// import data
import { mainMaterialsData } from "../data/data";

const MainMaterials = () => {
  // destructure main interior data
  const { img, pretitle, title, text, link } = mainMaterialsData;

  return (
    <section className="bg-secondary dark:bg-primary">
      <div className="wrapper section flex flex-col gap-y-6 md:flex-row md:gap-x-4 lg:gap-x-6">
        {/* sidebar */}
        <div className="md:flex-[35%]">
          <MainMaterialsSidebar />
        </div>

        {/* main article */}
        <Link
          to={link}
          className="md:flex-[65%] group"
        >
          {/* image */}
          <img src={img} alt="стройматериалы" className="w-full object-cover" />

          {/* text */}
          <div className="px-2 py-4 flex flex-col gap-y-2">
            <h3 className="pretitle text-primary dark:text-secondary">{pretitle}</h3>
            <h2 className="title articleHover">{title}</h2>
            <p className="articleText">{text}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MainMaterials;
