import React from 'react';
import { Link } from 'react-router-dom'; 
import BotonSeleccionar from './boton_seleccionar';
import a2 from "../assets/a2.png"
import a4 from "../assets/a4.png"
import a5 from "../assets/a5.png"
import a6 from "../assets/a6.png"

export const INF134 = () => {
    return (
        <div className='postulantes'>
            <div className='title-postulantes'>Postulantes a: Estructuras de Datos</div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a2} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Marta Fernández</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>75</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>2</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Cátedra</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-Marta">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a4} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Manuela Ruiz</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>70</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>1</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Cátedra</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-Manuela">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a5} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Patricia Herrera</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>79</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>2</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Cátedra</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-Patricia">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a6} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Guillermo Vila</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>82</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>1</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Laboratorio</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-Guillermo">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default INF134;