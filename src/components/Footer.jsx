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
    <div className="text-white bg-primary section">
      <div className="wrapper">
        {/* footer top */}
        <div className="border-b py-8 flex flex-col lg:flex-row lg:justify-between">

          {/* logo & description */}
          <div className="lg:flex-[30%] flex flex-col gap-y-4">
            {/* logo */}
            <div className="text-accent font-primary text-lg font-bold uppercase">
              <HashLink to={"#up"}>{logo}</HashLink>
            </div>

            {/* description */}
            <p>{description}</p>
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
                                <Link to={`${path}`}>{link}</Link>
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
          <div className="lg:flex-[60%] grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((item, index) => {
              // destructure item
              const { mainLink, mainPath, subLinks } = item;

              return (
                <div
                  key={index}
                  className="hidden md:flex flex-col gap-y-2 lg:items-end"
                >
                  <div>
                    <Link to={`${mainPath}`}>{mainLink}</Link>
                    <ul>
                      {subLinks.map((item, index) => {
                        // destructure sub link
                        const { link, path } = item;

                        return (
                          <li key={index}>
                            <Link to={`${path}`}>{link}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex justify-between py-4 text-xs">
          <div>
            &copy; {year} {logo}
          </div>
          <div>
            Создал{" "}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition duration-300"
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
