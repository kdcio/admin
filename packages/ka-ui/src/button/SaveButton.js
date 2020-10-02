import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const SaveButton = (props) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}`);
  return (
    <CButton color="primary" size="sm" onClick={onClick} {...props}>
      Save
    </CButton>
  );
};

export default SaveButton;
