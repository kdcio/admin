import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const ListButton = (props) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}`);
  return (
    <CButton
      variant="outline"
      color="primary"
      size="sm"
      onClick={onClick}
      {...props}
    >
      List
    </CButton>
  );
};

export default ListButton;
