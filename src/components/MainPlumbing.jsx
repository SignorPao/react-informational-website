import React from "react";

const MainPlumbing = () => {
  return (
    <section className="wrapper section">
      <div className="flex flex-col gap-y-6">
        <div className="text-center">MainPlumbing</div>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-6 justify-between w-full">
          <div className="bg-gray-300 w-full h-[450px]">Article 1</div>
          <div className="bg-gray-300 w-full h-[450px]">Article 2</div>
          <div className="bg-gray-300 w-full h-[450px]">Article 3</div>
        </div>
      </div>
    </section>
  );
};

export default MainPlumbing;
