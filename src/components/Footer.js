import React from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { FaFacebook, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-orange-300 h-auto">
        <div className="container mx-auto flex justify-around py-10 xl:py-16 items-center">
          <div className="">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width="80px"
                height="80px"
                className="xl:w-32 xl:h-24"
              />
            </Link>
          </div>
          <div className="">
            <h1 className="text-xs pb-1 xl:pb-3 xl:text-lg">Follow Us</h1>
            <div className="flex justify-between">
              <Link to="#" className="text-black" aria-label="Cart Icon">
                <FaFacebook className="text-xl xl:text-2xl" />
              </Link>
              <Link to="#" className="text-black" aria-label="Cart Icon">
                <FaTwitter className="text-xl xl:text-2xl" />
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="text-xs xl:text-lg">Designed by Abhishek Gautam.</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
