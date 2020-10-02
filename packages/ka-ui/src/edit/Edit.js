import React, { useEffect, useState } from 'react';
import { EditContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';

import { get } from '../data';

const Show = (props) => {
  const { children, ...showProps } = props;
  const {
    match: { params },
  } = useRouteContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(get(params.id));
  }, [params]);

  return (
    <EditContextProvider {...showProps} record={data}>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Edit #{params.id}</CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </EditContextProvider>
  );
};

export default Show;
