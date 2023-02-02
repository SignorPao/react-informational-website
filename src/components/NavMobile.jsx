import React from "react";

// import data
import { navData } from "../data";

// react-router
import { Link } from "react-router-dom";

const NavMobile = ({ click }) => {
  return (
    <div className="w-full h-full bg-slate-600 text-white">
      <ul className="h-full flex flex-col justify-center items-center gap-y-10 text-2xl">
        {navData.map((item, index) => {
          // destructure item
          const { link, path } = item;

          return (
            <li key={index}>
              <Link to={`${path}`} onClick={click}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
