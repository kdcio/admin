import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { useDataProviderContext, useProvider } from '../dataProvider';
import { useRouteContext } from './RouteContext';

const defaultValue = { data: [] };

const ListContext = createContext({ ...defaultValue });

const useListContext = () => useContext(ListContext);

const ListContextProvider = (props) => {
  const { name } = useRouteContext();
  const { getList } = useDataProviderContext();
  const { status, data, error } = useProvider({ name, source: getList });

  const { children } = props;
  return (
    <ListContext.Provider value={{ ...props, status, data, error }}>
      {children}
    </ListContext.Provider>
  );
};

ListContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ListContextProvider, useListContext };
