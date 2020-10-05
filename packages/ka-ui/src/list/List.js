import React from 'react';
import { ListContextProvider } from 'ka-core';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { CreateButton } from '../button';

const List = (props) => {
  const { children, ...listProps } = props;

  return (
    <ListContextProvider {...listProps}>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <div className="card-header-actions">
                <CreateButton />
              </div>
            </CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </ListContextProvider>
  );
};

export default List;
