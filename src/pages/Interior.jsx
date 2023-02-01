import React,{useEffect} from "react";

const Interior = () => {
  useEffect(() => {
    document.title = 'Интерьер || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-screen bg-pink-100 flex items-center justify-center">
        Interior header
      </div>
      <div className="h-[1000px] flex items-center justify-center">Content</div>
    </div>
  );
};

export default Interior;
