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
          <div className='date-tittle'>
            <h2>Próximas fechas</h2>
          </div>
          <div className='date'>
            Estimados:
            <p className='date-p'>Se les informa que las fechas para el periodo 2024-1 son:</p>
            <table className="table table-bordered" style={{border: "2px solid #413c3c"}}>
              <thead style={{border: "2px solid #413c3c"}}>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" style={{paddingLeft: "20px"}} >Inicio</th>
                  <th scope="col" style={{paddingLeft: "20px"}} ></th>
                  <th scope="col" style={{paddingLeft: "10px"}} >Término</th>
                </tr>
              </thead>
              <tbody style={{border: "2px solid #413c3c"}}>
                <tr>
                  <th scope="row">Postulaciones</th>
                  <td style={{paddingLeft: "20px"}}>25/01</td>
                  <td style={{paddingLeft: "20px"}} >-</td>
                  <td style={{paddingLeft: "20px"}} >09/02</td>
                </tr>
                <tr>
                  <th scope="row">Selección postulantes</th>
                  <td style={{paddingLeft: "20px"}}>10/02</td>
                  <td style={{paddingLeft: "20px"}} >-</td>
                  <td style={{paddingLeft: "20px"}} >15/02</td>
                </tr>
                <tr>
                  <th scope="row">Segundo Llamado</th>
                  <td style={{paddingLeft: "20px"}}>16/02</td>
                  <td style={{paddingLeft: "20px"}} >-</td>
                  <td style={{paddingLeft: "20px"}} >20/02</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='signatures'>
          <div className='sig-tittle'>
            <h2>Tus Asignaturas</h2>
          </div>
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
