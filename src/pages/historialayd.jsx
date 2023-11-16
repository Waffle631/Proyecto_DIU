import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SimpleTable from "../components/SimpleTable"
import NavBar from '../components/nav_bar'
import Menu_teacher from '../components/menu_teacher'
import '../stylesheets/table.css'

export const HistorialPage = () => {
    return (
        <div>
            <NavBar />
            <div className='contenedorHistorial'>
                <h1>Historial de Ayudantes de Juan Carlos</h1> 
                    <SimpleTable/>  
            </div>
        </div>
    );
}

export default HistorialPage;