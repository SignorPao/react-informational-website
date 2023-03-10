import React, { createContext, useState } from "react";

// create context
export const SearchContext = createContext();

// HOC component
const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  const searchHandler = (query) => {
    setQuery(query);
  };

  return (
    <SearchContext.Provider
      value={{ query: query, searchHandler: searchHandler }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
