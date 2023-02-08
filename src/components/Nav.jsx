import React, { useState, useEffect } from "react";

// import components
import NavMobile from "./NavMobile";
import Switcher from "./Swicher";
import Search from "./Search";

// import data
import { navData } from "../data/data";

// react-router
import { NavLink } from "react-router-dom";

// hash-link
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  // all nav states
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navState, isNavState] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // search state
  const [searchBar, setSearchBar] = useState(false);

  // scroll event (remove nav bg on the top)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? isNavState(true) : isNavState(false);
    });
  });

  // scroll event (scroll down - hide nav / scroll up - show nav)
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

  // scroll event (scroll down - hide nav / scroll up - show nav)
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    if (navMobile) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
    return;
  }, [navMobile]);

  /* lock body scroll when search bar is open */
  useEffect(() => {
    if (searchBar) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
    return;
  }, [searchBar]);

  return (
    <nav
      className={`${
        show ? "top-0 left-0" : "-top-16"
      } fixed h-16 w-full px-8 transition-all duration-500 z-50 select-none ${
        navState
          ? "bg-light dark:bg-dark dark:text-light shadow-md dark:shadow-none"
          : "bg-none dark:bg-dark dark:text-light"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* logo */}
        <div className="order-2 z-50 md:order-none font-primary text-lg font-bold">
          <HashLink to={"#up"}>ЛОГО</HashLink>
        </div>

        {/* menu & burger & navMobile */}
        <div className="order-3 md:order-none flex gap-x-6 items-center">
          {/* nav menu: mobile - hidden | desktop - show */}
          <ul className="hidden md:flex gap-x-2 lg:gap-x-4 font-light text-xs lg:text-base">
            {navData.map((item, index) => {
              // destructure item
              const { link, path } = item;

              return (
                <li key={index}>
                  <NavLink
                    to={`${path}`}
                    className={({ isActive }) =>
                      isActive ? "underline font-medium" : "hover:underline"
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* burger icon: mobile - show | desktop - hidden */}
          <button
            className="md:hidden z-50 w-12 h-8 bg-slate-300"
            onClick={() => setNavMobile((prev) => !prev)}
          >
            {navMobile ? "close" : "open"}
          </button>

          {/* nav mobile: mobile - toggle(show/hidden) | desktop - hidden */}
          <div
            className={`${
              navMobile ? "right-0" : "-right-full"
            } fixed top-0 bottom-0 w-screen transition-all z-10 md:hidden`}
          >
            <NavMobile click={() => setNavMobile(!navMobile)} />
          </div>
        </div>

        {/* dark/light & search */}
        <div className="flex items-center justify-center gap-x-4">
          {/* dark/light mode */}
          <div className="order-1 md:order-none z-50">
            <Switcher />
          </div>

          {/* search button */}
          <div
            className={`hidden md:flex z-50 ${searchBar ? "text-light" : ""}`}
          >
            <button onClick={() => setSearchBar((prev) => !prev)}>
              {searchBar ? "close" : "search"}
            </button>
          </div>

          {/* search component */}
          <div
            className={`${
              searchBar ? "hidden md:flex" : "hidden"
            } fixed top-0 left-0 bottom-0 right-0 z-10 bg-dark/90`}
          >
            <Search click={() => setSearchBar(!searchBar)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
