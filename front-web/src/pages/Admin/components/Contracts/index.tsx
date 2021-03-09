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
                <Route path="/admin/contracts/create">
                    <Form />
                </Route>
                <Route path="/admin/contracts/:contractsId">
                    <h1>Detalhe do Contrato</h1>
                </Route>
            </Switch>

        </div>
    );
}

export default Contracts;