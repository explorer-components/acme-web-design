import React from "react"

import Layout from "../components/Layout"
import Subscribe from "../components/Subscribe"

const About = () => {
  return (
    <Layout currentPage="about">
      <Subscribe />
      <section className="p-6">
        <div className="text-justify pb-8 px-4">
          <h3 className="text-xl font-semibold pb-4">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna. Nam eget eros non orci consectetur
            congue at ac augue. Proin eget arcu in enim feugiat ultricies.
            Curabitur maximus metus nec metus pretium viverra at et orci.
            Integer hendrerit ante ut placerat cursus.
          </p>
        </div>

        <div className="bg-gray-800  text-white text-justify p-4 mb-8">
          <p>
            Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
            vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris
            vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id
            dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor
            lorem sapien, in aliquet sapien convallis et. Donec nec mauris
            nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at
            cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla id
            turpis varius, pretium nunc sed, fermentum sem. Sed lacinia nunc non
            interdum pellentesque.
          </p>
        </div>

        <div className="bg-gray-800  text-white text-justify p-4">
          <h3 className="text-xl font-semibold pb-4 text-white">What We Do</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default About
