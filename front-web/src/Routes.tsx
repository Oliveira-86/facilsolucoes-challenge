import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'; 
import Navbar from './core/components/Navbar';
import history from './core/utils/history';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Home from './pages/Home';

const Routes = () => (

    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Redirect from="/auth" to="/auth/login" exact/>
            <Route path="/auth">
                <Auth />
            </Route>
            <Redirect from="/admin" to="/admin/contracts" exact/>
            <Route path="/admin" >
                <Admin />
            </Route>
        </Switch>
    </Router>
    
);

export default Routes;