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
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-6 justify-between w-full">
          {mainGardenData.map((item, index) => {
            // destructure item
            const { img, pretitle, title, link } = item;

            return (
              <Link to={link} key={index} className="bg-white dark:bg-grey group flex-1 w-full">
                {/* image */}
                <div className="h-[300px] w-full">
                  <img
                    src={img}
                    alt="сад и огород"
                    className="max-w-full h-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="px-2 py-4 flex flex-col gap-y-2">
                  <h3 className="pretitle">{pretitle}</h3>
                  <h2 className="subTitle articleHover group-hover:underline-offset-6 decoration-1">{title}</h2>
                </div>
              </Link>
            );
          })}

          {/* <div className="bg-gray-300 w-full h-[450px]">Article 1</div>
          <div className="bg-gray-300 w-full h-[450px]">Article 2</div>
          <div className="bg-gray-300 w-full h-[450px]">Article 3</div> */}
        </div>
      </div>
    </section>
  );
};

export default MainGarden;
