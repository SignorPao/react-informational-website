import React from "react";

// react-router
import { Link } from "react-router-dom";

const Button = ({ link, text, bg }) => {
  return (
    <Link
      to={link}
      className={`relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-normal text-dark transition-all duration-300 ease-in-out rounded hover:pl-10 hover:pr-6 bg-${bg} group`}
    >
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-primary group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-300 ease-out group-hover:translate-x-12">
        <svg
          className="w-5 h-5 text-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-300">
        <svg
          className="w-5 h-5 text-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-light text-sm lg:text-lg xl:text-xl">
        {text}
      </span>
    </Link>
  );
};

export default Button;
