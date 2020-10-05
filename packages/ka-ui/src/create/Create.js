import React from 'react';
import { FormContextProvider } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

const Create = (props) => {
  const { children, ...createProps } = props;

  return (
    <FormContextProvider {...createProps} type="create">
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Create new {label}</CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FormContextProvider>
  );
};

export default Create;
