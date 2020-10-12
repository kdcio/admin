import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext, useData } from 'ka-core';

const ShowButton = () => {
  const { history, basePath } = useRouteContext();
  const { data } = useData();
  const onClick = () => history.push(`${basePath}/${data.id}/show`);
  return (
    <CButton variant="outline" color="primary" size="sm" onClick={onClick}>
      Show
    </CButton>
  );
};

export default ShowButton;
