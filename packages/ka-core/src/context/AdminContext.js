import React, { createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AdminContext = createContext({});

const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = ({ children, ...rest }) => {
  const options = { ...rest, resources: {} };
  const { props } = children; // Layout component
  props.children.forEach((child) => {
    const { props } = child;
    options.resources[props.name] = props.options || {};
  });

  const getResourceOpts = (name) => options.resources[name];

  return (
    <AdminContext.Provider value={{ getResourceOpts, ...options }}>
      <BrowserRouter>{children}</BrowserRouter>
    </AdminContext.Provider>
  );
};

export { AdminContextProvider, useAdminContext };
