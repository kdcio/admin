import { useEffect, useRef, useReducer } from 'react';

const useProvider = ({ source, name, params, defaultData = [] }) => {
  const initialState = {
    status: 'idle',
    error: null,
    data: defaultData,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!source || !name) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      try {
        const data = await source(name, params);
        if (cancelRequest) return;
        dispatch({ type: 'FETCHED', payload: data });
      } catch (error) {
        if (cancelRequest) return;
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [source]);

  return state;
};

export default useProvider;
