import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext, useFormContext } from 'ka-core';

const SaveButton = () => {
  const { type } = useFormContext();
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}`);
  return (
    <CButton color="primary" size="sm" onClick={onClick}>
      {type === 'edit' ? 'Save' : 'Create'}
    </CButton>
  );
};

export default SaveButton;
