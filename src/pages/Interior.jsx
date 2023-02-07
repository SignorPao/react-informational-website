import React, { useEffect } from "react";

// import data
import {interiorArticles} from "../data/dataInterior";

// react-router
import { Link } from "react-router-dom";

const Interior = () => {
  useEffect(() => {
    document.title = "Интерьер || Mark Powell";
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-screen bg-pink-100 flex items-center justify-center">
        Interior header
      </div>

      {/* articles */}
      <div>
        <ul className="flex flex-col gap-y-6">
          {interiorArticles.map((item, index) => {
            // destructure item
            const { id, title, text, link } = item;

            return (
              <li key={index}>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={`/interior/${id}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Interior;
