import React from "react"
import NavLink from "./NavLink"

const Navbar = ({ currentPage }) => {
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-800 text-white p-4 border-b-4 border-red-600">
      <div className="text-3xl font-semibold">
        <span className="text-red-600">Acme </span>
        Web Design
      </div>

      <ul className="flex">
        <NavLink isActive={currentPage === "home"} to="/">
          Home
        </NavLink>
        <NavLink isActive={currentPage === "about"} to="/about">
          About
        </NavLink>
        <NavLink isActive={currentPage === "services"} to="/services">
          Services
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
