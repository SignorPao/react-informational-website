import React, { useEffect } from "react";

// import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// import icons
import { VscSearchStop } from "react-icons/vsc";

const NotFoundPage = () => {
  // title of the document
  useEffect(() => {
    document.title = "Страница не найдена";
  }, []);

  return (
    <div>
      <Nav />

      {/* 404 component */}
      <div className="wrapper min-h-screen flex flex-col gap-y-6 items-center justify-center text-dark dark:text-light text-center">
        <div className="w-20 lg:w-48 h-20 lg:h-48">
          <VscSearchStop className="w-full h-full" />
        </div>
        <h1 className="text-2xl lg:text-5xl font-semibold font-primary">
          Страница не найдена!
        </h1>
        <p className="text-sm lg:text-lg text-dark/80 dark:text-light/80">
          Для поиска интересующей информации, воспользуйтесь меню или поисковым
          фильтром.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
