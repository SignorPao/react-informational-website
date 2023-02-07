import React, { useContext } from "react";

// import search context
import { SearchContext } from "../contexts/SearchContext";

// import data
import { gardenArticles } from "../data/dataGarden";

const SearchResults = () => {
  // context
  const searchContext = useContext(SearchContext);

  // filtered data
  const filteredArticles = gardenArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchContext.query) ||
      article.tagString.toLowerCase().includes(searchContext.query)
    );
  });

  console.log(filteredArticles);

  return (
    <div className="min-h-screen flex flex-col gap-y-6 items-center justify-center">
      {/* header */}
      <div>
        <div>Результаты поиска</div>
      </div>

      {/* search results */}
      <div className="flex flex-col gap-y-4 w-full h-fit justify-center items-center">
        {filteredArticles.map((article) => {
          return (
            <div key={article.id}>
              <div>{article.title}</div>
              <div className="flex gap-x-2">
                {article.tags.map((item, index) => {
                  return <div key={index}>{item.tag}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
