import React from 'react';
import AnaMaria from "../assets/anamaria.png"
import { Link } from 'react-router-dom'; 
import BotonSeleccionar from './boton_seleccionar';
import a1 from "../assets/a1.png"
import a23 from "../assets/a23.png"
import a3 from "../assets/a3.png"


export const INF152 = () => {
    return (
        <div className='postulantes'>
            <div className='title-postulantes'>Postulantes a: Estructuras Discretas</div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={AnaMaria} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Ana María de las Mercedes</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>78</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>2</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Laboratorio</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-AnaMaria">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a1} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Adolfo Riquelme</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>80</h4>
                        </div>
                        <div className='VSA'>
                            <h4>Veces siendo ayudante</h4>
                            <h4>0</h4>
                        </div>
                        <div className='TipoPost'>
                            <h4>Postulante a</h4>
                            <h4>Cátedra</h4>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link to="/profile-Adolfo">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a23} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Sofía Vergara</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>75</h4>
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
                        <Link to="/profile-Sofia">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
            <div className='postulante'>
                <div className='imgPostu'>
                    <img src={a3} alt='logo usm' />
                </div>
                <div className='info1'>
                    <h3>Jose Carmona</h3>
                </div>
                <div className='info2g'>
                    <div className='info2'>
                        <div className='promedio'>
                            <h4>Promedio</h4>
                            <h4>85</h4>
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
                        <Link to="/profile-Jose">
                        <button>Perfil académico</button>
                        </Link>
                        <BotonSeleccionar/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default INF152