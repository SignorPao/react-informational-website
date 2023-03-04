import React, { useState, useMemo, useContext } from "react";

// react-router
import { Link } from "react-router-dom";

// import lodash
import debounce from "lodash.debounce";

// icons
import { FiSearch } from "react-icons/fi";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// import data
import { gardenArticles } from "../data/dataGarden";
import { interiorArticles } from "../data/dataInterior";
import { materialsArticles } from "../data/dataMaterials";
import { plumbingArticles } from "../data/dataPlumbing";
import { countryHouseArticles } from "../data/dataCountryHouse";
import { educationArticles } from "../data/dataEducation";

const Search = ({ click }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  // all data combined
  const allArticles = [
    ...interiorArticles,
    ...gardenArticles,
    ...materialsArticles,
    ...plumbingArticles,
    ...countryHouseArticles,
    ...educationArticles,
  ];

  // context
  const searchContext = useContext(SearchContext);
  const searchQueryHandler = () => {
    searchContext.searchHandler(searchField);
  };

  // filtered data
  const filteredArticles = allArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchField.toLowerCase()) ||
      article.tagString.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // input checker & show results
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    if (e.target.value === "" || e.target.value === " ") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  // set delay to show results
  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 300),
    []
  );

  // render filtered results
  const searchList = () => {
    if (searchShow) {
      return (
        <div className="w-[80vw] xl:w-[55vw] grid grid-cols-2 gap-x-4 lg:gap-x-12 gap-y-3 lg:gap-y-8 justify-center items-start">
          {filteredArticles.slice(0, 6).map((article) => {
            return (
              <Link
                to={article.linkToArticle}
                onClick={click}
                key={article.id}
                className="flex gap-x-4 items-start group"
              >
                {/* image */}
                <div className="flex-[15%] xl:flex-[30%] h-[40px] xl:h-[80px]">
                  <img
                    src={article.img}
                    alt="article image"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* text */}
                <div className="flex-[70%] flex flex-col gap-y-2">
                  <div className="text-xs xl:text-sm group-hover:text-accent animation">
                    {article.title}
                  </div>
                  <div className="hidden lg:flex gap-1 flex-wrap">
                    {article.tags.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="tag"
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
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-light">
      {/* search input */}
      <div className="w-[80vw] xl:w-[55vw] flex justify-between border-b-[0.1px] border-secondary mb-6 lg:mb-10 pb-2 lg:pb-4">
        <input
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
          className="bg-transparent w-[90%] text-lg lg:text-2xl xl:text-3xl outline-none focus:ring-0 placeholder:text-light/60"
          onChange={debouncedChangeHandler}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("goToSearchResults").click();
            }
          }}
        />
        <Link
          to={"search"}
          id="goToSearchResults"
          onClick={() => {
            click();
            searchQueryHandler();
          }}
          className="bg-secondary w-8 lg:w-12 h-8 lg:h-12 flex items-center justify-center rounded-full"
        >
          <FiSearch className="text-base lg:text-xl" />
        </Link>
      </div>

      {/* show filtered results */}
      {searchList()}

      {/* if results more than 6 */}
      {searchShow && filteredArticles.length > 6 ? (
        <Link
          to={"search"}
          onClick={() => {
            click();
            searchQueryHandler();
          }}
          className="mt-4 lg:mt-8 text-xs lg:text-base hover:text-accent animation"
        >
          Показать все
        </Link>
      ) : null}
    </div>
  );
};

export default Search;
