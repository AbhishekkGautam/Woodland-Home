import React, { Component } from "react"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all product", ...categories]
  return categories
}

export default class ShopProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      productItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items]
    if (category === "all product") {
      this.setState(() => {
        return { productItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { productItems: items }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="w-full py-8 md:py-12">
          <div className="max-w-screen-lg xl:pl-4 xl:pr-4 xl:mx-auto mx-12 md:mx-20">
            {/*Categories*/}
            <div className="flex items-start flex-wrap mb-12 md:mb-20">
              {this.state.categories.map((category, index) => {
                return (
                  <div
                    className="py-2 px-8 mt-5 text-xs lg:text-base capitalize rounded lg:py-2 lg:px-10 shadow-md hover:bg-green-200 focus:outline-none transform hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
                    onClick={() => {
                      this.handleItems(category)
                    }}
                  >
                    <h1 key={index} className="">
                      {category}
                    </h1>
                  </div>
                )
              })}
            </div>
            {/*Items*/}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-gap-10 gap-y-8 xl:col-gap-16">
              {this.state.productItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="bg-white rounded-lg overflow-hidden border md:border-gray-200 md:shadow-md border-gray-300"
                  >
                    <div className="flex justify-center items-center pt-3">
                      <Img
                        className="object-cover"
                        fixed={node.image.fixed}
                        alt="card-image"
                      />
                    </div>
                    <div className="px-6 md:px-4 text-center">
                      <h1 className="text-xl py-2 font-light">{node.name}</h1>

                      <div className="flex justify-around items-center my-3 pb-3">
                        <p className="text-sm tracking-wide bg-orange-200 px-3 py-2 rounded-md">
                          ${node.price}
                        </p>
                        <button
                          className="snipcart-add-item w-1/2 text-sm py-2 px-4 rounded-md hover:bg-black hover:text-white focus:outline-none transition-all duration-500 ease-linear border"
                          data-item-id={node.id}
                          data-item-price={node.price}
                          data-item-url="/shop"
                          data-item-image={node.image.fixed.src}
                          data-item-name={node.title}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="w-4/5">
          <div className="">
            <h1>There are no items to display.</h1>
          </div>
        </section>
      )
    }
  }
}
