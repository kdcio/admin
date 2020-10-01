import React from 'react';
import { ListContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

import userData from './UsersData';

const List = (props) => {
  const { children, ...listProps } = props;
  const routeProps = useRouteContext();

  return (
    <ListContextProvider routeProps={routeProps} {...listProps} data={userData}>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </ListContextProvider>
  );
};

export default List;
