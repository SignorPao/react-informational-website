import React, { useEffect } from "react";

// import data
import { materialsArticles } from "../data/dataMaterials";

// react-router
import { Link } from "react-router-dom";

const Materials = () => {
  // title of the document
  useEffect(() => {
    document.title = "Стройматериалы || Mark Powell";
  }, []);

  return (
    <div className="flex flex-col">
      {/* page header */}
      <div className="h-screen bg-gray-400 flex items-center justify-center">
        <h1 className="heroTitle text-center">Строительные материалы</h1>
      </div>

      {/* articles */}
      <div className="wrapper">
        {/* article top */}
        <div className="flex items-center justify-center section">
          <h2 className="text-dark/80 text-sm lg:text-2xl xl:text-4xl dark:text-light">
            Делаем интерьер правильно
          </h2>
        </div>

        {/* article body */}
        <div className="flex flex-col gap-y-6 md:flex-row md:items-start md:gap-x-4 lg:gap-x-6 h-[2000px]">
          {/* articles list */}
          <ul className="flex flex-col gap-y-6 order-2 md:order-none md:flex-[65%]">
            {materialsArticles.map((item, index) => {
              // destructure item
              const { id, title, tags, text, link } = item;

              return (
                <li key={index}>
                  {/* title */}
                  <h3>{title}</h3>

                  {/* tags */}
                  <div className="flex gap-x-2">
                    {tags.map((item, index) => {
                      return <div key={index}>{item.tag}</div>;
                    })}
                  </div>

                  {/* text */}
                  {/* <p>{text}</p> */}

                  {/* link to full article */}
                  <Link to={`/materials/${id}`}>{link}</Link>
                </li>
              );
            })}
          </ul>

          {/* sidebar */}
          <aside className="bg-secondary dark:bg-primary order-1 md:order-none md:flex-[35%] md:sticky top-16 h-[300px]">
            sidebar
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Materials;
