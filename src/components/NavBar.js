import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiBasketballBasket } from 'react-icons/gi'
const NavBar = () => {
  return (
    <nav className="p-2 text-2xl bg-orange-400  flex justify-between">
      <NavLink to="/" className="nav">
        <GiBasketballBasket />
      </NavLink>
      <NavLink to="/search" className="nav">
        Players
      </NavLink>
      <NavLink to="/about" className="nav">
        About
      </NavLink>
      <NavLink to="/about" className="nav">
        Github Repo{' '}
      </NavLink>
    </nav>
  )
}

export default NavBar
