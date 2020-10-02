import React, { useEffect, useState } from 'react';
import { ShowContextProvider, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';
import { EditButton, ListButton } from '../button';

import { get } from '../data';

const Show = (props) => {
  const { children, ...showProps } = props;
  const {
    label,
    match: { params },
  } = useRouteContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(get(params.id));
  }, [params]);

  return (
    <ShowContextProvider {...showProps} record={data}>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Show #{params.id}
              <div className="card-header-actions">
                <EditButton className="mr-2" />
                <ListButton />
              </div>
            </CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </ShowContextProvider>
  );
};

export default Show;
