import React, { useState } from "react";

// react-router
import { useParams } from "react-router-dom";

// import data
import { gardenArticles } from "../dataGarden";

const GardenArticle = () => {
  // обработка id (useParams())
  const { id } = useParams();

  const article = gardenArticles.find((item) => {
    return item.id === id;
  });

  const { title, text } = article;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default GardenArticle;
