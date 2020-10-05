import React from 'react';
import { FormContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

const Edit = (props) => {
  const { children, ...editProps } = props;
  const {
    match: { params },
  } = useRouteContext();

  return (
    <FormContextProvider {...editProps} type="edit">
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Edit #{params.id}</CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FormContextProvider>
  );
};

export default Edit;
