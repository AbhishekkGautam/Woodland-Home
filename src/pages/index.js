import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import FeaturedProducts from "../components/FeaturedProducts"
import ShopNow from "../components/ShopNow"
import Social from "../components/Social"
import LatestNews from "../components/LatestNews"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Services />
    <FeaturedProducts />
  </Layout>
)

export default IndexPage
