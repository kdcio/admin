import React from 'react';
import { AdminContext, Layout } from 'ka-core';

const Admin = ({ dashboard, children }) => (
  <AdminContext>
    <Layout dashboard={dashboard} children={children} />
  </AdminContext>
);

export default Admin;
