import React, { useEffect } from "react";

// import data
import { gardenArticles } from "../data/dataGarden";

// react-router
import { Link } from "react-router-dom";

// hash link
import { HashLink } from "react-router-hash-link";

const Garden = () => {
  // title of the document
  useEffect(() => {
    document.title = "Сад и огород || Mark Powell";
  }, []);

  return (
    <div className="flex flex-col mb-8 lg:mb-16">
      {/* page header */}
      <div className="h-[40vh] md:h-[90vh] lg:h-[40vh] xl:h-screen bg-garden bg-no-repeat bg-bottom bg-cover flex items-center justify-center pt-16">
        <h1 className="heroTitle text-center">Сад и огород</h1>
      </div>

      {/* articles */}
      <div className="wrapper">
        {/* article top */}
        <div className="flex items-center justify-center section md:pb-0 lg:pb-8">
          <h2 className="text-dark/80 text-sm lg:text-2xl xl:text-4xl dark:text-light">
            Секреты рекордных урожаев
          </h2>
        </div>

         {/* article body */}
         <div className="flex flex-col gap-y-6 md:flex-row md:items-start md:gap-x-4 lg:gap-x-6">
          {/* articles list */}
          <div className="flex flex-col gap-y-8 order-2 md:order-none md:flex-[65%] md:divide-y-[1px] divide-dark/20 dark:divide-light/20">
            {gardenArticles.map((item, index) => {
              // destructure item
              const { id, img, pretitle, title, tags, } = item;

              return (
                <Link
                  to={`/garden/${id}`}
                  id={id}
                  key={index}
                  className="flex flex-col gap-y-4 md:flex-row md:gap-x-2 lg:gap-x-4 xl:gap-x-8 group md:pt-8"
                >
                  {/* image */}
                  <div className="md:flex-[35%] h-[200px] md:h-[100px] lg:h-[150px] xl:h-[200px]">
                    <img
                      src={img}
                      alt="интерьер"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* text */}
                  <div className="flex-[65%] flex flex-col gap-y-2 lg:gap-y-4">
                    <h3 className="pretitle">{pretitle}</h3>
                    {/* title */}
                    <h2 className="title articleHover">{title}</h2>

                    {/* tags */}
                    <div className="flex gap-1 items-center flex-wrap">
                      {tags.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="tag"
                          >
                            {item.tag}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* sidebar */}
          <aside className="bg-secondary dark:bg-primary order-1 md:order-none md:flex-[35%] md:sticky top-16 md:mt-8 p-3 lg:p-6">
            <div className="flex flex-col gap-y-2">
              {gardenArticles.map((item, index) => {
                // destructure item
                const { id, title } = item;

                return (
                  <HashLink
                    to={`/garden#${id}`}
                    key={index}
                    className="sidebarTitle hover:underline hover:underline-offset-4 decoration-1"
                  >
                    {title}
                  </HashLink>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Garden;
