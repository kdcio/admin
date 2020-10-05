import React from 'react';
import { createContext, useContext } from 'react';
import { useDataProviderContext, useProvider } from '../dataProvider';
import { useRouteContext } from '../context';

const FormContext = createContext({});

const useFormContext = () => useContext(FormContext);

const FormContextProvider = (props) => {
  const {
    name,
    match: { params },
  } = useRouteContext();
  const { getOne } = useDataProviderContext();
  const { status, data, error } = useProvider({
    name,
    params,
    source: getOne,
    defaultData: {},
  });

  const { children } = props;
  return (
    <FormContext.Provider value={{ ...props, status, record: data, error }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContextProvider, useFormContext };
