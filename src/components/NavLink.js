import React from "react"
import { Link } from "gatsby"

const NavLink = ({ children, isActive, to }) => {
  return (
    <li className={isActive ? "p-3 text-lg text-red-600" : "p-3 text-lg"}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default NavLink
