import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));

export interface RouteProps {
  path: string;
  exact?: boolean;
  name: string;
  component?: any;
}

const routes: RouteProps[] = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true, name: 'Users', component: Users },
];

export default routes;
