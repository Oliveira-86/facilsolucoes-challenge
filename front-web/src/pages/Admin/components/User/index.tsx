import React from 'react';
import { Route, Switch } from 'react-router';
import List from '../user/List/index';
import Form from './Form';

const User = () => {
    
    return (

        <div>
            <Switch>
                <Route path="/admin/user" exact>
                    <List />
                </Route>
                <Route path="/admin/user/:UserId">
                    <Form />    
                </Route>
            </Switch>

        </div>
    );
}

export default User;