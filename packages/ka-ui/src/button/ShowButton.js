import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const ShowButton = ({ contextProps, record, ...rest }) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}/${record.id}/show`);
  return (
    <CButton variant="outline" color="primary" onClick={onClick} {...rest}>
      Show
    </CButton>
  );
};

export default ShowButton;
