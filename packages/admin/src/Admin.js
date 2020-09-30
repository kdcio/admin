import React from 'react';
import AdminContext from './context/AdminContext';
import { Layout } from './containers';

const Admin = ({ dashboard, children }) => (
  <AdminContext>
    <Layout dashboard={dashboard} children={children} />
  </AdminContext>
);

export default Admin;
