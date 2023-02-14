import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import component
import MainInteriorSidebar from "./MainInteriorSidebar";

// import data
import { mainInteriorData } from "../data/data";

const MainInterior = () => {
  // destructure main interior data
  const { img, pretitle, title, text, link } = mainInteriorData;

  return (
    <section className="wrapper section">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:items-start lg:gap-x-8">
        {/* main article */}
        <Link
          to={link}
          className="bg-white dark:bg-grey group order-2 lg:order-none lg:flex-[65%]"
        >
          {/* image */}
          <img
            src={img}
            alt="интерьер"
            className="w-full object-cover"
          />

          {/* text */}
          <div className="px-2 py-4 flex flex-col gap-y-2">
            <h3 className="pretitle">{pretitle}</h3>
            <h2 className="title articleHover">{title}</h2>
            <p className="articleText">{text}</p>
          </div>
        </Link>

        {/* sidebar */}
        <aside className="bg-secondary dark:bg-primary order-1 lg:order-none lg:flex-[35%]">
          <MainInteriorSidebar />
        </aside>
      </div>
    </section>
  );
};

export default MainInterior;
