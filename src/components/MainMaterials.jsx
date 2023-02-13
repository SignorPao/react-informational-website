import React from "react";

// import component
import MainMaterialsSidebar from "./MainMaterialsSidebar";

const MainMaterials = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper section flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
        <div className="bg-gray-100 lg:flex-[30%] h-[400px]">
          <MainMaterialsSidebar />
        </div>
        <div className="bg-gray-200 lg:flex-[70%] h-[500px]">MainMaterials</div>
      </div>
    </section>
  );
};

export default MainMaterials;
