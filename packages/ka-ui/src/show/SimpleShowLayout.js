import React, { Fragment, cloneElement } from 'react';
import { useShowContext } from 'ka-core';

const SimpleShowLayout = (props) => {
  const { record = {} } = useShowContext();
  const { children = [] } = props;

  return (
    <dl className="row">
      {children.map((child, idx) => {
        const {
          props: { label },
        } = child;
        return (
          <Fragment key={idx}>
            <dt className="col-sm-3">{label}</dt>
            <dd className="col-sm-9">{cloneElement(child, { record })}</dd>
          </Fragment>
        );
      })}
    </dl>
  );
};

export default SimpleShowLayout;
