import React from "react"

const Subscribe = () => {
  return (
    <section className="text-white bg-gray-800 flex flex-col px-8 py-8 text-center items-center lg:flex-row lg:items-center lg:justify-between">
      <h3 className="text-2xl font-semibold pb-4 lg:p-0">
        Subscribe to Our Newsletter
      </h3>
      <div className="w-full lg:w-auto">
        <input
          className="w-64 pl-2 py-2 mb-2 md:w-3/4 lg:mb-0 lg:w-64"
          type="text"
          name="email"
          id="subscribe"
          placeholder="Enter Email..."
        />
        <button
          className="py-2 w-64 bg-red-600 font-bold md:w-3/4 lg:w-32"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Subscribe
