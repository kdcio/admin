import React from 'react';
import { ListContextProvider } from 'ka-core';
import { CCard, CCardBody, CCol, CRow } from '@coreui/react';

import { list } from '../data';

const List = (props) => {
  const { children, ...listProps } = props;

  return (
    <ListContextProvider {...listProps} data={list}>
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
