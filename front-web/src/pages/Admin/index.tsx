import React from 'react';
import { Route, Switch } from 'react-router';
import Contracts from './components/Contracts';
import Navbar from './components/Navbar';
import './styles.scss';

const Admin = () => (

    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>
                <Route path="/admin/contracts">
                    <Contracts />
                </Route>
                <Route path="/admin/users">
                    <h1>Users</h1>
                </Route>
            </Switch>
        </div>
    </div>


);

export default Admin;