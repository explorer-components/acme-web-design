import React from "react"

import Layout from "../components/Layout"
import Subscribe from "../components/Subscribe"

const Services = () => {
  return (
    <Layout currentPage="services">
      <Subscribe />
      <section className="p-8">
        <h3 className="text-xl font-semibold pb-4 text-center">Services</h3>

        <div className="bg-gray-300 px-4 py-10 mb-2">
          <h4 className="text-lg font-semibold text-center pb-4">
            Website Design
          </h4>
          <p className="text-center pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
            facilisi.
          </p>
          <p className="text-center">Pricing: $1,000 - $3,000</p>
        </div>
        <div className="bg-gray-300 px-4 py-10 mb-2">
          <h4 className="text-lg font-semibold text-center pb-4">
            Website Maintenance
          </h4>
          <p className="text-center pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
            facilisi.
          </p>
          <p className="text-center">Pricing: $250 per month</p>
        </div>
        <div className="bg-gray-300 px-4 py-10 mb-2">
          <h4 className="text-lg font-semibold text-center pb-4">
            Website Hosting
          </h4>
          <p className="text-center pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
            augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
            facilisi.
          </p>
          <p className="text-center">Pricing: $25 per month</p>
        </div>
        <div className="bg-gray-800 px-4 py-10 mb-2 text-white">
          <h4 className="text-lg font-semibold text-center pb-4">
            Get A Quote
          </h4>

          <form className="text-black" action="">
            <input
              className="w-full p-1 mb-4 focus:bg-gray-900 focus:text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              autoComplete="off"
            />
            <input
              className="w-full p-1 mb-4 focus:bg-gray-900 focus:text-white focus:outline-none"
              type="text"
              name="email"
              placeholder="Email Address"
              id="email"
              autoComplete="off"
            />
            <textarea
              className="w-full p-1 mb-4 focus:bg-gray-900 focus:text-white focus:outline-none"
              name="Message"
              id="message"
              placeholder="Write your message here..."
              autoComplete="off"
            />
            <button className="w-full text-white bg-red-600 py-3" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Services
