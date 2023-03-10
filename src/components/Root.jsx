import React, { useLayoutEffect } from "react";

// import components
import Nav from "./Nav";
import Footer from "./Footer";

// react-router
import { Outlet, useLocation } from "react-router-dom";

// scroll to top component
import { ScrollToTop } from "./ScrollToTop";

// page scroll to top
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Root = () => {
  return (
    <div id="up">
      <Wrapper>
        <ScrollToTop />
        <Nav />
        <Outlet />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Root;
