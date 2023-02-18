import React from "react";

// import components
import HeaderCarousel from "./HeaderCarousel";

const Header = () => {
  return (
    <header className="h-[50vh] md:h-screen lg:h-[50vh] xl:h-screen w-full">
      <HeaderCarousel />
    </header>
  );
};

export default Header;
