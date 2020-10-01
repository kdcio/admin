import React from 'react';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AdminContext = ({ children }) => {
  const AuthContext = createContext(true);

  return (
    <AuthContext.Provider value={true}>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthContext.Provider>
  );
};

export default AdminContext;
