import React from "react";
import NavBar from '../components/nav_bar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Chat from '../components/Chat.jsx';
import '../styles/profile.css';


export const ProfilePage = ({name, picture, average, experience, motivation, applyingCourses, currentCourses}) => {
    return (
        <div className='container-fluid'>
            <NavBar />
            <div className='row'> 
                <div className='container-fluid profile'> 
                    <div className='title-profile'>Perfil</div>
                    <div className='profile-header'>
                        <img src={picture} alt="Profile" className='profile-pic' />
                        <div className='name'>{name}</div>
                    </div>

                    <div className='row profile-stats'> 
                        <div className='col stat'>
                            <label>Promedio Acumulado</label>
                            <span>{average}</span>
                        </div>
                        <div className='col stat'>
                            <label>Semestres de experiencia</label>
                            <span>{experience}</span>
                        </div>
                    </div>

                    <div className='row'> 
                        <div className='col motivation'>
                            <label>Motivación</label>
                            <p>{motivation}</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col courses'>
                            <label>Asignaturas a las que está postulando este período</label>
                            <ul>
                                {applyingCourses.map((course, index) => <li key={index}>{course}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col current-courses'>
                            <label>Cursos vigentes</label>
                            <ul>
                                {currentCourses.map((course, index) => <li key={index}>{course}</li>)}
                            </ul>
                        </div>
                    </div>
                <Chat />
                </div>
            </div>
        </div>
    )
}
