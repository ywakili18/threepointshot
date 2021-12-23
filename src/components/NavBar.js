import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Three point shot (icon goes here) </NavLink>
      <NavLink to="/search">Players</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar
