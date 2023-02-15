import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import data
import { mainEducationData } from "../data/data";

const MainEducation = () => {
  // destructure data
  const { img, pretitle, title, text, link } = mainEducationData;

  return (
    <section className="wrapper section">
      <Link
        to={link}
        className="bg-secondary dark:bg-primary md:h-[300px] lg:h-[400px] flex flex-col md:flex-row group"
      >
        {/* image */}
        <div className="md:flex-[60%] h-full">
          <img
            src={img}
            alt="самообразование"
            className="w-full object-cover h-full"
          />
        </div>

        {/* text */}
        <div className="md:flex-[40%] flex flex-col items-start justify-start gap-y-4 p-6">
          <h3 className="pretitle text-primary dark:text-secondary">
            {pretitle}
          </h3>

          <h2 className="title articleHover">{title}</h2>
          <p className="articleText">{text}</p>
        </div>
      </Link>
    </section>
  );
};

export default MainEducation;
