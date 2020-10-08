import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const DataProviderContext = createContext({});

const useDataProviderContext = () => useContext(DataProviderContext);

const DataProviderContextProvider = (props) => {
  const { children, ...rest } = props;

  return (
    <DataProviderContext.Provider value={{ ...rest }}>
      {children}
    </DataProviderContext.Provider>
  );
};

DataProviderContextProvider.propTypes = {
  getList: PropTypes.func.isRequired,
  getOne: PropTypes.func,
  create: PropTypes.func,
  update: PropTypes.func,
  delete: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

DataProviderContextProvider.defaultProps = {
  getOne: null,
  create: null,
  update: null,
  delete: null,
};

export { DataProviderContextProvider, useDataProviderContext };
