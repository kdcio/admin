import * as React from 'react';
import AdminContext from './context/AdminContext';
import { Layout } from './containers';

const Admin: React.FC = () => {
  return (
    <AdminContext>
      <Layout />
    </AdminContext>
  );
};

export default Admin;
