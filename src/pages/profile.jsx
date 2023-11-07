import React from "react";
import NavBar from '../components/nav_bar'

export const ProfilePage = ({name, picture, average, experience, motivation, applyingCourses, currentCourses}) => {
    return (
        <div className='page'>
        <NavBar />
            <div className='profile'>
            <div className='title-profile'>Perfil</div>
                <div className='profile-header'>
                    <img src={picture} alt="Profile" className='profile-pic' />
                    <div className='name'>{name}</div>
                </div>

                <div className='profile-stats'>
                    <div className='stat'>
                        <label>Promedio Acumulado</label>
                        <span>{average}</span>
                    </div>
                    <div className='stat'>
                        <label>Semestres de experiencia</label>
                        <span>{experience}</span>
                    </div>
                </div>

                <div className='motivation'>
                    <label>Motivación</label>
                    <p>{motivation}</p>
                </div>

                <div className='courses'>
                    <label>Asignaturas a las que está postulando este período</label>
                    <ul>
                        {applyingCourses.map((course, index) => <li key={index}>{course}</li>)}
                    </ul>
                </div>

                <div className='current-courses'>
                    <label>Cursos vigentes</label>
                    <ul>
                        {currentCourses.map((course, index) => <li key={index}>{course}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}