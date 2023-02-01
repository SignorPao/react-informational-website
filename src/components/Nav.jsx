import React, { useState, useEffect } from "react";

// import data
import { navData } from "../data";

// react-router
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navState, isNavState] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? isNavState(true) : isNavState(false);
    });
  });

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        show ? "py-6 px-4" : "-top-[130px]"
      } fixed top-0 left-0 w-full z-50 ease-in duration-500 select-none ${
        navState ? "bg-white shadow-md" : "bg-none"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="font-primary text-lg font-bold">ЛОГО</div>

        {/* nav menu: mobile - hidden | desktop - show */}
        <ul className="hidden md:flex gap-x-4 font-light">
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
