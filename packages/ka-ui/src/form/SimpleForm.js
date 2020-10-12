import React, { cloneElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDataContext, useData, FETCHED, FETCHING } from 'ka-core';
import { SaveButton, CancelButton } from '../button';

const SimpleForm = (props) => {
  const { status, error, data } = useDataContext();
  const { setData } = useData();
  const { children = [] } = props;

  useEffect(() => {
    if (status === FETCHED) {
      setData(data);
    }
  }, [status, data]);

  if (status === FETCHING) {
    return <p>Fetching</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form>
      {children.map((child, idx) => cloneElement(child, { key: idx }))}
      <div className="form-actions">
        <SaveButton className="mr-2" />
        <CancelButton />
      </div>
    </form>
  );
};

SimpleForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SimpleForm;
