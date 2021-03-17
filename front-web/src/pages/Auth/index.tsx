import React from 'react';
import { ReactComponent as AuthImg } from '../../core/assets/images/Auth.svg';
import Login from './components/Login';
import './styles.scss';

const Auth = () => (

    <div className="auth-container">   
        <div className="auth-content">
            <Login />
        </div>
    </div>
);

export default Auth;