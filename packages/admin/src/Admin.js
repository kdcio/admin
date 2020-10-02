import React from 'react';
import { AdminContextProvider, Layout } from 'ka-core';

const Admin = ({ dashboard, children }) => (
  <AdminContextProvider>
    <Layout dashboard={dashboard}>{children}</Layout>
  </AdminContextProvider>
);

Admin.displayName = 'Admin';

export default Admin;
