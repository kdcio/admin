import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { useDataProviderContext, useProvider } from '../dataProvider';
import { useRouteContext } from './RouteContext';

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

FormContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { FormContextProvider, useFormContext };
