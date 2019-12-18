import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCoffee } from "@fortawesome/free-solid-svg-icons"

import Skill from "../components/Skill"

import ShowCaseImage from "../images/showcase.jpg"

import HtmlLogo from "../images/logo_html.png"
import CSSLogo from "../images/logo_css.png"
import BrushLogo from "../images/logo_brush.png"

import "../styles/tailwind.css"
import Layout from "../components/Layout"
import Subscribe from "../components/Subscribe"

const IndexPage = () => (
  <Layout currentPage="home">
    <header
      className="text-white bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${ShowCaseImage})` }}
    >
      <h1 className="text-3xl text-center font-semibold pt-8 pb-8">
        Affordable Professional Web Design
      </h1>
      <p className="text-lg text-center pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus
        ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum
        condimentum.
      </p>
    </header>
    <Subscribe />
    <section className="md:px-8 lg:flex lg:flex lg:p-0">
      <Skill
        title="HTML5 Markup"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
        image={HtmlLogo}
      />
      <Skill
        title="CSS3 Styling"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
        image={CSSLogo}
      />
      <Skill
        title="Graphic Design"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies"
        image={BrushLogo}
      />
    </section>
  </Layout>
)

export default IndexPage
