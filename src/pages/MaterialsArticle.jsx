import React, { useEffect } from "react";

// react-router
import { useParams } from "react-router-dom";

// inport data
import { materialsArticles } from "../data/dataMaterials";

const MaterialsArticle = () => {
  // обработка id (useParams())
  const { id } = useParams();

  const article = materialsArticles.find((item) => {
    return item.id === id;
  });

  const { img, title, tags, text } = article;

  // title of the document
  useEffect(() => {
    document.title = `${title} || Mark Powell`;
  }, []);

  return (
    <div className="px-4 mx-auto md:px-0 md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-y-6 pb-12 mt-16 bg-white dark:bg-grey">
      {/* image */}
      <div className="w-full h-[30vh] md:h-[60vh] lg:h-[30vh] xl:h-[60vh]">
        <img
          src={img}
          alt="строительные материалы"
          className="w-full h-full object-cover"
        />
      </div>

      {/* title */}
      <h2 className="px-4 text-center title">{title}</h2>

      {/* tags */}
      <ul className="flex gap-x-2 px-4 text-center">
        {tags.map((item, index) => {
          return (
            <li
              key={index}
              className="text-primary/80 dark:text-primary bg-secondary/30 dark:bg-secondary/10 text-[10px] xl:text-xs px-2 py-1 rounded-sm"
            >
              {item.tag}
            </li>
          );
        })}
      </ul>

      {/* article body */}
      <div className="flex flex-col gap-y-4 lg:gap-y-6 md:px-4 text-xs lg:text-sm xl:text-base">
        {text.map((item, index) => {
          // destructure item
          const { attribute, content } = item;

          return (
            <div key={index} className=''>
              {(() => {
                switch (attribute) {
                  case "title":
                    return <h2 className="text-2xl capitalize mt-4">{content}</h2>;
                  case "paragraph":
                    return <p>{content}</p>;
                  case "list":
                    return (
                      <ul className="flex flex-col gap-y-1">
                        {content.map((item, index) => {
                          return (
                            <li key={index} className="list-inside list-disc">
                              {item.item}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  case "image":
                    return (
                      <div className="w-full h-[30vh] mx-auto md:w-[50vw] lg:w-[40vw] xl:w-[30vw] md:h-[40vh] lg:h-[20vh] xl:h-[40vh] mt-6">
                        <img src={content} alt="строительные материалы" className="w-full h-full object-cover" />
                      </div>
                    );
                }
              })()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaterialsArticle;
