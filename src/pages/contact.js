import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="h-56 md:h-80 mt-24 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide bg-orange-300 flex justify-center items-center">
      <h1 className="font-poppins">Drop A Message</h1>
    </div>
    <Contact />
  </Layout>
)

export default ContactPage
