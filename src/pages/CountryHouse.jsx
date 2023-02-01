import React,{useEffect} from 'react'

const CountryHouse = () => {
  useEffect(() => {
    document.title = 'Дача || Mark Powell';
  }, []);

  return (
    <div className="flex flex-col">
    <div className="h-screen bg-lime-100 flex items-center justify-center">
      Countryhouse header
    </div>
    <div className="h-[1000px] flex items-center justify-center">Content</div>
  </div>
  )
}

export default CountryHouse
