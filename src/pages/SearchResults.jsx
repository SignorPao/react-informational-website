import React, { useContext } from "react";

// react-router
import { Link } from "react-router-dom";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// import data
import { gardenArticles } from "../data/dataGarden";
import { interiorArticles } from "../data/dataInterior";

const SearchResults = () => {
  // context
  const searchContext = useContext(SearchContext);

  console.log("query:", searchContext.query);

  // all data combined
  const allArticles = [...gardenArticles, ...interiorArticles];

  // filtered data
  const filteredArticles = allArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchContext.query.toLowerCase()) ||
      article.tagString
        .toLowerCase()
        .includes(searchContext.query.toLowerCase())
    );
  });

  // console.log(filteredArticles);

  return (
    <div className="min-h-screen pt-28 flex flex-col gap-y-10 items-center justify-center">
      {/* header */}
      <div>
        <div>Результаты поиска для: {searchContext.query}</div>
      </div>

      {/* search results */}
      {filteredArticles.length > 0 ? (
        <div className="flex flex-col gap-y-10 w-full h-fit justify-center items-center">
          {filteredArticles.map((article) => {
            return (
              <div key={article.id}>
                <div>{article.title}</div>
                <div className="flex gap-x-2">
                  {article.tags.map((item, index) => {
                    return <div key={index}>{item.tag}</div>;
                  })}
                </div>
                <Link to={article.linkToArticle}>{article.link}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Нет совпадений</div>
      )}

      {/* <div className="flex flex-col gap-y-10 w-full h-fit justify-center items-center">
        {filteredArticles.map((article) => {
          return (
            <div key={article.id}>
              <div>{article.title}</div>
              <div className="flex gap-x-2">
                {article.tags.map((item, index) => {
                  return <div key={index}>{item.tag}</div>;
                })}
              </div>
              <Link to={article.linkToArticle}>{article.link}</Link>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default SearchResults;
