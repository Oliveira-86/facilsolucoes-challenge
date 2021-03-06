import React from 'react';
import { Route, Switch } from 'react-router';
import List from '../Contracts/List/index';
import Form from './Form';

const Contracts = () => {
    
    return (

        <div>
            <Switch>
                <Route path="/admin/contracts" exact>
                    <List />
                </Route>
                <Route path="/admin/contracts/:contractsId">
                    <Form />    
                </Route>
            </Switch>

        </div>
    );
}

export default Contracts;