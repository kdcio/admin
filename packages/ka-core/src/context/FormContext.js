import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useProviderContext } from '../dataProvider';
import { useRouteContext } from './RouteContext';

const FormContext = createContext({});

const useFormContext = () => useContext(FormContext);

const FormContextProvider = (props) => {
  const {
    name,
    match: { params },
  } = useRouteContext();
  const { setProvider } = useProviderContext();

  useEffect(() => {
    setProvider({
      name,
      params,
      type: 'one',
      defaultData: {},
    });
  }, [name]);

  const { children } = props;
  return (
    <FormContext.Provider value={{ ...props }}>{children}</FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { FormContextProvider, useFormContext };
