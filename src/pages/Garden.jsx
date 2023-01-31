import React from "react";

// import data
import { gardenArticles } from "../dataGarden";

// react-router
import { Link } from "react-router-dom";

const Garden = () => {
  return (
    <div>
      <h1>GARDEN</h1>

      {/* articles */}
      <div>
        <ul className="flex flex-col gap-y-6">
          {gardenArticles.map((item, index) => {
            // destructure item
            const { id, title, text, link } = item;

            return (
              <li key={index}>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={`/garden/${id}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Garden;
