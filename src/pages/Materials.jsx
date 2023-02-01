import React,{useEffect} from 'react'

const Materials = () => {
  useEffect(() => {
    document.title = 'Стройматериалы || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      Materials header
    </div>
    <div className="h-[1000px] flex items-center justify-center">Content</div>
  </div>
  )
}

export default Materials
