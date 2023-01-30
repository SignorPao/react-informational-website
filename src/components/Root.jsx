import React from "react";

// import components
import Nav from "./Nav";
import Footer from "./Footer";

// react-router
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
