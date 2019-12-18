import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, currentPage }) => {
  return (
    <div className="bg-gray-100">
      <Navbar currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
