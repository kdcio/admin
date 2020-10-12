import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: null,
  params: null,
  command: null,
  defaultData: [],
};

const ProviderContext = createContext();

const useProviderContext = () => useContext(ProviderContext);

const ProviderContextProvider = (props) => {
  const { children, ...funcs } = props;
  const [provider, setProvider] = useState({ ...initialState });

  const runCommand = async (type, name, params) => {
    switch (type) {
      case 'list':
        return funcs.getList(name, params);
      case 'one':
        return funcs.getOne(name, params);
      case 'create':
        return funcs.create(name, params);
      case 'update':
        return funcs.update(name, params);
      case 'delete':
        return funcs.delete(name, params);
      default:
        return Promise.reject(new Error('Invalid provider type'));
    }
  };

  return (
    <ProviderContext.Provider value={{ ...provider, setProvider, runCommand }}>
      {children}
    </ProviderContext.Provider>
  );
};

ProviderContextProvider.propTypes = {
  getList: PropTypes.func.isRequired,
  getOne: PropTypes.func,
  create: PropTypes.func,
  update: PropTypes.func,
  delete: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ProviderContextProvider.defaultProps = {
  getOne: null,
  create: null,
  update: null,
  delete: null,
};

export { ProviderContextProvider, useProviderContext };
