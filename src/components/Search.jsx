import React from "react";

// react-router
import { Link } from "react-router-dom";

const Search = ({ click }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[50vw] flex gap-x-6 border-b-2 text-light">
        <input
          type="search"
          name=""
          id=""
          placeholder="Поиск..."
          className="bg-transparent w-full pb-4 text-2xl outline-none focus:ring-0"
        />
        <Link to={"search"} onClick={click}>
          Поиск
        </Link>
      </div>
    </div>
  );
};

export default Search;
