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
  children: PropTypes.node,
};

DataProviderContextProvider.defaultProps = {
  children: null,
};

export { DataProviderContextProvider, useDataProviderContext };
