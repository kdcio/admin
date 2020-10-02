import React from 'react';
import { createContext, useContext } from 'react';

const EditContext = createContext({});

const useEditContext = () => useContext(EditContext);

const EditContextProvider = (props) => {
  const { children } = props;
  return (
    <EditContext.Provider value={{ ...props }}>{children}</EditContext.Provider>
  );
};

export { EditContextProvider, useEditContext };
