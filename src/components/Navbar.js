import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
//import { FaAlignRight, FaCartArrowDown } from "react-icons/fa"
import { CgShoppingCart } from "react-icons/cg"
import { HiOutlineMenuAlt4 } from "react-icons/hi"

const Navbar = ({ toggleSidebar }) => {
  const data = [
    {
      id: 1,
      text: "shop",
      url: "/shop/",
    },
    {
      id: 2,
      text: "contact",
      url: "/contact/",
    },
  ]

  return (
    <nav className="w-full h-24 bg-white">
      <div className="max-w-screen-lg my-0 xl:mx-auto lg:mx-5 md:mx-4 mx-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" width="90px" height="90px" />
          </Link>
          <ul className="hidden lg:flex lg:justify-end">
            {data.map(link => {
              return (
                <li key={link.id} className="pr-8">
                  <Link
                    to={link.url}
                    className="capitalize lg:py-2 lg:px-1 lg:hover:text-gray-500 lg:transition-all lg:duration-300 lg:ease-linear"
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li>
              <div className="text-gray-700">
                <CgShoppingCart className="text-2xl mr-3 snipcart-checkout" />
              </div>
            </li>
          </ul>
          <div className="lg:hidden flex justify-end items-center my-auto">
            <div className="text-gray-700">
              <CgShoppingCart className="text-3xl mr-10 snipcart-checkout" />
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden focus:outline-none text-3xl mr-2 bg-transparent border-transparent text-gray-700 cursor-pointer"
              aria-label="Hamburger Menu"
            >
              <HiOutlineMenuAlt4 />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
