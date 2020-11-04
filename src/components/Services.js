import React from "react"
import { FaTruck, FaLock, FaPhoneAlt } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"

const Services = () => {
  return (
    <section className="w-full my-24">
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto mx-5 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 md:gap-y-16 md:gap-x-5 lg:gap-x-10 xl:gap-x-6 mx-10 md:mx-16 lg:mx-24 xl:mx-0">
          <div className="text-center font-lato flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-5">
              <MdAttachMoney className="text-xl" />
            </div>
            <h1 className="pt-6 pb-2 font-semibold">Money Back Guarantee</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quod.
            </p>
          </div>
          <div className="text-center font-lato flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-5">
              <FaTruck className="text-xl" />
            </div>
            <h1 className="pt-6 pb-2 font-semibold">Free Shipping Worldwide</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quod.
            </p>
          </div>
          <div className="text-center font-lato flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-5">
              <FaLock className="text-xl" />
            </div>
            <h1 className="pt-6 pb-2 font-semibold">Secure Payment</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quod.
            </p>
          </div>
          <div className="text-center font-lato flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-5">
              <FaPhoneAlt className="text-xl" />
            </div>
            <h1 className="pt-6 pb-2 font-semibold">24/7 Customer Service</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quod.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
