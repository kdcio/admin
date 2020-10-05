import React, { Fragment, cloneElement } from 'react';
import { useShowContext, useRouteContext } from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';
import { EditButton, ListButton } from '../button';

const SimpleShowLayout = (props) => {
  const {
    match: { params },
  } = useRouteContext();
  const { record = {} } = useShowContext();
  const { children = [] } = props;

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Show #{params.id}
            <div className="card-header-actions">
              <EditButton record={record} className="mr-2" />
              <ListButton />
            </div>
          </CCardHeader>
          <CCardBody>
            <dl className="row">
              {children.map((child, idx) => {
                const {
                  props: { label },
                } = child;
                return (
                  <Fragment key={idx}>
                    <dt className="col-sm-3">{label}</dt>
                    <dd className="col-sm-9">
                      {cloneElement(child, { record })}
                    </dd>
                  </Fragment>
                );
              })}
            </dl>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default SimpleShowLayout;
