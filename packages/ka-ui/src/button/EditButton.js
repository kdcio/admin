import React from 'react';
import { CButton } from '@coreui/react';

const EditButton = (props) => {
  return (
    <CButton variant="outline" color="primary" {...props}>
      Edit
    </CButton>
  );
};

export default EditButton;
