import React from 'react';
import { Route, Switch } from 'react-router';
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
            <Switch>
                <Route path="/admin/auth/login" exact>
                    <Login />
                </Route>
                <Route path="/admin/auth/register">
                    <h1>Register</h1>
                </Route>
                <Route path="/admin/auth/recover">
                    <h1>Recover</h1>
                </Route>
            </Switch>
        </div>
    </div>
);

export default Auth;