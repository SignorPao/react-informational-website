import React, { useEffect } from "react";

// import data
import { gardenArticles } from "../data/dataGarden";

// react-router
import { Link } from "react-router-dom";

const Garden = () => {
  // title of the document
  useEffect(() => {
    document.title = "Сад и огород || Mark Powell";
  }, []);

  return (
    <div className="flex flex-col">
      {/* page header */}
      <div className="h-screen bg-teal-100 flex items-center justify-center">
        Garden header
      </div>

      {/* articles */}
      <div>
        <ul className="flex flex-col gap-y-6">
          {gardenArticles.map((item, index) => {
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
                <p>{text}</p>

                {/* link to full article */}
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
