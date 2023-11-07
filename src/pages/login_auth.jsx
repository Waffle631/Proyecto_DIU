import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoUSM from '../assets/USMDI.png'




export const LoginForm = () => {

    return (
        <div className="login-content" >
            <div className="login-container">
                <img src={LogoUSM} style={{ maxWidth: '100%' }} alt='logo usm' /><br />
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  />
                </div>
                <div className="password-help-text">
                    Problems with login?<br />
                    If you are a student, please contact the assistants of the Computer Lab (LabComp). If you are a professor or official, contact the Infrastructure and Technology Unit (I & T) of the IT Department.
                </div>
                <br /><br />
                <Link to="/">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default LoginForm
