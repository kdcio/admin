import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useProviderContext } from './ProviderContext';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

const DataContext = createContext({});

const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props) => {
  const { children } = props;
  const { type, name, runCommand, params, defaultData } = useProviderContext();
  const initialState = {
    status: 'idle',
    error: null,
    data: defaultData,
  };

  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case FETCHING:
        return { ...initialState, status: FETCHING };
      case FETCHED:
        return { ...initialState, status: FETCHED, data: action.payload };
      case FETCH_ERROR:
        return { ...initialState, status: FETCH_ERROR, error: action.payload };
      default:
        return currentState;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;

    const fetchData = async () => {
      dispatch({ type: FETCHING });
      try {
        const data = await runCommand(type, name, params);
        if (cancelRequest) return;
        dispatch({ type: FETCHED, payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({ type: FETCH_ERROR, payload: error.message });
      }
    };

    if (name) {
      fetchData();
    }

    return function cleanup() {
      cancelRequest = true;
    };
  }, [type, name, params, defaultData]);

  return (
    <DataContext.Provider value={{ ...state }}>{children}</DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { DataContextProvider, useDataContext };
