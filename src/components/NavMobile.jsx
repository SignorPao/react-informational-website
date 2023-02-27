import React, { useContext, useState } from "react";

// import data
import { navData } from "../data/data";

// react-router
import { Link } from "react-router-dom";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// icons
import { FiSearch } from "react-icons/fi";

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
    <div className="w-screen h-full flex flex-col items-center justify-center gap-y-10 bg-secondary dark:bg-primary text-light p-4 overflow-y-scroll">
      {/* mobile search bar */}
      <div className="flex items-center justify-between bg-light text-dark w-full">
        <input
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
          className="py-2 px-3 bg-transparent outline-none focus:ring-0 w-[80%] text-lg"
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
          className="text-dark flex items-center justify-center px-3"
        >
          <FiSearch className="text-xl" />
        </Link>
      </div>

      {/* mobile menu */}
      <ul className="flex flex-col justify-center items-start gap-y-5 text-lg">
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
