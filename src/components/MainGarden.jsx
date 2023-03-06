import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import data
import { mainGardenData } from "../data/data";

const MainGarden = () => {
  return (
    <section className="wrapper section">
      <div className="flex flex-col gap-y-6 xl:gap-y-10">
        <Link to={`${"garden"}`} className="sectionTitle dark:text-light">
          Статьи о садоводстве
        </Link>
        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4 lg:gap-x-6 justify-between w-full">
          {mainGardenData.map((item, index) => {
            // destructure item
            const { img, pretitle, title, link } = item;

            return (
              <Link to={link} key={index} className="bg-white dark:bg-grey group flex-1 w-full">
                {/* image */}
                <div className="h-[200px] lg:h-[300px] w-full">
                  <img
                    src={img}
                    alt="сад и огород"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="px-2 lg:px-5 py-4 lg:py-6 flex flex-col gap-y-2">
                  <h3 className="pretitle">{pretitle}</h3>
                  <h2 className="subTitle articleHover group-hover:underline-offset-6 decoration-1">{title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainGarden;
