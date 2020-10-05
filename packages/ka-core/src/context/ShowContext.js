import React from 'react';
import { createContext, useContext } from 'react';
import { useDataProviderContext, useProvider } from '../dataProvider';
import { useRouteContext } from '../context';

const ShowContext = createContext({});

const useShowContext = () => useContext(ShowContext);

const ShowContextProvider = (props) => {
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
    <ShowContext.Provider value={{ ...props, status, record: data, error }}>
      {children}
    </ShowContext.Provider>
  );
};

export { ShowContextProvider, useShowContext };
