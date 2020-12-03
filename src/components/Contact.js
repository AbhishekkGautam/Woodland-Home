import React from "react"

const Contact = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto w-3/4 md:w-3/5 lg:w-1/2">
        <form action="https://formspree.io/f/xgeplbzd" method="POST">
          <div className="flex flex-col mb-8">
            <label
              htmlFor="name"
              className="text-sm lg:text-base text-gray-800 tracking-wide font-light"
            >
              Name
            </label>
            <input
              type="text"
              className=""
              name="name"
              id="name"
              placeholder="John Doe"
              className="xl:w-11/12 py-2 mt-2 border px-3 focus:outline-none focus:border-orange-400"
            />
          </div>
          <div className="flex flex-col mb-8">
            <label
              htmlFor="email"
              className="text-sm lg:text-base text-gray-800 tracking-wide font-light"
            >
              Email
            </label>
            <input
              type="text"
              className=""
              name="email"
              id="email"
              placeholder="abc@xyz.com"
              className="xl:w-11/12 py-2 mt-2 border px-3 focus:outline-none focus:border-orange-400"
            />
          </div>
          <div className="flex flex-col mb-8">
            <label
              htmlFor="message"
              className="text-sm lg:text-base text-gray-800 tracking-wide font-light"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message"
              className="xl:w-11/12 py-2 mt-2 border px-3 focus:outline-none focus:border-orange-400"
            />
          </div>
          <button className="w-full xl:w-11/12 text-sm py-2 xl:py-3 px-4 mt-3 mb-3 rounded-md bg-black text-white hover:bg-orange-400 hover:text-black transition-all duration-500 ease-linear">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
