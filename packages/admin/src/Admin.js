import React from 'react';
import AdminContext from './context/AdminContext';
import { Layout } from './containers';

const Admin = ({ children }) => (
  <AdminContext>
    <Layout children={children} />
  </AdminContext>
);

export default Admin;
