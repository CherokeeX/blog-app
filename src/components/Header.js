import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Blog Application</h1>
        <NavLink to="/" activeClassname="active">HomePage</NavLink>
        <NavLink to="/blogs" activeClassname="active">Blogs</NavLink>
        <NavLink to="/contact" activeClassname="active">Contact</NavLink>
       
    </header>
  )
}

export default Header