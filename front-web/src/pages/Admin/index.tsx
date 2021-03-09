import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from '../../core/components/PrivateRoute'
import Contracts from './components/Contracts';
import Navbar from './components/Navbar';
import './styles.scss';

const Admin = () => (

    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>
                <PrivateRoute path="/admin/contracts">
                    <Contracts />
                </PrivateRoute>
                <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <h1>Users</h1>
                </PrivateRoute>
            </Switch>
        </div>
    </div>


);

export default Admin;