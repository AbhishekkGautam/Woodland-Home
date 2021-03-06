import React from "react"
import Chair from "../images/heroimage/chair.webp"
import whitechair from "../images/heroimage/whitechair.webp"

import wiredlamp from "../images/heroimage/wiredlamp.webp"
import tablelamp from "../images/heroimage/tablelamp.webp"

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto h-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          <div className="md:row-span-2 col-span-2 bg-purple-100 md:pt-40 pt-16 relative hover:bg-gray-200 transition-all duration-500 ease-in-out">
            <img
              src={whitechair}
              alt=""
              className="whitechair object-cover transform hover:-translate-y-3 transition-transform duration-500 ease-in-out"
            />
            <h1 className="absolute top-0 left-0 font-light md:text-sm lg:text-base font-lato border border-gray-500 px-6 md:px-8 lg:px-10 py-3 lg:py-4 mt-8 ml-8 ">
              Comfortable Sofa
            </h1>
          </div>
          <div className="col-span-2 bg-blue-100 relative overflow-hidden hover:bg-yellow-200 transition-all duration-500 ease-in-out">
            <img
              src={wiredlamp}
              alt=""
              className="object-cover transform hover:-translate-y-3 transition-transform duration-500 ease-in-out"
            />
            <h1 className="absolute top-0 right-0 font-light md:text-sm lg:text-base border border-gray-500 px-6 md:px-8 lg:px-10 py-3 lg:py-4 mt-8 mr-8">
              Amazing Lighting
            </h1>
          </div>
          <div className="bg-green-100 relative hover:bg-teal-100 transition-all duration-500 ease-in-out">
            <img
              src={Chair}
              alt=""
              className="object-cover pt-24 w-4/5 pl-5 transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
            />
            <h1 className="absolute top-0 left-0 text-xs font-light border border-gray-500 px-5 py-2 mt-5 ml-5">
              Comfortable Chair
            </h1>
          </div>
          <div className="bg-yellow-100 relative hover:bg-red-100 transition-all duration-500 ease-in-out">
            <img
              src={tablelamp}
              alt=""
              className="object-cover pt-24 w-full pl-5 transform hover:-translate-y-3 transition-transform duration-500 ease-in-out"
            />
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
