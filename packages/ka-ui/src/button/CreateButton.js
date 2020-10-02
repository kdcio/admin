import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const CreateButton = (props) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}/create`);
  return (
    <CButton color="primary" size="sm" onClick={onClick} {...props}>
      Create
    </CButton>
  );
};

export default CreateButton;
