import React from 'react';
import { Route, Switch } from 'react-router';

const Contracts = () => {
    
    return (

        <div>
            <Switch>
                <Route path="/admin/contracts" exact>
                    <h1>Listagem de Contratos</h1>
                </Route>
                <Route path="/admin/contracts/create">
                    <h1>Criar Contrato</h1>
                </Route>
                <Route path="/admin/contracts/:contractsId">
                    <h1>Detalhe do Contrato</h1>
                </Route>
            </Switch>

        </div>
    );
}

export default Contracts;