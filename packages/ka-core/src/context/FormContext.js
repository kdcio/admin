import React from 'react';
import { createContext, useContext } from 'react';

const FormContext = createContext({});

const useFormContext = () => useContext(FormContext);

const FormContextProvider = (props) => {
  const { children } = props;
  return (
    <FormContext.Provider value={{ ...props }}>{children}</FormContext.Provider>
  );
};

export { FormContextProvider, useFormContext };
