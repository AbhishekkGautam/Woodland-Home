import React from "react"
import SingleFeaturedProduct from "./SingleFeaturedProduct"
import { graphql, useStaticQuery } from "gatsby"

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
    {
      featuredproducts: allContentfulHomelandProduct(
        filter: { featured: { eq: true } }
      ) {
        edges {
          node {
            id
            name
            price
            image {
              fixed(height: 150) {
                src
                ...GatsbyContentfulFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section className="w-full py-12 md:py-20 bg-orange-100">
      <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto mx-12 md:mx-20">
        <h1 className="text-center text-3xl lg:text-4xl font-poppins font-light py-6 lg:pt-8 tracking-wide mb-12 md:mb-20">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-gap-12 lg:col-gap-20 gap-y-12 lg:gap-y-16 xl:col-gap-16">
          {data.featuredproducts.edges.map(({ node: product }) => {
            return <SingleFeaturedProduct key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
