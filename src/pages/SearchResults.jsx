import React, { useContext, useState } from "react";

// react-router
import { Link } from "react-router-dom";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// import data
import { gardenArticles } from "../data/dataGarden";
import { interiorArticles } from "../data/dataInterior";
import { materialsArticles } from "../data/dataMaterials";

const SearchResults = () => {
  const [searchField, setSearchField] = useState("");

  // context
  const searchContext = useContext(SearchContext);
  const searchQueryHandler = () => {
    searchContext.searchHandler(searchField);
  };

  // all data combined
  const allArticles = [
    ...gardenArticles,
    ...interiorArticles,
    ...materialsArticles,
  ];

  // filtered data
  const filteredArticles = allArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchContext.query.toLowerCase()) ||
      article.tagString
        .toLowerCase()
        .includes(searchContext.query.toLowerCase())
    );
  });

  // handle search input
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center">
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
        <div className="flex flex-col gap-y-4 items-center">
          <div>
            Извините, но ничего не соответствует условиям вашего поиска.
            Пожалуйста, попытайтесь снова с другими ключевыми словами.
          </div>
          <div className="flex border p-2 w-[80vw] md:w-[30vw]">
            <input
              type="text"
              autoComplete="off"
              placeholder="Поиск..."
              className="w-full outline-none focus:ring-0"
              onChange={handleChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  document.getElementById("showResults").click();
                }
              }}
            />
            <button id="showResults" onClick={searchQueryHandler}>
              Поиск
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
