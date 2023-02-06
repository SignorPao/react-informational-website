import React, { useState, useMemo } from "react";

// react-router
import { Link } from "react-router-dom";

// import lodash
import debounce from "lodash.debounce";

// import data
import { gardenArticles } from "../data/dataGarden";

import SearchResults from "../pages/SearchResults";

const Search = ({ click }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  // filtered data
  const filteredArticles = gardenArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchField.toLowerCase()) ||
      article.tagString.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // input checker & show results
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  // set delay to show results
  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 1000),
    []
  );

  // render filtered results
  const searchList = () => {
    if (searchShow) {
      return (
        <div className="flex flex-col gap-y-4 justify-center items-start">
          {filteredArticles.map((article) => (
            <div key={article.id}>
              <div>{article.title}</div>
              <div className="flex gap-x-2">
                {article.tags.map((item, index) => {
                  return <div key={index}>{item.tag}</div>;
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-light">
      <div className="w-[50vw] flex gap-x-6 border-b-2 mb-40">
        <input
          type="text"
          autoComplete="off"
          name=""
          id=""
          placeholder="Поиск..."
          className="bg-transparent w-full pb-4 text-2xl outline-none focus:ring-0"
          // onChange={handleChange}
          onChange={debouncedChangeHandler}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("goToSearchResults").click();
            }
          }}
        />
        <Link to={"search"} id="goToSearchResults" onClick={click}>
          Поиск
        </Link>
      </div>

      {/* show filtered results */}
      {searchList()}

      {/* <SearchResults className="hidden" /> */}
    </div>
  );
};

export default Search;
