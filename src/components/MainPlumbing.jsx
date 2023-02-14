import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import data
import { mainPlumbingData } from "../data/data";

const MainPlumbing = () => {
  return (
    <section className="wrapper section">
      <div className="flex flex-col gap-y-6 xl:gap-y-10">
        <Link to={`${"plumbing"}`} className="sectionTitle dark:text-light">
          Сантехника
        </Link>
        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4 lg:gap-x-6 justify-between w-full">
          {mainPlumbingData.map((item, index) => {
            // destructure item
            const { img, pretitle, title, link } = item;

            return (
              <Link
                to={link}
                key={index}
                className="bg-white dark:bg-grey group flex-1 w-full"
              >
                {/* image */}
                <div className="h-[200px] lg:h-[300px] w-full">
                  <img
                    src={img}
                    alt="сантехника"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="px-2 py-4 flex flex-col gap-y-2">
                  <h3 className="pretitle">{pretitle}</h3>
                  <h2 className="subTitle articleHover group-hover:underline-offset-6 decoration-1">
                    {title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainPlumbing;
