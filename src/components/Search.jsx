import React, { useState, useEffect } from "react";

// react-router
import { Link } from "react-router-dom";

// import data
import { gardenArticles } from "../data/dataGarden";

const Search = ({ click }) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  // const [delayedShow,setDelayedShow] = useState('')

  // destructure gardenArticles

  // console.log(gardenArticles);

  const filteredArticles = gardenArticles.filter((article) => {
    // return article.title.toLowerCase().includes(searchField.toLowerCase());
    return (
      article.title.toLowerCase().includes(searchField.toLowerCase()) ||
      article.tagString.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  // const filteredArticles = gardenArticles.reduce((r, { title, tags }) => {
  //   let o = tags.filter(({ tag }) =>
  //     tag.toLowerCase().includes(searchField.toLowerCase())
  //   );
  //   if (o && o.length) {
  //     r.push({ title, tags: [...o] });
  //   }
  //   return r;
  // }, []);

  // return article.title.toLowerCase().includes(searchField.toLowerCase());
  // article.tags.tag.toLowerCase().includes(searchField.toLowerCase())

  // console.log("filtered", filteredArticles);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const searchList = () => {
    if (searchShow) {
      return (
        <div className="flex flex-col gap-y-4 justify-center items-start">
          {filteredArticles.map((article) => (
            <div key={article.id}>
              <div>{article.title}</div>
              <div className="flex gap-x-2">
                {article.tags.map((item, index) => {
                  // const { tag, tagLink } = item;
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
          type="search"
          autoComplete="off"
          name=""
          id=""
          placeholder="Поиск..."
          className="bg-transparent w-full pb-4 text-2xl outline-none focus:ring-0"
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              document.getElementById("goToSearchResults").click();
            }
          }}
        />
        {/* <button id="goToSearchResults" className="pb-4" onClick={click}> */}
        <Link to={"search"} id="goToSearchResults" onClick={click}>
          Поиск
        </Link>
        {/* </button> */}
      </div>
      {searchList()}
    </div>
  );
};

export default Search;
