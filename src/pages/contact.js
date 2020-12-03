import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="w-full">
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto h-auto">
        <div className="h-56 md:h-80 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide bg-orange-300 flex justify-center items-center">
          <h1 className="font-poppins text-black">Drop A Message</h1>
        </div>
        <Contact />
      </div>
    </div>
  </Layout>
)

export default ContactPage
