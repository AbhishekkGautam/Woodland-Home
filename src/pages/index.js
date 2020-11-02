import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import FeaturedProduct from "../components/FeaturedProduct"
import ShopNow from "../components/ShopNow"
import Social from "../components/Social"
import LatestNews from "../components/LatestNews"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Services />
    <FeaturedProduct />
    <ShopNow />
    <Social />
    <LatestNews />
  </Layout>
)

export default IndexPage
