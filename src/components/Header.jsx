import React from "react";

// import components
import HeaderCarousel from "./HeaderCarousel";

const Header = () => {
  return (
    // <header className="bg-heroMobile bg-center md:bg-hero bg-cover md:bg-bottom bg-no-repeat flex items-center justify-center h-screen">
    //   <HeaderCarousel />
    // </header>
    
    <header className="h-screen w-full">
      <HeaderCarousel />
    </header>
  );
};

export default Header;
