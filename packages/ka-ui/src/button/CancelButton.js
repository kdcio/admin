import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const CancelButton = (props) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}`);
  return (
    <CButton color="danger" size="sm" onClick={onClick} {...props}>
      Cancel
    </CButton>
  );
};

export default CancelButton;
