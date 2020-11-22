/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint react/prop-types: 0 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Ticket from './Ticket/Ticket';

const ROUTES = [
  {
    path: '/ticket',
    key: 'TICKET',
    component: RenderRoutes,
    routes: [
      {
        path: '/ticket',
        key: 'TICKET_ROOT',
        exact: true,
        component: Ticket,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default ROUTES;
