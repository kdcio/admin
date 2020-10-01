import React from 'react';
import { ListContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

const List = (props) => {
  const { children, ...listProps } = props;
  const routeProps = useRouteContext();

  return (
    <ListContextProvider routeProps={routeProps} {...listProps}>
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
