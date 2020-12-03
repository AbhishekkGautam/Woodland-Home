import React from "react"
import Img from "gatsby-image"

const SingleFeaturedProduct = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
      <div className="flex justify-center items-center pt-3">
        <Img
          className="object-cover"
          fixed={product.image.fixed}
          alt="card-image"
        />
      </div>
      <div className="px-6 md:px-4 text-center">
        <h1 className="text-xl py-2 font-light">{product.name}</h1>

        <div className="flex justify-around items-center my-3 pb-3">
          <p className="text-sm tracking-wide bg-orange-200 px-3 py-2 rounded-md">
            ${product.price}
          </p>
          <button
            className="snipcart-add-item w-1/2 text-sm py-2 px-4 rounded-md hover:bg-black hover:text-white transition-all duration-500 ease-linear border"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://woodlandhome.netlify.app/"
            data-item-image={product.image.fixed.src}
            data-item-name={product.title}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleFeaturedProduct
