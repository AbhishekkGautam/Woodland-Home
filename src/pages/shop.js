import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopProduct from "../components/ShopProduct"

const shop = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="w-full">
        <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto">
          <div className="h-40 md:h-48 text-3xl md:text-4xl lg:text-5xl text-gray-700 font-semibold tracking-wide bg-orange-100 flex justify-center items-center">
            <h1 className="font-light">Our Products</h1>
          </div>
        </div>
      </section>
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
