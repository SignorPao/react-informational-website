import React, { useEffect } from "react";

// react-router
import { useParams } from "react-router-dom";

// import data
import { gardenArticles } from "../data/dataGarden";

const GardenArticle = () => {
  // обработка id (useParams())
  const { id } = useParams();

  const article = gardenArticles.find((item) => {
    return item.id === id;
  });

  const { img, title, tags, text } = article;

  // title of the document
  useEffect(() => {
    document.title = `${title}`;
  }, []);

  return (
    <article className="px-4 mx-auto md:px-0 md:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-y-6 pb-12 mt-16 bg-white dark:bg-grey">
    {/* image */}
    <div className="w-screen md:w-full h-[30vh] md:h-[60vh] lg:h-[30vh] xl:h-[60vh]">
      <img
        src={img}
        alt="интерьер"
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
            className="tag"
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
          <div key={index}>
            {(() => {
              switch (attribute) {
                case "title":
                  return (
                    <h2 className="px-4 text-center text-base lg:text-lg xl:text-2xl mt-4">{content}</h2>
                  );
                case "paragraph":
                  return <p>{content}</p>;
                case "list":
                  return (
                    <ul className="flex flex-col gap-y-1 -mt-2 xl:-mt-3">
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
                    <div className="w-full h-[30vh] mx-auto md:w-[50vw] lg:w-[40vw] xl:w-[30vw] md:h-[40vh] lg:h-[20vh] xl:h-[40vh] mt-6 -mb-2 lg:-mb-4">
                      <img
                        src={content}
                        alt="интерьер"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
              }
            })()}
          </div>
        );
      })}
    </div>
  </article>
  );
};

export default GardenArticle;
