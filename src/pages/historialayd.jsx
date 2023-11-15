import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SimpleTable from "../components/SimpleTable"
import NavBar from '../components/nav_bar'
import '../stylesheets/table.css'

export const HistorialPage = () => {
    return (
        <div>
            <NavBar />
            <div>
                <h1>Historial de Ayudantes</h1> 
                <SimpleTable/>  
            </div>
        </div>

    )
}

export default HistorialPage