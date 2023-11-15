import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/nav_bar.css'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink to='/' className='logo-text'>
        SPA
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/History'
      >
        Historial
      </NavLink>
      <NavLink className='logout-button' to='/login'>
        Cerrar Sesión
      </NavLink>
    </nav>
  )
}

export default NavBar
