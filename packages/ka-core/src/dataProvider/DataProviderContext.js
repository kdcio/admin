import React from 'react';
import { createContext, useContext } from 'react';

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

export { DataProviderContextProvider, useDataProviderContext };
