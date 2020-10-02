import React from 'react';
import { createContext, useContext } from 'react';

const ShowContext = createContext({});

const useShowContext = () => useContext(ShowContext);

const ShowContextProvider = (props) => {
  const { children } = props;
  return (
    <ShowContext.Provider value={{ ...props }}>{children}</ShowContext.Provider>
  );
};

export { ShowContextProvider, useShowContext };
