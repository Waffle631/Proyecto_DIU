import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import NavBar from '../components/nav_bar'
import INF152 from '../components/INF152'
import INF134 from '../components/INF134'
import Menu_teacher from '../components/menu_teacher'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <div className='content'>
        <div className='dates'>
          <h1>Proximas fechas</h1>
          <div className='date'>
            <h3>Periodo de postulaciones: 25/01 - 09/02</h3>
            <h3>Selección postulantes: 10/02 - 15/02</h3>
            <h3>Segundo llamado: 16/02 - 20/02</h3>
          </div>
        </div>
        <div className='signatures'>
          <h1>Tus Asignaturas</h1>
          <div className='signature'>
            <Link to="/INF152" className='Link-sig'>
              <Button variant='primary'>INF152: Estructuras Discretas</Button>
            </Link>
            <Link to="/INF134" className='Link-sig'>
              <Button variant='primary'>INF134: Estructuras de Datos</Button>
            </Link>
          </div>
        </div>
        {/* <div className='flex-container'>
          <Menu_teacher />
          <INF152 />
        </div> */}
      </div>
    </div>
  )
}

export default HomePage
