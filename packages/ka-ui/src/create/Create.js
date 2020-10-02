import React, { useEffect, useState } from 'react';
import { FormContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

import { get } from '../data';

const Create = (props) => {
  const { children, ...createProps } = props;
  const {
    label,
    match: { params },
  } = useRouteContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(get(params.id));
  }, [params]);

  return (
    <FormContextProvider {...createProps} type="create" record={data}>
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
