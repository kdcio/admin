import React from 'react';
import { createContext, useContext } from 'react';

const RouteContext = createContext({});

const useRouteContext = () => useContext(RouteContext);

const RouteContextProvider = (props) => {
  const { children, ...other } = props;
  return (
    <RouteContext.Provider value={{ ...other }}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteContextProvider, useRouteContext };
