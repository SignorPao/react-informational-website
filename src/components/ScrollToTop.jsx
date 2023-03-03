import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

import { classNames } from "../utils/classNames";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "hidden bg-accent/70 hover:bg-accent focus:ring-accent lg:inline-flex items-center rounded-full p-3 text-light dark:hover:text-dark shadow-md transition-opacity duration-300 focus:outline-none"
        )}
      >
        <BiArrowToTop className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
