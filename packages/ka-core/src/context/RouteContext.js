import React from 'react';
import { createContext, useContext } from 'react';

const RouteContext = createContext({});

const useRouteContext = () => useContext(RouteContext);

const RouteContextProvider = (props) => {
  const { children, name, options, ...other } = props;
  const basePath = `/${name}`;
  return (
    <RouteContext.Provider value={{ ...other, ...options, name, basePath }}>
      {children}
    </RouteContext.Provider>
  );
};

export { RouteContextProvider, useRouteContext };
