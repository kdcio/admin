import PropTypes from 'prop-types';
import React from 'react';
import { CButton } from '@coreui/react';
import { useRouteContext } from 'ka-core';

const EditButton = ({ record }) => {
  const { history, basePath } = useRouteContext();
  const onClick = () => history.push(`${basePath}/${record.id}`);
  return (
    <CButton variant="outline" color="primary" size="sm" onClick={onClick}>
      Edit
    </CButton>
  );
};

EditButton.propTypes = {
  record: PropTypes.shape({
    id: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  }),
};

EditButton.defaultProps = {
  record: { id: null },
};

export default EditButton;
