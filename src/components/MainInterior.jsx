import React from "react";

// import component
import MainInteriorSidebar from "./MainInteriorSidebar";

const MainInterior = () => {
  return (
    <section className="wrapper section">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
        <div className="bg-gray-300 order-2 lg:order-none lg:flex-[60%] h-[600px]">MainInterior</div>
        <div className="bg-indigo-300 order-1 lg:order-none lg:flex-[40%] h-[400px]">
          <MainInteriorSidebar />
        </div>
      </div>
    </section>
  );
};

export default MainInterior;
