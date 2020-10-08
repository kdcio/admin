import React from 'react';
import { createContext, useContext } from 'react';
import { useDataProviderContext, useProvider } from '../dataProvider';
import { useRouteContext } from '../context/RouteContext';

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

export { ListContextProvider, useListContext };
