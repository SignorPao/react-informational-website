import React from "react";

// react router dom
import { Link } from "react-router-dom";

// import data
import { mainInteriorSidebarData } from "../data/data";

const MainInteriorSidebar = () => {
  return (
    <div className="p-4 w-full max-h-fit flex flex-col items-center justify-center">
      <h2 className="subTitle mb-4 xl:mb-8">Актуальные статьи</h2>

      {/* list */}
      <ul className="w-full flex flex-col gap-y-4 xl:gap-y-6">
        {mainInteriorSidebarData.map((item, index) => {
          // destructure item
          const { img, title, link } = item;

          return (
            <li key={index} className="w-full">
              <Link
                to={link}
                className="flex flex-row items-start gap-x-4 group"
              >
                <div className="max-w-[35%]">
                  <img
                    src={img}
                    alt="интерьер"
                    className="max-w-full object-cover"
                  />
                </div>
                <h3 className="sidebarTitle articleHover group-hover:underline-offset-4 decoration-1">
                  {title}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainInteriorSidebar;
