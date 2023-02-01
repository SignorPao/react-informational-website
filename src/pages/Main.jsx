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
      <div className="h-[1000px] flex items-center justify-center">
        Main content
      </div>
    </>
  );
};

export default Main;
