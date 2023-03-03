import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import data
import { mainCountryHouseData } from "../data/data";

const MainCountryHouse = () => {
  // destructure data
  const { img, pretitle, title, text, link } = mainCountryHouseData;

  return (
    <section className="md:bg-mainCountryHouse bg-no-repeat bg-center bg-cover md:h-[300px] lg:h-[500px]">
      <Link to={link}>
        <img src={img} alt="дача" className="md:hidden" />
      </Link>

      <div className="wrapper section h-full flex items-center justify-start">
        <Link
          to={link}
          className="md:p-6 flex flex-col gap-y-4 md:bg-secondary md:dark:bg-primary md:w-[350px] group max-h-fit"
        >
          <h3 className="pretitle text-primary dark:text-secondary">
            {pretitle}
          </h3>

          <h2 className="title articleHover">{title}</h2>

          <p className="articleText text-dark/70 dark:text-light/70">{text}</p>
        </Link>
      </div>
    </section>
  );
};

export default MainCountryHouse;
