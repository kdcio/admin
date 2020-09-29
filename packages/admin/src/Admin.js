import React from 'react';
import AdminContext from './context/AdminContext';
import { Layout } from './containers';

const Admin = () => (
  <AdminContext>
    <Layout />
  </AdminContext>
);

export default Admin;
