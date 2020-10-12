import React, { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useProviderContext } from '../dataProvider';
import { useRouteContext } from './RouteContext';

const defaultValue = { data: [] };

const ListContext = createContext({ ...defaultValue });

const useListContext = () => useContext(ListContext);

const ListContextProvider = (props) => {
  const { name } = useRouteContext();
  const { setProvider } = useProviderContext();

  useEffect(() => {
    setProvider({ name, type: 'list', defaultValue: [] });
  }, [name]);

  const { children } = props;
  return (
    <ListContext.Provider value={{ ...props }}>{children}</ListContext.Provider>
  );
};

ListContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ListContextProvider, useListContext };
