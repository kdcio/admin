import React, { createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataProviderContextProvider } from '../dataProvider';

const AdminContext = createContext({});

const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = ({
  containsDashboard,
  dataProvider,
  children,
  ...rest
}) => {
  const options = { ...rest, resources: {} };
  const { props } = children; // Layout component
  props.children.forEach((child) => {
    const { props: childProps } = child;
    options.resources[childProps.name] = childProps.options || {};
  });
  if (containsDashboard) {
    options.resources['dashboard'] = { label: 'Dashboard' };
  }

  const getResourceOpts = (name) => options.resources[name];

  return (
    <AdminContext.Provider value={{ getResourceOpts, ...options }}>
      <DataProviderContextProvider {...dataProvider}>
        <BrowserRouter>{children}</BrowserRouter>
      </DataProviderContextProvider>
    </AdminContext.Provider>
  );
};

export { AdminContextProvider, useAdminContext };
