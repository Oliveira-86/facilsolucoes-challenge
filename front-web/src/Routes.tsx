import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Home from './pages/Home';

const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
            <Route path="/admin/auth">
                <Auth />
            </Route>
            <Redirect from="/admin" to="/admin/contracts" exact/>
            <Route path="/admin" >
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
    
);

export default Routes;