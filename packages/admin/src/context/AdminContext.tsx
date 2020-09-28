import * as React from 'react';
import { ReactNode, FunctionComponent, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

export interface AdminContextProps {
  children?: ReactNode;
}

const AdminContext: FunctionComponent<AdminContextProps> = ({ children }) => {
  const AuthContext = createContext(true);

  return (
    <AuthContext.Provider value={true}>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthContext.Provider>
  );
};

export default AdminContext;
