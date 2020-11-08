import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopProduct from "../components/ShopProduct"

const shop = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto mx-12 md:mx-20 h-32 md:h-48 text-3xl md:text-x4l lg:text-5xl text-gray-700 font-semibold tracking-wide bg-purple-100 flex justify-center items-center">
        <h1 className="font-poppins">Our Products</h1>
      </div>
      <ShopProduct items={data.shop_product} />
    </Layout>
  )
}

export const query = graphql`
  {
    shop_product: allContentfulHomelandProduct(
      filter: { featured: { eq: false } }
    ) {
      edges {
        node {
          id
          name
          price
          category
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default shop
