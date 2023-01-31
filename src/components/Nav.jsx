import React from "react";

// import data
import { navData } from "../data";

// react-router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>ЛОГО</div>

        {/* nav menu: mobile - hidden | desktop - show */}
        <ul className="flex gap-x-4">
          {navData.map((item, index) => {
            // destructure item
            const { link, path } = item;

            return (
              <li key={index}>
                <Link to={`${path}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
