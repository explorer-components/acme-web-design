import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

import "../styles/tailwind.css"
import Gatsby from "../images/gatsby-astronaut.png"

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <FontAwesomeIcon icon={faCoffee} />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={Gatsby} alt="Gatsby logo" />
    </div>
  </div>
)

export default IndexPage
