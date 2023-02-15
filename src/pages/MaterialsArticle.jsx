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
    <div className="wrapper lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-y-6 pb-12">
      {/* image */}
      <div>
        <img src={img} alt="строительные материалы" />
      </div>

      {/* title */}
      <h2>{title}</h2>

      {/* tags */}
      <ul className="flex gap-x-2">
        {tags.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer hover:underline">
              {item.tag}
            </li>
          );
        })}
      </ul>
      {/* <p>{text}</p> */}

      {/* article body */}
      <div className="flex flex-col gap-y-4">
        {text.map((item, index) => {
          // destructure item
          const { attribute, content } = item;

          return (
            <div key={index}>
              {(() => {
                switch (attribute) {
                  case "title":
                    return <h2 className="text-2xl capitalize">{content}</h2>;
                  case "paragraph":
                    return <p>{content}</p>;
                  case "list":
                    return (
                      <ul className="flex flex-col gap-y-1">
                        {content.map((item, index) => {
                          return <li key={index} className='list-inside list-disc'>{item.item}</li>;
                        })}
                      </ul>
                    );
                  case "image":
                    return <img src={content} alt="строительные материалы" />;
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
