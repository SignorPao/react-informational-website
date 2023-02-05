import React from "react";

// import data
import { navData } from "../data/data";

// react-router
import { Link } from "react-router-dom";

const NavMobile = ({ click }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 bg-slate-600 text-white">
      {/* mobile search bar */}
      <div className="flex gap-x-0 text-dark">
        <input type="search" placeholder="Поиск..." className="py-2 px-3" />
        <Link
          to={"search"}
          onClick={click}
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
