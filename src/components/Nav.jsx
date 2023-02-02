import React, { useState, useEffect } from "react";

// import component
import NavMobile from "./NavMobile";

// import data
import { navData } from "../data";

// react-router
import { NavLink } from "react-router-dom";

// hash-link
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navState, isNavState] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

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

  return (
    <nav
      className={`${
        show ? "top-0 left-0" : "-top-16"
      } fixed h-16 w-full px-8 transition-all duration-500 z-50 select-none ${
        navState ? "bg-white shadow-md" : "bg-none"
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* logo */}
        <div className="font-primary text-lg font-bold">
          <HashLink to={"#up"}>ЛОГО</HashLink>
        </div>

        {/* menu & burger & dark/light mode */}
        <div className="flex gap-x-6 items-center">
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
      </div>
    </nav>
  );
};

export default Nav;
