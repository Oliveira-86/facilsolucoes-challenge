import React from 'react';
import { Route, Switch } from 'react-router';
import List from '../User/List/index';
import Form from './Form';

const User = () => {
    
    return (

        <div>
            <Switch>
                <Route path="/admin/users" exact>
                    <List />
                </Route>
                <Route path="/admin/users/:usersId">
                    <Form />    
                </Route>
            </Switch>

        </div>
    );
}

export default User;