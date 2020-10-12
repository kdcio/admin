import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const Data = createContext();

const useData = () => useContext(Data);

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  return <Data.Provider value={{ data, setData }}>{children}</Data.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { DataProvider, useData };
