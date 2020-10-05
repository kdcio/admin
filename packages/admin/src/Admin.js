import React from 'react';
import { AdminContextProvider, Layout } from 'ka-core';

const Admin = ({ dataProvider, dashboard, children }) => (
  <AdminContextProvider
    containsDashboard={!!dashboard}
    dataProvider={dataProvider}
  >
    <Layout dashboard={dashboard}>{children}</Layout>
  </AdminContextProvider>
);

Admin.displayName = 'Admin';

export default Admin;
