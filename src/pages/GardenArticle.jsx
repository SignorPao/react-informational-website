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

  const { title, tags, text } = article;

  // title of the document
  useEffect(() => {
    document.title = `${title} || Mark Powell`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2>{title}</h2>
      <ul className="flex gap-x-2">
        {tags.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer hover:underline">
              {item.tag}
            </li>
          );
        })}
      </ul>
      <p>{text}</p>
    </div>
  );
};

export default GardenArticle;
