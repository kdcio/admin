import React from 'react';
import { CButton } from '@coreui/react';

const ShowButton = (props) => {
  return (
    <CButton variant="outline" color="primary" {...props}>
      Show
    </CButton>
  );
};

export default ShowButton;
