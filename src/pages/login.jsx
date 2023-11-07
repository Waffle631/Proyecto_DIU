import React, { useState } from 'react';
import LogoUSM from '../assets/USMDI.png'
import { Link } from 'react-router-dom'; 



export const LoginForm = () => {
    

    return (
        <div className="login-content">
            <div className="login-container">
                <img src={LogoUSM} style={{ maxWidth: '100%' }} alt='logo usm' /><br />
                <h2 style={{ color: '#fffafa' }}>Select account provider</h2>
                <Link to="/login_auth">
                    <button>DI</button>
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
