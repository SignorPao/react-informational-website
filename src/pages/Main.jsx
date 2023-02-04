import React,{useEffect} from "react";

// import components
import Header from "../components/Header";

const Main = () => {
  useEffect(() => {
    document.title = 'Главная || Mark Powell';
  }, []);

  return (
    <>
      <Header />
      <div className="h-[1000px] dark:bg-dark dark:text-light transition-colors duration-500 flex items-center justify-center">
        Main content
      </div>
    </>
  );
};

export default Main;
