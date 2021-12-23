import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiBasketballBasket } from 'react-icons/gi'
import { FaGithub } from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className="p-4 text-md sm:text-2xl bg-orange-400 flex justify-around rounded-md border-2 border-black">
      <NavLink to="/" className="nav">
        <GiBasketballBasket className="text-xl sm:text-3xl" />
      </NavLink>
      <NavLink to="/search" className="nav">
        Players
      </NavLink>
      <NavLink to="/about" className="nav">
        about
      </NavLink>
      <a
        href="https://github.com/ywakili18/threepointshot"
        className="nav"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-xl sm:text-3xl" />
      </a>
    </nav>
  )
}

export default NavBar
