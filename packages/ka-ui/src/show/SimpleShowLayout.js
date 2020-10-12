import React, { Fragment, cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useDataContext,
  useData,
  useRouteContext,
  FETCHED,
  FETCHING,
} from 'ka-core';
import { CCard, CCardHeader, CCardBody, CCol, CRow } from '@coreui/react';
import { EditButton, ListButton } from '../button';

const SimpleShowLayout = (props) => {
  const {
    match: { params },
  } = useRouteContext();
  const { status, error, data } = useDataContext();
  const { setData } = useData();
  const { children = [] } = props;

  useEffect(() => {
    if (status === FETCHED) {
      setData(data);
    }
  }, [status, data]);

  if (status === FETCHING) {
    return <p>Fetching</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
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
          <CCardBody>
            <dl className="row">
              {children.map((child) => {
                const {
                  props: { source, label },
                } = child;
                return (
                  <Fragment key={source}>
                    <dt className="col-sm-3">{label}</dt>
                    <dd className="col-sm-9">{cloneElement(child)}</dd>
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

SimpleShowLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SimpleShowLayout;
