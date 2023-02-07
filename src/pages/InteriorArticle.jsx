import React from "react";

// react-router
import { useParams } from "react-router-dom";

// inport data
import { interiorArticles } from "../data/dataInterior";

const InteriorArticle = () => {
  // обработка id (useParams())
  const { id } = useParams();

  const article = interiorArticles.find((item) => {
    return item.id === id;
  });

  const { title, tags, text } = article;

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

export default InteriorArticle;
