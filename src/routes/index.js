import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import CoreLayout from '../common/layouts/CoreLayout';
import { isAuthenticated } from '../utils/auth';

import public_routes from './routes.public';
import protected_routes from './routes.protected';
import Login from '../containers/Login';
import Discover from '../containers/Discover';

export default function Routes() {
  const auth = useSelector(store => store.auth);

  return (
    <CoreLayout>
      <Switch>
        <Route key="Discover" path="/discover" render={() => isAuthenticated() ? <Discover /> : <Redirect to="/login"/>} />
        <Route key="Login" path={["/", "/login"]} render={() => !isAuthenticated() ? <Login /> : <Redirect to="/discover"/>} />
      </Switch>
    </CoreLayout>
  );
}