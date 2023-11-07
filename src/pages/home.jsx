import React from 'react'

import NavBar from '../components/nav_bar'
import INF152 from '../components/INF152'
import INF134 from '../components/INF134'
import Menu_teacher from '../components/menu_teacher'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
    <div className='content'>
      <div className='flex-container'>
        <Menu_teacher />
        <INF152 />
      </div>
    </div>
    </div>
  )
}

export default HomePage
