import React,{useEffect} from 'react'

const Education = () => {
  useEffect(() => {
    document.title = 'Самообразование || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
    <div className="h-screen bg-violet-100 flex items-center justify-center">
      Education header
    </div>
    <div className="h-[1000px] flex items-center justify-center">Content</div>
  </div>
  )
}

export default Education
