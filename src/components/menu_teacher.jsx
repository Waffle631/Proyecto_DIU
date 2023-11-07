import React from 'react';
import JuanCarlos from "../assets/juancarlos.png"
import { Link } from 'react-router-dom';

export const Menu_teacher = () => {
    return (
        <div className='MT_g'>
          <div className='MT_img'>
            <img src={JuanCarlos} alt='logo usm' />
          </div>
          <div className='MT_name'>
            <h3>Juan Carlos</h3>
          </div>
          <div className='MT_ramos'>
            <h3>Ramos Dictados</h3>
            <Link to="/">
              <button>INF152-2023/02</button>
            </Link>
            <Link to="/INF134">
              <button>INF134-2023/02</button>
            </Link>
          </div>
        </div>
      );
}

export default Menu_teacher