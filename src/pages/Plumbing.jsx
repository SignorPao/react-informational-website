import React,{useEffect} from 'react'

const Plumbing = () => {
  useEffect(() => {
    document.title = 'Сантехника || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
    <div className="h-screen bg-cyan-100 flex items-center justify-center">
      Plumbing header
    </div>
    <div className="h-[1000px] flex items-center justify-center">Content</div>
  </div>
  )
}

export default Plumbing
