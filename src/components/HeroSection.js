import React from "react"
import Chair from "../images/contentful/chair.png"
import whitechair from "../images/contentful/chair6.png"
// import Sofa1 from "../images/contentful/chair2.jpg"
// import Sofa1 from "../images/contentful/chair2.jpg"
import lamp2 from "../images/contentful/lamp2.png"
import lamp from "../images/contentful/lamp.png"

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:gap-5 hero-area ">
          <div className="md:row-span-2 col-span-2 bg-purple-100 md:pt-40 pt-16 relative">
            <img src={whitechair} alt="" className="whitechair object-cover" />
            <h1 className="absolute top-0 left-0 font-light border border-gray-500 px-6 md:px-10 py-3  md:py-4 mt-8 ml-8">
              Comfortable Sofa
            </h1>
          </div>
          <div className="col-span-2 bg-blue-100 relative">
            <img src={lamp2} alt="" className="object-cover md:pt-5" />
            <h1 className="absolute top-0 right-0 font-light border border-gray-500 px-6 md:px-10 py-3  md:py-4 mt-8 mr-8">
              Amazing Lighting
            </h1>
          </div>
          <div className="bg-green-100 relative">
            <img src={Chair} alt="" className="object-cover pt-24 w-4/5 pl-5" />
            <h1 className="absolute top-0 left-0 text-xs font-light border border-gray-500 px-5 py-2 mt-5 ml-5">
              Comfortable Chair
            </h1>
          </div>
          <div className="bg-yellow-100 relative">
            <img src={lamp} alt="" className="object-cover pt-24 w-full pl-5" />
            <h1 className="absolute top-0 left-0 text-xs font-light border border-gray-500 px-5 py-2 mt-5 ml-5">
              Beautiful Lamp
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
