import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useProviderContext } from '../dataProvider';
import { useRouteContext } from './RouteContext';

const ShowContext = createContext({});

const useShowContext = () => useContext(ShowContext);

const ShowContextProvider = (props) => {
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
    <ShowContext.Provider value={{ ...props }}>{children}</ShowContext.Provider>
  );
};

ShowContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ShowContextProvider, useShowContext };
