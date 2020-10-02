import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const EditButton = ({ record, ...rest }) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}/${record.id}`);
  return (
    <CButton
      variant="outline"
      color="primary"
      size="sm"
      onClick={onClick}
      {...rest}
    >
      Edit
    </CButton>
  );
};

export default EditButton;
