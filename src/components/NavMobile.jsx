import React, { useContext, useState } from "react";

// import data
import { navData } from "../data/data";

// react-router
import { Link } from "react-router-dom";

// import search context
import { SearchContext } from "../contexts/SearchContext";

const NavMobile = ({ click }) => {
  const [searchField, setSearchField] = useState("");

  // context
  const searchContext = useContext(SearchContext);
  const searchQueryHandler = () => {
    searchContext.searchHandler(searchField);
  };

  // handle search input
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 bg-slate-600 text-white">
      {/* mobile search bar */}
      <div className="flex gap-x-0 text-dark">
        <input
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
          className="py-2 px-3 outline-none focus:ring-0"
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("goToSearchPage").click();
            }
          }}
        />
        <Link
          id="goToSearchPage"
          to={"search"}
          onClick={() => {
            click();
            searchQueryHandler();
          }}
          className="bg-dark text-light flex items-center justify-center px-3"
        >
          Поиск
        </Link>
      </div>

      {/* mobile menu */}
      <ul className="flex flex-col justify-center items-center gap-y-10 text-2xl">
        {navData.map((item, index) => {
          // destructure item
          const { link, path } = item;

          return (
            <li key={index}>
              <Link to={`${path}`} onClick={click}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
