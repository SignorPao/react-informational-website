import React,{useEffect} from "react";

// import data
import { gardenArticles } from "../data/dataGarden";

// react-router
import { Link } from "react-router-dom";

const Garden = () => {
  useEffect(() => {
    document.title = 'Сад и огород || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-screen bg-teal-100 flex items-center justify-center">
        Garden header
      </div>

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
