import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
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
  const { props: layoutProps } = children; // Layout component
  layoutProps.children.forEach((child) => {
    const { props: childProps } = child;
    options.resources[childProps.name] = childProps.options || {};
  });
  if (containsDashboard) {
    options.resources.dashboard = { label: 'Dashboard' };
  }

  const getResourceOpts = (name) => options.resources[name];
  const { getList, getOne, create, update, delete: del } = dataProvider;

  return (
    <AdminContext.Provider value={{ getResourceOpts, ...options }}>
      <DataProviderContextProvider
        getList={getList}
        getOne={getOne}
        create={create}
        update={update}
        delete={del}
      >
        <BrowserRouter>{children}</BrowserRouter>
      </DataProviderContextProvider>
    </AdminContext.Provider>
  );
};

AdminContextProvider.propTypes = {
  containsDashboard: PropTypes.bool.isRequired,
  dataProvider: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AdminContextProvider, useAdminContext };
