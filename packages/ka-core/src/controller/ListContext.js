import React from 'react';
import { createContext, useContext } from 'react';

const ListContext = createContext({});

const useListContext = () => useContext(ListContext);

const ListContextProvider = (props) => {
  const { children } = props;
  return (
    <ListContext.Provider value={{ ...props }}>{children}</ListContext.Provider>
  );
};

export { ListContextProvider, useListContext };
