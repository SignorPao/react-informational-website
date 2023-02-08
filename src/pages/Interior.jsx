import React, { useEffect, useContext } from "react";

// import data
import { interiorArticles } from "../data/dataInterior";

// react-router
import { Link } from "react-router-dom";

// import search context
// import { SearchContext } from "../contexts/SearchContext";

const Interior = () => {
  // title of the document
  useEffect(() => {
    document.title = "Интерьер || Mark Powell";
  }, []);

  // context: send tag to search results
  // const searchContext = useContext(SearchContext);
  // const searchQueryHandler = (tag) => {
  //   searchContext.searchHandler(tag);
  // };
  // let tagName;
  // const searchContext = useContext(SearchContext);
  // const searchQueryHandler = () => {
  //   searchContext.searchHandler(tagName);
  // };

  return (
    <div className="flex flex-col">
      {/* page header */}
      <div className="h-screen bg-pink-100 flex items-center justify-center">
        Interior header
      </div>

      {/* articles */}
      <div>
        <ul className="flex flex-col gap-y-6">
          {interiorArticles.map((item, index) => {
            // destructure item
            const { id, title, tags, text, link } = item;

            return (
              <li key={index}>
                {/* title */}
                <h3>{title}</h3>

                {/* tags */}
                <div className="flex gap-x-2">
                  {tags.map((item, index) => {
                    return (
                      <div
                        // to={"/search"}
                        key={index}
                        // onClick={searchQueryHandler(item.tag)}
                        // onClick={console.log(item.tag)}
                      >
                        {item.tag}
                      </div>
                    );
                  })}
                </div>

                {/* text */}
                <p>{text}</p>

                {/* link to full article */}
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
