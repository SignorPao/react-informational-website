import React from "react";

// import link
import { Link } from "react-router-dom";

// hash-link
import { HashLink } from "react-router-hash-link";

// mobile accordion
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

// import data
import { footerData } from "../data/data";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  // destructure footer datra
  const { logo, description, footerLinks } = footerData;

  return (
    <div className="text-dark dark:text-light bg-secondary dark:bg-primary section">
      <div className="wrapper">
        {/* footer top */}
        <div className="border-b-[0.1px] border-dark/30 dark:border-light/30 py-8 flex flex-col md:flex-row md:gap-x-10 xl:gap-x-16 lg:justify-between">
          {/* logo & description */}
          <div className="md:flex-[30%] flex flex-col gap-y-4">
            {/* logo */}
            <div className="text-dark dark:text-white font-primary text-lg font-bold uppercase">
              <HashLink to={"#up"}>{logo}</HashLink>
            </div>

            {/* description */}
            <p className="text-xs lg:text-sm text-dark/70 dark:text-light/70">
              {description}
            </p>
          </div>

          {/* mobile accordion: mobile - show | desctop - hidden */}
          <div className="pt-10 flex flex-col md:hidden">
            <Accordion
              transition={{
                duration: "300ms",
                timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
              }}
              className="flex flex-col gap-y-4"
            >
              {footerLinks.map((item, index) => {
                // destructure item
                const { mainLink, mainPath, subLinks } = item;

                return (
                  <AccordionItem key={index}>
                    {({ open }) => (
                      <>
                        <AccordionHeader className="w-full flex justify-between items-center">
                          <Link to={`${mainPath}`}>{mainLink}</Link>
                          <svg
                            className={`w-5 h-5 ${!open ? "" : "rotate-90"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </AccordionHeader>

                        <AccordionBody className="flex flex-col gap-y-2">
                          {subLinks.map((item, index) => {
                            // destructure sub link
                            const { link, path } = item;

                            return (
                              <div key={index}>
                                <Link
                                  to={`${path}`}
                                  className="text-dark/70 dark:text-light/70"
                                >
                                  {link}
                                </Link>
                              </div>
                            );
                          })}
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* links */}
          <div className="md:flex-[60%] md:grid gap-x-6 gap-y-3 md:grid-cols-3">
            {footerLinks.map((item, index) => {
              // destructure item
              const { mainLink, mainPath, subLinks } = item;

              return (
                <div key={index} className="hidden md:flex flex-col gap-y-2">
                  {/* page link */}
                  <Link
                    to={`${mainPath}`}
                    className="footerLink text-xs lg:text-sm"
                  >
                    {mainLink}
                  </Link>

                  {/* articles links */}
                  <ul className="flex flex-col gap-y-2">
                    {subLinks.map((item, index) => {
                      // destructure sub link
                      const { link, path } = item;

                      return (
                        <li
                          key={index}
                          className="text-[10px] lg:text-xs text-dark/70 dark:text-light/70 footerLink"
                        >
                          <Link to={`${path}`}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex justify-between py-4 text-[10px] lg:text-xs text-dark/70 dark:text-light/70">
          <div>
            &copy; {year} {logo}
          </div>
          <div>
            Создал{" "}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              @signorPao
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
