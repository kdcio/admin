import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

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

RouteContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.shape({
    label: PropTypes.string,
  }),
};

RouteContextProvider.defaultProps = {
  options: { label: '' },
};

export { RouteContextProvider, useRouteContext };
