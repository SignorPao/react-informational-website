import React, { useContext, useState } from "react";

// react-router
import { Link } from "react-router-dom";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// icons
import { FiSearch } from "react-icons/fi";

// import data
import { gardenArticles } from "../data/dataGarden";
import { interiorArticles } from "../data/dataInterior";
import { materialsArticles } from "../data/dataMaterials";
import { plumbingArticles } from "../data/dataPlumbing";
import { countryHouseArticles } from "../data/dataCountryHouse";
import { educationArticles } from "../data/dataEducation";

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
    ...plumbingArticles,
    ...countryHouseArticles,
    ...educationArticles,
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
    <div className="min-h-[40vh] md:min-h-[50vh] lg:min-h-[65vh] xl:min-h-[70vh] w-full flex flex-col gap-y-10 lg:gap-y-20 wrapper">
      {/* header */}
      <div className="pt-28 lg:pt-32">
        <div className="text-lg lg:text-2xl font-bold">
          Результаты поиска для:{" "}
          <span className="text-accent">{searchContext.query}</span>
        </div>
      </div>

      {/* search results */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 w-full h-fit mb-10 lg:mb-20">
          {filteredArticles.map((article) => {
            return (
              <Link
                to={article.linkToArticle}
                key={article.id}
                className="bg-white dark:bg-grey group"
              >
                {/* image */}
                <div className="h-[200px] lg:h-[250px] w-full">
                  <img
                    src={article.img}
                    alt="article image"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="px-2 py-4 flex flex-col gap-y-2">
                  {/* pretitle */}
                  <h3 className="pretitle">{article.pretitle}</h3>

                  {/* title */}
                  <div className="subTitle articleHover group-hover:underline-offset-6 decoration-1">
                    {article.title}
                  </div>

                  {/* tags */}
                  <div className="flex gap-1 flex-wrap">
                    {article.tags.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="text-primary/80 dark:text-primary bg-secondary/30 dark:bg-secondary/20 text-[10px] xl:text-xs px-2 py-1 rounded-sm"
                        >
                          {item.tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-y-8 lg:gap-y-16 items-center mb-10 lg:mb-20">
          {/* text */}
          <div className="lg:text-xl xl:text-2xl text-center text-dark/60 dark:text-light/60">
            Извините, но ничего не соответствует условиям вашего поиска.
            Пожалуйста, попытайтесь снова с другими ключевыми словами.
          </div>

          {/* input */}
          <div className="flex border-[1px] border-accent p-2 w-full md:w-[50vw]">
            <input
              type="text"
              autoComplete="off"
              placeholder="Поиск..."
              className="w-full bg-transparent text-lg lg:text-2xl xl:text-3xl outline-none focus:ring-0"
              onChange={handleChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  document.getElementById("showResults").click();
                }
              }}
            />
            <button id="showResults" onClick={searchQueryHandler}>
              <FiSearch className="text-base lg:text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
