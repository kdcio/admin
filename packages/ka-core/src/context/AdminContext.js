import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ProviderContextProvider, DataContextProvider } from '../dataProvider';

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
      <ProviderContextProvider
        getList={getList}
        getOne={getOne}
        create={create}
        update={update}
        delete={del}
      >
        <DataContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </DataContextProvider>
      </ProviderContextProvider>
    </AdminContext.Provider>
  );
};

AdminContextProvider.propTypes = {
  containsDashboard: PropTypes.bool.isRequired,
  dataProvider: PropTypes.shape({
    getList: PropTypes.func.isRequired,
    getOne: PropTypes.func,
    create: PropTypes.func,
    update: PropTypes.func,
    delete: PropTypes.func,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AdminContextProvider, useAdminContext };
