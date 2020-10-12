import React from 'react';
import PropTypes from 'prop-types';
import { FormContextProvider, useRouteContext, DataProvider } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

const Edit = (props) => {
  const { children } = props;
  const {
    match: { params },
  } = useRouteContext();

  return (
    <FormContextProvider type="edit">
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Edit #{params.id}</CCardHeader>
            <CCardBody>
              <DataProvider>{children}</DataProvider>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FormContextProvider>
  );
};

Edit.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Edit;
