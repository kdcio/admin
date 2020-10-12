import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext, useData } from 'ka-core';

const EditButton = () => {
  const { history, basePath } = useRouteContext();
  const { data } = useData();
  const onClick = () => history.push(`${basePath}/${data.id}`);

  return (
    <CButton variant="outline" color="primary" size="sm" onClick={onClick}>
      Edit
    </CButton>
  );
};

export default EditButton;
