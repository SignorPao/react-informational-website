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

// icons
import { FiSearch } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

const Nav = () => {
  // all nav states
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // search state
  const [searchBar, setSearchBar] = useState(false);

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
      } fixed h-16 w-full px-2 lg:px-8 transition-all duration-300 z-50 select-none bg-secondary dark:bg-primary dark:text-light shadow-md dark:shadow-none`}
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* logo */}
        <div className="order-2 z-50 md:z-auto text-dark dark:text-light md:order-none font-primary text-lg font-bold text-center lg:text-left">
          <HashLink to={"#up"} className="flex flex-col gap-y-[1px]">
            <span className="text-accent">Хочу всё Знать</span>
            <span className="text-[8px] leading-none text-center lg:text-left lg:text-xs italic font-normal">
              Информационный блог
            </span>
          </HashLink>
        </div>

        {/* menu & burger & navMobile */}
        <div className="order-3 md:order-none h-full flex gap-x-6 items-center">
          {/* nav menu: mobile - hidden | desktop - show */}
          <ul className="hidden h-full md:flex gap-x-2 lg:gap-x-4 xl:font-medium text-[10px] xl:text-lg">
            {navData.map((item, index) => {
              // destructure item
              const { link, path } = item;

              return (
                <li key={index}>
                  <NavLink
                    to={`${path}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-light h-full flex items-center border-b-[4px] border-b-light"
                        : "text-dark/70 dark:text-light/70 hover:text-light dark:hover:text-light animation h-full flex items-center border-b-[4px] border-transparent"
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
            className="md:hidden z-50 text-3xl"
            onClick={() => setNavMobile((prev) => !prev)}
          >
            {navMobile ? <IoClose /> : <IoMenu />}
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
        <div className="flex items-center justify-center gap-x-2 xl:gap-x-8">
          {/* dark/light mode */}
          <div className="order-1 md:order-none z-50 md:z-auto">
            <Switcher />
          </div>

          {/* search button */}
          <div
            className={`hidden md:flex z-50 ${searchBar ? "text-light" : ""}`}
          >
            <button onClick={() => setSearchBar((prev) => !prev)}>
              {searchBar ? (
                <IoClose className="text-2xl" />
              ) : (
                <FiSearch className="text-xl" />
              )}
            </button>
          </div>

          {/* search component */}
          <div
            className={`${
              searchBar ? "hidden md:flex" : "hidden"
            } fixed top-0 left-0 bottom-0 right-0 z-10 bg-dark/95`}
          >
            <Search click={() => setSearchBar(!searchBar)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
