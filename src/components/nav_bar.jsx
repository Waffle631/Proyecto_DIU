import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <span className='logo-text'>SPA</span>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink className='logout-button' to='/login'>
        Cerrar Sesión
      </NavLink>
    </nav>
  )
}

export default NavBar
