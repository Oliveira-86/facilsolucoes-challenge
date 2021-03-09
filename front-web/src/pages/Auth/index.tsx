import React from 'react';
import { ReactComponent as AuthImg } from '../../core/assets/images/Auth.svg';
import Login from './components/Login';
import './styles.scss';

const Auth = () => (

    <div className="auth-container">
        <div className="auth-info-content">
            <h1 className="auth-info-title">
                Tenha acesso aos <br /> seus contratos
            </h1>
            <AuthImg />
        </div>
        <div className="auth-content">
            <Login />
        </div>
    </div>
);

export default Auth;